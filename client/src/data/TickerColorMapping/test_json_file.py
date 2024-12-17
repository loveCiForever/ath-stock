import json
import requests
import numpy as np
import cv2
import os
from dotenv import load_dotenv
from collections import Counter

load_dotenv()

# Function to search for the logo
def search_logo(organ_name):
    api_key = os.getenv('GOOGLE_API_KEY')
    search_engine_id = os.getenv('SEARCH_ENGINE_ID')
    
    query = f'logo của {organ_name}'
    
    url = f'https://www.googleapis.com/customsearch/v1'
    params = {
        'key': api_key,
        'cx': search_engine_id,
        'q': query,
        'searchType': 'image',
        'num': 1  # Number of results to return
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()  # Raise an error for bad responses
        search_results = response.json()
        if 'items' in search_results:
            return search_results['items'][0]['link']  # Return the link to the first image
        return None
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")  # Log the HTTP error
    except Exception as err:
        print(f"An error occurred: {err}")  # Log any other errors
    return None

# Function to detect colors in the image from URL
def detect_colors_from_url(image_url, num_colors=5):
    # Fetch the image data
    response = requests.get(image_url)
    image_data = np.asarray(bytearray(response.content), dtype=np.uint8)
    
    # Decode the image
    image = cv2.imdecode(image_data, cv2.IMREAD_COLOR)
    
    if image is None:
        raise ValueError("Could not decode the image from the URL.")
    
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    pixels = image.reshape(-1, 3)
    counter = Counter(map(tuple, pixels))
    most_common = counter.most_common(num_colors)
    
    total_pixels = sum(counter.values())
    color_percentages = {f'#{r:02x}{g:02x}{b:02x}': (count / total_pixels) * 100 for (r, g, b), count in most_common}
    
    return color_percentages

# Load JSON data from a file
with open('stocks_ticker_vnese_fullname.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Extract organization names
organ_names = [stock['organ_name'] for stock in data]

# Dictionary to hold the results
results = {}

# Process each organization
for organ_name in organ_names:
    print(f"Processing: {organ_name}")
    
    # Search for the logo
    logo_url = search_logo(organ_name)
    if logo_url:
        print(f"Found logo URL: {logo_url}")
        
        # Detect colors directly from the URL
        try:
            colors = detect_colors_from_url(logo_url)
            print(f"Detected colors for {organ_name}: {colors}")
            results[organ_name] = colors  # Store the results
        except Exception as e:
            print(f"Error processing logo for {organ_name}: {e}")
    else:
        print(f"No logo found for {organ_name}")

# Save the results to a JSON file
with open('detected_colors.json', 'w', encoding='utf-8') as outfile:
    json.dump(results, outfile, ensure_ascii=False, indent=4)

print("Color detection results saved to detected_colors.json")