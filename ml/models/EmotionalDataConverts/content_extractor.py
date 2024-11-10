# content_extractor.py

import os
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime

# Đường dẫn thư mục lưu trữ dữ liệu HTML của trang
FULL_CONTENT_PATH = "data/full_content/"

# Kiểm tra và tạo thư mục nếu chưa tồn tại
def create_folder(folder_path):
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

# Hàm lấy toàn bộ nội dung HTML từ URL
def fetch_full_page_content(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.text  # Trả về nội dung HTML
    except requests.exceptions.RequestException as e:
        print(f"Lỗi khi tải trang từ URL {url}: {e}")
        return None

# Hàm lưu dữ liệu HTML vào file
def save_full_content(data, filename):
    create_folder(FULL_CONTENT_PATH)
    file_path = os.path.join(FULL_CONTENT_PATH, filename)
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Đã lưu nội dung HTML đầy đủ tại: {file_path}")

# Hàm tải và lưu toàn bộ nội dung HTML của các URL
def load_and_save_full_content(articles):
    full_content_data = []
    for article in articles:
        # Kiểm tra nếu URL tồn tại
        url = article.get("url")
        if url:
            full_content = fetch_full_page_content(url)
            if full_content:
                article_data = {
                    "title": article.get("title"),
                    "url": url,
                    "full_html_content": full_content  # Lưu toàn bộ nội dung HTML
                }
                full_content_data.append(article_data)
    
    # Tạo tên file với thời gian hiện tại
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"full_content_{timestamp}.json"
    save_full_content(full_content_data, filename)

# Ví dụ sử dụng
if __name__ == "__main__":
    # Giả sử bạn đã tải dữ liệu bài báo từ data_loader và có danh sách các bài báo
    with open("data/raw/articles_stock_vietnam_2024-11-02.json", "r", encoding="utf-8") as f:
        articles = json.load(f)
    
    # Tải và lưu toàn bộ nội dung HTML của các URL từ danh sách bài báo
    load_and_save_full_content(articles)
