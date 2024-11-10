# data_loader.py

import os
import requests
import json
from datetime import datetime

# Đường dẫn thư mục lưu trữ dữ liệu
RAW_DATA_PATH = "data/raw/"

# Hàm kiểm tra và tạo thư mục nếu chưa tồn tại
def create_folder(folder_path):
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

# Hàm tải bài báo từ API
def fetch_articles(api_url, headers=None, params=None):
    try:
        response = requests.get(api_url, headers=headers, params=params)
        response.raise_for_status()
        articles = response.json().get("articles", [])  # Lấy dữ liệu từ JSON response
        return articles
    except requests.exceptions.RequestException as e:
        print(f"Lỗi khi tải bài báo: {e}")
        return None

# Hàm lưu dữ liệu thô vào file JSON
def save_raw_data(data, filename):
    create_folder(RAW_DATA_PATH)
    file_path = os.path.join(RAW_DATA_PATH, filename)
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Dữ liệu thô đã được lưu tại: {file_path}")

# Hàm chính để tải và lưu bài báo
def load_and_save_articles(api_url, headers=None, params=None):
    articles = fetch_articles(api_url, headers=headers, params=params)
    if articles:
        # Thêm thông tin ngày vào mỗi bài báo (nếu API không có trường này)
        timestamp = datetime.now().strftime("%Y-%m-%d")
        for article in articles:
            article["date"] = article.get("publishedAt", timestamp)

        # Lưu dữ liệu
        filename = f"articles_stock_vietnam_{timestamp}.json"
        save_raw_data(articles, filename)
    else:
        print("Không có dữ liệu bài báo nào để lưu.")

# Cấu hình API với khóa và tham số lọc theo chứng khoán ở Việt Nam
if __name__ == "__main__":
    api_url = "https://newsapi.org/v2/everything"
    headers = {"Authorization": "Bearer b156e607c7404c9993a93ca448cb9e30"}
    params = {
        "q": "Vietnam stock",  # Thêm từ khóa để tìm bài báo liên quan đến Việt Nam
        "language": "en",             # Ngôn ngữ, tùy chọn tiếng Anh hoặc tiếng Việt nếu hỗ trợ
        "sortBy": "publishedAt",      # Sắp xếp theo thời gian xuất bản
        "pageSize": 50                # Số lượng bài viết mỗi lần truy vấn
    }

    load_and_save_articles(api_url, headers, params)
