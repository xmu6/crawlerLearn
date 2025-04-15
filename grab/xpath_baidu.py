import requests
from lxml import etree


url = 'https://top.baidu.com/board?platform=pc&sa=pcindex_entry'
headers = {'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'}
response = requests.get(url).text
html = etree.HTML(response)
items = html.xpath('//div[@class="content-wrap_1RisM"]//div[@class="c-single-text-ellipsis"]')
for item in items:
    print(item.text)
    print('-'*50)