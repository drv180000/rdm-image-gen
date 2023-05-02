from bs4 import BeautifulSoup
import requests
import json

word_page = requests.get("https://jpg.fishing/a/word-day.UMq56")
meme_page1 = requests.get("https://jpg.fishing/a/memes.UMToK/?sort=date_desc&page=1")
meme_page2 = requests.get('https://jpg.fishing/album/UMToK/?sort=title_asc&page=2&seek=meme3.bllfLa')
meme_page3 = requests.get('https://jpg.fishing/a/memes.UMToK/?sort=date_desc&page=3&seek=2023-05-02+16%3A32%3A36.feY0Qh')
meme_page4 = requests.get('https://jpg.fishing/a/memes.UMToK/?sort=date_desc&page=4&seek=2023-05-02+16%3A32%3A14.f3xwDn')
meme_page5 = requests.get('https://jpg.fishing/a/memes.UMToK/?sort=date_desc&page=5&seek=2023-05-01+16%3A00%3A43.bllJRP')
burg_page = requests.get("https://jpg.fishing/a/burger.USteH")
art_page1 = requests.get("https://jpg.fishing/album/USaVI/?sort=date_desc&page=1")
art_page2 = requests.get('https://jpg.fishing/a/art.USaVI/?sort=date_desc&page=2&seek=2023-05-02+15%3A51%3A37.f3dfXm')
art_page3 = requests.get('https://jpg.fishing/a/art.USaVI/?sort=date_desc&page=3&seek=2023-05-02+15%3A51%3A15.f3OI9w')
art_page4 = requests.get('https://jpg.fishing/a/art.USaVI/?sort=date_desc&page=4&seek=2023-05-02+15%3A50%3A53.f3qDWo')
art_page5 = requests.get('https://jpg.fishing/a/art.USaVI/?sort=date_desc&page=5&seek=2023-05-02+15%3A50%3A23.f3nhSd')
art_page6 = requests.get('https://jpg.fishing/a/art.USaVI/?sort=date_desc&page=6&seek=2023-05-02+15%3A49%3A59.f3jE4p')
art_page7 = requests.get('https://jpg.fishing/a/art.USaVI/?sort=date_desc&page=7&seek=2023-05-02+15%3A49%3A33.f3RlHn')
react_page = requests.get("https://jpg.fishing/a/reactions.US39A")
irl_page = requests.get("https://jpg.fishing/a/irl.USeQ1")

soup_word = BeautifulSoup(word_page.text, "html.parser")
soup_meme1 = BeautifulSoup(meme_page1.text, 'html.parser')
soup_meme2 = BeautifulSoup(meme_page2.text, 'html.parser')
soup_meme3 = BeautifulSoup(meme_page3.text, 'html.parser')
soup_meme4 = BeautifulSoup(meme_page4.text, 'html.parser')
soup_meme5 = BeautifulSoup(meme_page5.text, 'html.parser')
soup_burg = BeautifulSoup(burg_page.text, "html.parser")
soup_art1 = BeautifulSoup(art_page1.text, "html.parser")
soup_art2 = BeautifulSoup(art_page2.text, "html.parser")
soup_art3 = BeautifulSoup(art_page3.text, "html.parser")
soup_art4 = BeautifulSoup(art_page4.text, "html.parser")
soup_art5 = BeautifulSoup(art_page5.text, "html.parser")
soup_art6 = BeautifulSoup(art_page6.text, "html.parser")
soup_art7 = BeautifulSoup(art_page7.text, "html.parser")
soup_react = BeautifulSoup(react_page.text, "html.parser")
soup_irl = BeautifulSoup(irl_page.text, "html.parser")


data = {}
wordIMGs = []
memeIMGs = []
burgIMGs = []
artIMGs = []
reactIMGs = []
irlIMGs = []

for img in soup_word.findAll('img'):
    wordIMGs.append(img.get('src'))

wordIMGs.pop(0)
data['WOTD'] = wordIMGs

for img in soup_meme1.findAll('img'):
    memeIMGs.append(img.get('src'))
for img in soup_meme2.findAll('img'):
    memeIMGs.append(img.get('src'))
for img in soup_meme3.findAll('img'):
    memeIMGs.append(img.get('src'))
for img in soup_meme4.findAll('img'):
    memeIMGs.append(img.get('src'))
for img in soup_meme5.findAll('img'):
    memeIMGs.append(img.get('src'))    
memeIMGs.pop(0)
memeIMGs.pop(42)
memeIMGs.pop(64)
memeIMGs.pop(106)
memeIMGs.pop(148)
data['MEME'] = memeIMGs

for img in soup_burg.findAll('img'):
    burgIMGs.append(img.get('src'))

burgIMGs.pop(0)
data['BURGER'] = burgIMGs

for img in soup_art1.findAll('img'):
    artIMGs.append(img.get('src'))
for img in soup_art2.findAll('img'):
    artIMGs.append(img.get('src'))
for img in soup_art3.findAll('img'):
    artIMGs.append(img.get('src'))
for img in soup_art4.findAll('img'):
    artIMGs.append(img.get('src'))
for img in soup_art5.findAll('img'):
    artIMGs.append(img.get('src'))
for img in soup_art6.findAll('img'):
    artIMGs.append(img.get('src'))
for img in soup_art7.findAll('img'):
    artIMGs.append(img.get('src'))

artIMGs.pop(0)
artIMGs.pop(42)
artIMGs.pop(126)
artIMGs.pop(168)
artIMGs.pop(210)
artIMGs.pop(252)
artIMGs.pop(294)
data['ART'] = artIMGs

for img in soup_react.findAll('img'):
    reactIMGs.append(img.get('src'))

reactIMGs.pop(0)
data['REACT'] = reactIMGs

for img in soup_irl.findAll('img'):
    irlIMGs.append(img.get('src'))

irlIMGs.pop(0)
data['IRL'] = irlIMGs

with open('Images.json', 'w') as f:
    json.dump(data, f, indent=4)

f.close()
