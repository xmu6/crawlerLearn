import re

import requests

url = "https://movie.douban.com/top250"
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/129.0.0.0 Safari/537.36'}
res = requests.get(url, headers=headers).text
info_list = re.findall(
    r'<div class="info".*?<span class="title">(.*?)</span>.*?<div class="star">.*?property="v:ave'
    r'rage">(.*?)</span>.*?content="10.0">.*?<span>(.*?)人',
    res, re.S)
print(info_list)
print(len(info_list))

