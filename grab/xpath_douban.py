from lxml import etree
import requests


url = "https://movie.douban.com/top250"
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/129.0.0.0 Safari/537.36'}
res = requests.get(url, headers=headers).text
selector = etree.HTML(res)
items = selector.xpath('//div[@class="info"]')
for item in items:
    title = item.xpath('div[@class="hd"]/a/span/text()')[0]
    rating = item.xpath('//span[@class="rating_num"]/text()')[0]
    num = item.xpath('div[@class="bd"]/div[@class="star"]/span[4]/text()')[0]
    print(title, rating, num)



