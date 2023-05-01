from bs4 import BeautifulSoup
import requests
import json

word_page = requests.get("https://jpg.fishing/a/word-day.UMq56")
meme_page = requests.get("https://jpg.fishing/album/UMToK/?sort=date_desc&page=1")
soup1 = BeautifulSoup(word_page.text, "html.parser")
soup2 = BeautifulSoup(meme_page.text, 'html.parser')

data = {}
wordIMGs = []
memeIMGs = []
for img in soup1.findAll('img'):
    wordIMGs.append(img.get('src'))

data['WOTD'] = wordIMGs
wordIMGs.pop(0)

for img in soup2.findAll('img'):
    memeIMGs.append(img.get('src'))

data['MEME'] = memeIMGs
memeIMGs.pop(0)

with open('Images.json', 'w') as f:
    json.dump(data, f)

f.close()
