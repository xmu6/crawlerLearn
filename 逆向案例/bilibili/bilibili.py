import time

import requests
from functools import partial
import subprocess
import urllib.parse
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

import execjs

cookies = {
    'buvid3': 'F5A95ACD-9CA0-431F-B960-8571F334DC7830654infoc',
    'b_nut': '1745749330',
    'b_lsid': '3A162FB5_19676C46836',
    '_uuid': 'EBAF9ABB-71DE-FE10B-8D85-E7ADE5373C10305410infoc',
    'buvid_fp': '14ab7133ca2867121f673b963386a6c3',
    'header_theme_version': 'CLOSE',
    'enable_web_push': 'DISABLE',
    'enable_feed_channel': 'ENABLE',
    'home_feed_column': '5',
    'browser_resolution': '1560-897',
    'buvid4': 'BDA9ED2E-66ED-AB2B-FC93-85E6D178C3BD31798-025042718-PG69r9qauLLY6TyLBj77Mw%3D%3D',
    'SESSDATA': 'f574a9b7%2C1761301353%2C4c115%2A42CjDNFlXd2OH7RF4b_D13xlS7bZvCnV8UfxTLCtX7SxwjBNr3SBZEEAJQFwGRbTwDt-ISVmZDNXRJelM0cENQMjdMX3BBT0FydWEtOUlXQ21nQzM5alUzNG13Ml9ZZWY1c0N5THJMSnRFWUs3bUhMXzRzRnlYOEp6TUd6Y213TVJMVnlRYzdIU3FRIIEC',
    'bili_jct': '3e1f5bec9c499ec9e9e00b74f5152ab3',
    'DedeUserID': '1953213358',
    'DedeUserID__ckMd5': '4a9a5ba6aa73e877',
    'sid': '4yab4udr',
    'bili_ticket': 'eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDYwMDg1NzIsImlhdCI6MTc0NTc0OTMxMiwicGx0IjotMX0.5MJLYQR6P5xqpCQ0mnhKyCZfUcuc_bLQLXxmOoVN5ZI',
    'bili_ticket_expires': '1746008512',
    'CURRENT_FNVAL': '4048',
    'rpdid': "|(J~lu)lkmuR0J'u~Rl~RmJ~Y",
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'origin': 'https://www.bilibili.com',
    'priority': 'u=1, i',
    'referer': 'https://www.bilibili.com/video/BV1VRABehEzm/?spm_id_from=333.337.search-card.all.click&vd_source=5fd3df872c1bdbeabb8e2ad8f1c5b7a5',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': "buvid3=F5A95ACD-9CA0-431F-B960-8571F334DC7830654infoc; b_nut=1745749330; b_lsid=3A162FB5_19676C46836; _uuid=EBAF9ABB-71DE-FE10B-8D85-E7ADE5373C10305410infoc; buvid_fp=14ab7133ca2867121f673b963386a6c3; header_theme_version=CLOSE; enable_web_push=DISABLE; enable_feed_channel=ENABLE; home_feed_column=5; browser_resolution=1560-897; buvid4=BDA9ED2E-66ED-AB2B-FC93-85E6D178C3BD31798-025042718-PG69r9qauLLY6TyLBj77Mw%3D%3D; SESSDATA=f574a9b7%2C1761301353%2C4c115%2A42CjDNFlXd2OH7RF4b_D13xlS7bZvCnV8UfxTLCtX7SxwjBNr3SBZEEAJQFwGRbTwDt-ISVmZDNXRJelM0cENQMjdMX3BBT0FydWEtOUlXQ21nQzM5alUzNG13Ml9ZZWY1c0N5THJMSnRFWUs3bUhMXzRzRnlYOEp6TUd6Y213TVJMVnlRYzdIU3FRIIEC; bili_jct=3e1f5bec9c499ec9e9e00b74f5152ab3; DedeUserID=1953213358; DedeUserID__ckMd5=4a9a5ba6aa73e877; sid=4yab4udr; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDYwMDg1NzIsImlhdCI6MTc0NTc0OTMxMiwicGx0IjotMX0.5MJLYQR6P5xqpCQ0mnhKyCZfUcuc_bLQLXxmOoVN5ZI; bili_ticket_expires=1746008512; CURRENT_FNVAL=4048; rpdid=|(J~lu)lkmuR0J'u~Rl~RmJ~Y",
}
# page = "{\"offset\":\"\"}"
page = "{\"offset\":\"{\\\"type\\\":1,\\\"direction\\\":1,\\\"session_id\\\":\\\"1787652065749059\\\",\\\"data\\\":{\\\"pn\\\":2}}\"}"

url_page = urllib.parse.quote(page)
e = {
    "oid": "114028630252325",
    "type": 1,
    "mode": 3,
    "pagination_str": page,
    "plat": 1,
    "web_location": 1315875
}
obj = execjs.compile(open('blbl.js', encoding='utf-8').read())
w_rid, wts = obj.call('get_rid',e)

response = requests.get(
    f'https://api.bilibili.com/x/v2/reply/wbi/main?oid=114028630252325&type=1&mode=3&pagination_str={url_page}&plat=1&web_location=1315875&w_rid={w_rid}&wts={wts}',
    cookies=cookies,
    headers=headers,
)
# print(response.json())
l = response.json()['data']['replies']
for i in l:
    print(i['content']['message'])
time.sleep(0.5)
