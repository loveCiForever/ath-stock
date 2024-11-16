# financial_sentiment_analysis.py

import os
import json
from datetime import datetime
from collections import defaultdict
from transformers import pipeline
from nltk.tokenize import sent_tokenize
import torch

# Đường dẫn thư mục dữ liệu
PROCESSED_DATA_PATH = "data/processed/"
SENTIMENT_DATA_PATH = "data/sentiment/"

# Kiểm tra và tạo thư mục nếu chưa tồn tại
def create_folder(folder_path):
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

# Hàm chia nhỏ văn bản thành các đoạn có độ dài tối đa
def split_text(text, max_length=512):
    sentences = sent_tokenize(text)
    chunks = []
    current_chunk = ""

    for sentence in sentences:
        if len(current_chunk.split()) + len(sentence.split()) <= max_length:
            current_chunk += " " + sentence
        else:
            chunks.append(current_chunk.strip())
            current_chunk = sentence

    if current_chunk:
        chunks.append(current_chunk.strip())

    return chunks

# Hàm phân tích cảm xúc cho từng đoạn văn bản
def analyze_sentiment_for_chunks(chunks, sentiment_analyzer):
    results = []
    for chunk in chunks:
        result = sentiment_analyzer(chunk, truncation=True, max_length=512)[0]
        results.append(result)
    return results

# Hàm tổng hợp kết quả cảm xúc từ các đoạn
def aggregate_sentiment(results):
    positive_count = sum(1 for result in results if result["label"] == "positive")
    negative_count = sum(1 for result in results if result["label"] == "negative")
    neutral_count = sum(1 for result in results if result["label"] == "neutral")

    if positive_count > negative_count and positive_count > neutral_count:
        return "positive"
    elif negative_count > positive_count and negative_count > neutral_count:
        return "negative"
    else:
        return "neutral"

# Hàm chính để phân tích cảm xúc và tổng hợp kết quả theo ngày
def sentiment_analysis():
    create_folder(SENTIMENT_DATA_PATH)

    # Tải mô hình FinBERT từ Hugging Face và thiết lập GPU nếu có
    sentiment_analyzer = pipeline(
        "sentiment-analysis",
        model="yiyanghkust/finbert-tone",
        device=0 if torch.cuda.is_available() else -1
    )

    # Tạo dictionary để lưu trữ kết quả cảm xúc theo ngày
    daily_sentiment_summary = defaultdict(lambda: {"positive": 0, "negative": 0, "neutral": 0})

    # Duyệt qua từng file trong thư mục processed
    for filename in os.listdir(PROCESSED_DATA_PATH):
        if filename.endswith(".json"):
            with open(os.path.join(PROCESSED_DATA_PATH, filename), "r", encoding="utf-8") as f:
                articles = json.load(f)

            # Phân tích cảm xúc cho từng bài báo
            for article in articles:
                title = article.get("title", "No Title")
                processed_content = article.get("processed_content", "")
                # Ngày xuất bản từ tiêu đề bài viết (giả định ngày có trong tiêu đề hoặc cần bổ sung cách lấy ngày nếu có field ngày)
                date_str = article.get("date", datetime.now().strftime("%Y-%m-%d"))
                date = datetime.strptime(date_str, "%Y-%m-%d").date()
                
                # Chia nhỏ văn bản thành các đoạn và phân tích cảm xúc từng đoạn
                chunks = split_text(processed_content)
                results = analyze_sentiment_for_chunks(chunks, sentiment_analyzer)
                aggregated_label = aggregate_sentiment(results)

                # Cập nhật kết quả cảm xúc theo ngày
                daily_sentiment_summary[date][aggregated_label] += 1

    # Lưu dữ liệu cảm xúc theo ngày vào file JSON
    sentiment_filename = os.path.join(SENTIMENT_DATA_PATH, "daily_sentiment_summary.json")
    with open(sentiment_filename, "w", encoding="utf-8") as f:
        json.dump({str(date): summary for date, summary in daily_sentiment_summary.items()}, f, ensure_ascii=False, indent=4)
    print(f"Đã lưu kết quả phân tích cảm xúc theo ngày tại: {sentiment_filename}")

# Chạy phân tích cảm xúc
if __name__ == "__main__":
    sentiment_analysis()
