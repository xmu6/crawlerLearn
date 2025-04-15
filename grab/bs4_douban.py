import requests
from bs4 import BeautifulSoup
url = 'https://movie.douban.com/top250'
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/129.0.0.0 Safari/537.36'}
res = requests.get(url, headers=headers).text
soup = BeautifulSoup(res, 'lxml')
items = soup.find_all(class_='item')
for tag in items:
    title = tag.find(class_='title').string
    rating = tag.find(class_='rating_num').string
    nums = tag.find(property='v:best').find_next_sibling().string
    print(title, rating, nums)
