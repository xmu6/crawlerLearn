import json

import requests
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

import execjs
import base64

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://www.swguancha.com',
    'Referer': 'https://www.swguancha.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'deviceType': '1',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sw8': '1-MTExenhzZGU3ZkE=-MjIyMjIyMjI=-0-MzMzMzMzMzM=-NDQ0NDQ0NDQ=-bWV0aG9k-NTU1NTU1NTU=',
}
for i in range(1, 10):
    print(f'第{i}页')
    json_data = {
        'size': 6,
        'current': i,
        'propertyCode': [
            'DISTRICT_PROP_GJ025_RJDQSCZZ',
            'DISTRICT_PROP_GJ117_NMSYGGQDCYYCLS',
            'DISTRICT_PROP_GJ001_NMHJRK',
        ],
        'dimensionTime': '2019',
        'levelType': 2,
    }

    data = requests.post('https://app.swguancha.com/client/v1/cPublic/consumer/baseInfo', headers=headers, json=json_data)
    obj = execjs.compile(open('shuwei.js').read())
    response = json.loads(obj.call('decrypt', data.text))

    for city in response['data']['data']:
        print(city)
