import pandas as pd
import json
from vnstock3 import Vnstock

# Fetch stock data
stock = Vnstock().stock(symbol='ACB', source='VCI')
stocks = stock.listing.all_symbols()

# Convert to DataFrame if it's not already
if not isinstance(stocks, pd.DataFrame):
    stocks = pd.DataFrame(stocks)

# Save to CSV
stocks.to_csv('stocks_ticker_vnese_fullname.csv', index=False)  # index=False -> not include row indices

# Save to json
stocks_list = stocks.to_dict(orient='records')

# Save to JSON with pretty printing
with open('stocks_ticker_vnese_fullname.json', 'w', encoding='utf-8') as file:
    json.dump(stocks_list, file, ensure_ascii=False, indent=4) # 'records' format for a list of records