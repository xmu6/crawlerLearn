import subprocess

import requests
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')

import execjs

headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://aerfaying.com',
    'Referer': 'https://aerfaying.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'username': 'adminxiao',
    'password': 'qqqqqq',
}
obj = execjs.compile(open('阿尔法之webpack.js').read())
ts = obj.call('get_s', data['username'], data['password'])
data.update(ts)

response = requests.post('https://aerfaying.com/WebApi/Users/Login', headers=headers, data=data)
print(response.text)

