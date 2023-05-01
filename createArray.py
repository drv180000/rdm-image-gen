from bs4 import BeautifulSoup
import requests
import json

word_page = requests.get("https://jpg.fishing/a/word-day.UMq56")
meme_page = requests.get("https://jpg.fishing/a/memes.UMToK")
burg_page = requests.get("https://jpg.fishing/a/burger.USteH")
art_page = requests.get("https://jpg.fishing/a/art.USaVI")
react_page = requests.get("https://jpg.fishing/a/reactions.US39A")
irl_page = requests.get("https://jpg.fishing/a/irl.USeQ1")

soup1 = BeautifulSoup(word_page.text, "html.parser")
soup2 = BeautifulSoup(meme_page.text, 'html.parser')
soup3 = BeautifulSoup(burg_page.text, "html.parser")
soup4 = BeautifulSoup(art_page.text, "html.parser")
soup5 = BeautifulSoup(react_page.text, "html.parser")
soup6 = BeautifulSoup(irl_page.text, "html.parser")


data = {}
wordIMGs = []
memeIMGs = []
burgIMGs = []
artIMGs = []
reactIMGs = []
irlIMGs = []

for img in soup1.findAll('img'):
    wordIMGs.append(img.get('src'))

wordIMGs.pop(0)
data['WOTD'] = wordIMGs

for img in soup2.findAll('img'):
    memeIMGs.append(img.get('src'))

memeIMGs.pop(0)
data['MEME'] = memeIMGs

for img in soup3.findAll('img'):
    burgIMGs.append(img.get('src'))

burgIMGs.pop(0)
data['BURGER'] = burgIMGs

for img in soup4.findAll('img'):
    artIMGs.append(img.get('src'))

artIMGs.pop(0)
data['ART'] = artIMGs

for img in soup5.findAll('img'):
    reactIMGs.append(img.get('src'))

reactIMGs.pop(0)
data['REACT'] = reactIMGs

for img in soup6.findAll('img'):
    irlIMGs.append(img.get('src'))

irlIMGs.pop(0)
data['IRL'] = irlIMGs

with open('Images.json', 'w') as f:
    json.dump(data, f, indent=4)

f.close()
