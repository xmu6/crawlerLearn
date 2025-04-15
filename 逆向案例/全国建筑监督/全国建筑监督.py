import requests
import json

import requests
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

import execjs

cookies = {
    'Hm_lvt_b1b4b9ea61b6f1627192160766a9c55c': '1737812634',
    'Hm_lpvt_b1b4b9ea61b6f1627192160766a9c55c': '1737812634',
    'HMACCOUNT': '3EC348E14EC919E9',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    # 'Cookie': 'Hm_lvt_b1b4b9ea61b6f1627192160766a9c55c=1737812634; Hm_lpvt_b1b4b9ea61b6f1627192160766a9c55c=1737812634; HMACCOUNT=3EC348E14EC919E9',
    'Referer': 'https://jzsc.mohurd.gov.cn/data/company',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'accessToken': '',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sw8': '1-MTExenhzZGU3ZkE=-MjIyMjIyMjI=-0-MzMzMzMzMzM=-NDQ0NDQ0NDQ=-bWV0aG9k-NTU1NTU1NTU=',
    'timeout': '30000',
    'v': '231012',
}
for i in range(1, 11):
    print(f'第{i}页')
    params = {
        'pg': str(i),
        'pgsz': '15',
        'total': '450',
    }

    data = requests.get(
        'https://jzsc.mohurd.gov.cn/APi/webApi/dataservice/query/comp/list',
        params=params,
        cookies=cookies,
        headers=headers,
    )
    obj = execjs.compile(open('qgjzjd.js').read())
    res = json.loads(obj.call('decrypt', data.text))
    for item in res['data']['list']:
        print(item)
