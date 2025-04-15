import json

import requests

from functools import partial

import subprocess

subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs
for i in range(10):
    print(f'第{i+1}页')
    cookies = {
        'yb_header_active': '-1',
        'amap_local': '510100',
    }

    headers = {
        'Accept': 'application/json',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        # 'Cookie': 'yb_header_active=-1; amap_local=510100',
        'Origin': 'https://fuwu.nhsa.gov.cn',
        'Referer': 'https://fuwu.nhsa.gov.cn/nationalHallSt/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'X-Tingyun': 'c=B|4Nl_NnGbjwY;x=f139151e405d4857',
        'channel': 'web',
        'contentType': 'application/x-www-form-urlencoded',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-tif-nonce': 'R7yDPFtj',
        'x-tif-paasid': 'undefined',
        'x-tif-signature': 'adbbc806f99c7bbe867f6e07d9dd553951457c19ecd878f707bd23a3ea99949c',
        'x-tif-timestamp': '1736669182',
    }
    page = i+1
    obj = execjs.compile(open('国家医保.js').read())
    json_data = json.loads(obj.call('encrypt_data', page))

    response = requests.post(
        'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryDiseaseCatalogByPage',
        cookies=cookies,
        headers=headers,
        json=json_data,
    )

    data = obj.call('decrypt_data', response.json())
    for item in data['list']:
        print(item)
