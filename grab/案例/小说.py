import requests
from lxml import etree
import os


headers = {
    'Referer': 'https://5000yan.com/',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

response = requests.get('https://5000yan.com/fenlei/sidamingzhu/', headers=headers)
response.encoding = 'utf-8'
html = etree.HTML(response.text)
book_lists = html.xpath('.//div[@class="list-group-flush "]')
for book in book_lists:
    book_name = book.xpath('.//h5/text()')[0].strip()
    os.makedirs('小说/'+book_name, exist_ok=True)
    href = book.xpath('./a/@href')[0]
    contents = requests.get(href, headers=headers)
    contents.encoding = 'utf-8'
    contents_html = etree.HTML(contents.text)
    zj_list = contents_html.xpath('.//li[@class="p-2"]/a')
    for zj in zj_list:
        title = zj.xpath('./text()')[0].replace('?','')
        zj_href = zj.xpath('./@href')[0]
        novel = requests.get(zj_href, headers=headers)
        novel.encoding = 'utf-8'
        novel_html = etree.HTML(novel.text)
        novel_list = novel_html.xpath('.//div[@class="grap"]/div')
        with open('小说/'+book_name+'/'+title+'.txt', mode='w', encoding='utf-8') as f:
            for novel_content in novel_list:
                if novel_content.xpath('./text()') != '&nbsp;':
                    f.write('        '+novel_content.xpath('./text()')[0].strip()+'\n')
    print(book_name+'下载完成')






