import urllib.request
import json
import re

url = "https://cake-knee-675.notion.site/Costumer-Behaviour-KPI-s-29ba8e706d1e8040bf9fd6fe90cca9d7"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # Try to find the hydration data
    match = re.search(r'<script id="hydration-data" type="application/json">(.*?)</script>', html)
    if match:
        data = json.loads(match.group(1))
        print("Found hydration data!")
    else:
        # Just text extraction
        from html.parser import HTMLParser
        class MyHTMLParser(HTMLParser):
            def __init__(self):
                super().__init__()
                self.text = []
            def handle_data(self, data):
                if data.strip():
                    self.text.append(data.strip())
        parser = MyHTMLParser()
        parser.feed(html)
        print("\n".join(parser.text))
except Exception as e:
    print("Error:", e)
