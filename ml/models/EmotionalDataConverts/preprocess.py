# preprocess.py

import os
import re
import json
from bs4 import BeautifulSoup
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer

# Đường dẫn thư mục dữ liệu
FULL_CONTENT_PATH = "data/full_content/"
PROCESSED_DATA_PATH = "data/processed/"

# Kiểm tra và tạo thư mục nếu chưa tồn tại
def create_folder(folder_path):
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

# Hàm làm sạch văn bản
def clean_text(text):
    # Sử dụng BeautifulSoup để loại bỏ thẻ HTML
    text = BeautifulSoup(text, "html.parser").get_text()
    # Loại bỏ dấu câu và ký tự đặc biệt
    text = re.sub(r"[^\w\s]", "", text)
    # Loại bỏ số
    text = re.sub(r"\d+", "", text)
    # Đưa văn bản về chữ thường
    text = text.lower()
    return text

# Hàm tách các từ bị dính liền dựa vào ký tự in hoa nằm giữa từ viết thường
def separate_stuck_words(text):
    return re.sub(r"([a-z])([A-Z])", r"\1 \2", text)

# Hàm loại bỏ từ dừng
def remove_stopwords(text):
    stop_words = set(stopwords.words("english"))
    word_tokens = word_tokenize(text)
    filtered_text = [word for word in word_tokens if word not in stop_words]
    return " ".join(filtered_text)

# Hàm chuẩn hóa từ (stemming)
def stem_words(text):
    ps = PorterStemmer()
    word_tokens = word_tokenize(text)
    stemmed_text = [ps.stem(word) for word in word_tokens]
    return " ".join(stemmed_text)

# Hàm tiền xử lý dữ liệu
def preprocess_article(article):
    if "full_html_content" in article:
        text = article["full_html_content"]
        text = clean_text(text)              # Làm sạch văn bản
        text = separate_stuck_words(text)     # Tách từ bị dính liền
        text = remove_stopwords(text)         # Loại bỏ từ dừng
        text = stem_words(text)               # Chuẩn hóa từ
        # Trả về chỉ tiêu đề và văn bản đã tiền xử lý
        return {
            "title": article.get("title", "No Title"),
            "processed_content": text
        }
    return None

# Hàm tải dữ liệu từ thư mục full_content và lưu vào thư mục processed
def preprocess_data():
    create_folder(PROCESSED_DATA_PATH)

    # Duyệt qua từng file trong thư mục full_content
    for filename in os.listdir(FULL_CONTENT_PATH):
        if filename.endswith(".json"):
            with open(os.path.join(FULL_CONTENT_PATH, filename), "r", encoding="utf-8") as f:
                articles = json.load(f)
            
            # Tiền xử lý từng bài báo và chỉ lấy bài báo hợp lệ
            processed_articles = [preprocess_article(article) for article in articles if preprocess_article(article) is not None]

            # Lưu dữ liệu đã tiền xử lý vào file mới
            processed_filename = f"processed_{filename}"
            with open(os.path.join(PROCESSED_DATA_PATH, processed_filename), "w", encoding="utf-8") as f:
                json.dump(processed_articles, f, ensure_ascii=False, indent=4)
            print(f"Đã lưu dữ liệu đã tiền xử lý tại: {processed_filename}")

# Chạy hàm tiền xử lý dữ liệu
if __name__ == "__main__":
    preprocess_data()
