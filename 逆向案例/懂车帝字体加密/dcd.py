import json

import requests
from zt_utils import *
cookies = {
    'ttwid': '1%7Cf29mLW8zMNcnc8nQa-uq67WpPFWWlpPg7HahYADhdR4%7C1746356531%7C06eafb830bf8c7c156566958687c8f7033ed66a1cb9e020904d7c6e2a47eafa8',
    'tt_webid': '7500544059033568830',
    'tt_web_version': 'new',
    'is_dev': 'false',
    'is_boe': 'false',
    'Hm_lvt_3e79ab9e4da287b5752d8048743b95e6': '1746356533',
    'HMACCOUNT': '1F51A74C115B18AD',
    'x-web-secsdk-uid': 'e8c1d32e-9cb0-46e7-b59a-d1d360156784',
    's_v_web_id': 'verify_ma9jl99i_G3WKuu0I_H8JI_4tY7_AoiC_NE92fPx8bWab',
    '_gid': 'GA1.2.1145690988.1746356536',
    '_gat_gtag_UA_138671306_1': '1',
    'city_name': '%E9%87%8D%E5%BA%86',
    '_ga': 'GA1.1.1488811730.1746356536',
    '_ga_YB3EWSDTGF': 'GS1.1.1746356536.1.1.1746356547.49.0.0',
    'Hm_lpvt_3e79ab9e4da287b5752d8048743b95e6': '1746356547',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.dongchedi.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.dongchedi.com/usedcar/x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    'x-forwarded-for': '',
    # 'cookie': 'ttwid=1%7Cf29mLW8zMNcnc8nQa-uq67WpPFWWlpPg7HahYADhdR4%7C1746356531%7C06eafb830bf8c7c156566958687c8f7033ed66a1cb9e020904d7c6e2a47eafa8; tt_webid=7500544059033568830; tt_web_version=new; is_dev=false; is_boe=false; Hm_lvt_3e79ab9e4da287b5752d8048743b95e6=1746356533; HMACCOUNT=1F51A74C115B18AD; x-web-secsdk-uid=e8c1d32e-9cb0-46e7-b59a-d1d360156784; s_v_web_id=verify_ma9jl99i_G3WKuu0I_H8JI_4tY7_AoiC_NE92fPx8bWab; _gid=GA1.2.1145690988.1746356536; _gat_gtag_UA_138671306_1=1; city_name=%E9%87%8D%E5%BA%86; _ga=GA1.1.1488811730.1746356536; _ga_YB3EWSDTGF=GS1.1.1746356536.1.1.1746356547.49.0.0; Hm_lpvt_3e79ab9e4da287b5752d8048743b95e6=1746356547',
}

params = {
    'aid': '1839',
    'app_name': 'auto_web_pc',
}

data = '&sh_city_name=全国&page=1&limit=20'.encode()

response = requests.post(
    'https://www.dongchedi.com/motor/pc/sh/sh_sku_list',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
)
# print(response.json())
res = response.json()


font_map = extract_text_from_font('dcd.woff2')
print('font_map:::', font_map)

# 处理\u
def handle_unicode(text):
    s = ''
    for i in text:
        if repr(i)[3:-1] != '':
            s += str(font_map[repr(i)[3:-1]])
        else:
            s += i
    return s


for item in res['data']['search_sh_sku_info_list']:
    print(handle_unicode(item['sub_title']))
    print(handle_unicode(item['official_price']))
    print(handle_unicode(item['sh_price']))
    print()