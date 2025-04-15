import time

import requests
from hashlib import sha1
cookies = {
    'gitblock-session-id': 'f0byxmholt4vmd1gyrjabrcn',
}

headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    # 'Cookie': 'gitblock-session-id=f0byxmholt4vmd1gyrjabrcn',
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
username = 'adminxiao'
password = 'qqqqqq'
t = int(time.time()*1000) + 2592000000 + 30000
r = f'/WebApi/Users/Login?username={username}&password={password}DUE$DEHFYE(YRUEHD*&&t={t}'

s = sha1(r.encode('utf-8')).hexdigest()


data = {
    'username': username,
    'password': password,
    't': str(t),
    's': s,
}

response = requests.post('https://aerfaying.com/WebApi/Users/Login', cookies=cookies, headers=headers, data=data)
print(response.json())

