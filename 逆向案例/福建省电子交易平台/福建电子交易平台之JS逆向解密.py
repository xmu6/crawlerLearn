import subprocess

import requests
import base64

import time
# 针对Windows系统
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs

for i in range(20):
    print('第{}页'.format(i + 1))
    json_data = {
        'pageNo': i,
        'pageSize': 10,
        'total': 777,
        'type': '12',
        'timeType': '0',
        'ts': int(time.time() * 1000),
    }
    js_code = open('福建电子交易平台之JS逆向.js').read()
    js_compile = execjs.compile(js_code)
    portal_sign = js_compile.call('d', json_data)

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://ggzyfw.fujian.gov.cn',
        'Referer': 'https://ggzyfw.fujian.gov.cn/index/newList/?type=12',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'portal-sign': portal_sign,
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    response = requests.post('https://ggzyfw.fujian.gov.cn/FwPortalApi/Article/PageList', headers=headers,
                             json=json_data)
    text = response.json()["Data"]
    ret = js_compile.call('b', text)
    print(ret)
