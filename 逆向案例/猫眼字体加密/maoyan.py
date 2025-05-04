import requests
import re
from zt_utils import *
from lxml import etree

cookies = {
    'uuid_n_v': 'v1',
    'uuid': '3945698028B411F0BCAEF539C8F9DFDE0A0002B118A740CD92C1A332CD3BB0BB',
    '_csrf': '80832bd9536b86f5f487a736e116851a8a0200e239377a81eb32fd7b3836b2bf',
    '_lxsdk_cuid': '1969a108c06c8-081547b422262f8-26011f51-18c180-1969a108c06c8',
    '_lxsdk': '3945698028B411F0BCAEF539C8F9DFDE0A0002B118A740CD92C1A332CD3BB0BB',
    'Hm_lvt_e0bacf12e04a7bd88ddbd9c74ef2b533': '1746341498',
    'HMACCOUNT': '1F51A74C115B18AD',
    '_ga': 'GA1.1.2076456334.1746341498',
    '_ga_WN80P4PSY7': 'GS1.1.1746341498.1.1.1746341542.0.0.0',
    'Hm_lpvt_e0bacf12e04a7bd88ddbd9c74ef2b533': '1746341543',
    '__mta': '141865485.1746341498113.1746341528066.1746341543043.3',
    '_lxsdk_s': '1969a108c07-dfc-498-a56%7C%7C6',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.maoyan.com/films',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'uuid_n_v=v1; uuid=3945698028B411F0BCAEF539C8F9DFDE0A0002B118A740CD92C1A332CD3BB0BB; _csrf=80832bd9536b86f5f487a736e116851a8a0200e239377a81eb32fd7b3836b2bf; _lxsdk_cuid=1969a108c06c8-081547b422262f8-26011f51-18c180-1969a108c06c8; _lxsdk=3945698028B411F0BCAEF539C8F9DFDE0A0002B118A740CD92C1A332CD3BB0BB; Hm_lvt_e0bacf12e04a7bd88ddbd9c74ef2b533=1746341498; HMACCOUNT=1F51A74C115B18AD; _ga=GA1.1.2076456334.1746341498; _ga_WN80P4PSY7=GS1.1.1746341498.1.1.1746341542.0.0.0; Hm_lpvt_e0bacf12e04a7bd88ddbd9c74ef2b533=1746341543; __mta=141865485.1746341498113.1746341528066.1746341543043.3; _lxsdk_s=1969a108c07-dfc-498-a56%7C%7C6',
}

params = {
    'showType': '2',
}

response = requests.get('https://www.maoyan.com/films', params=params, cookies=cookies, headers=headers)
data = response.text
path = re.findall(r',url\("(.*>?woff)"', data)[0]
res = requests.get('https:' + path)
with open('font.woff', 'wb') as f:
    f.write(res.content)

# 改字体
font_map = extract_text_from_font('font.woff')
# print('font_map:::', font_map)
for k, v in font_map.items():
    data = data.replace(k+';', v)
# print(data)


html_data = etree.HTML(data)
div_list = html_data.xpath('//dl[@class="movie-list"]//dd')
for v in div_list:
    try:
        title = v.xpath(f'./div[2]/a/text()')[0]
        stone_font = v.xpath(f'./div[3]/span/text()')[0]
        print('title:', title)
        print('stone_font', stone_font)
        print('*'*40)
    except IndexError:
        continue

