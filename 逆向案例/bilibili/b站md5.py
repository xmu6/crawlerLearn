import time
from hashlib import md5
import requests
import urllib.parse

cookies = {
    'buvid3': '8335CA96-FCA7-1561-B9DE-7FA7BB47A85E30987infoc',
    '_uuid': '3931010AE2-B693-267E-3C44-73A8FB4B9E1E48238infoc',
    'buvid_fp': 'a245cfc73c9f8a7462550c0df0288585',
    'buvid4': 'B35281B3-5FD3-6FE4-90DF-C55BE771E69B39962-025040512-ZLhZNYLN3vAu4Qn88lj/Kw%3D%3D',
    'b_nut': '100',
    'rpdid': "|(u)Yk)Ykk||0J'u~RJ)lYkYu",
    'header_theme_version': 'CLOSE',
    'enable_web_push': 'DISABLE',
    'enable_feed_channel': 'ENABLE',
    'bili_ticket': 'eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDU5MTQyMDcsImlhdCI6MTc0NTY1NDk0NywicGx0IjotMX0._9GQmW9nzHQ_jR_LfN8yhDwN6rDPre9mumDoaZNQD54',
    'bili_ticket_expires': '1745914147',
    'SESSDATA': 'e362b9d4%2C1761225681%2C1d1f1%2A42CjCqD0z5XpLB7yatpQZrERPrYs8Ppcaumkg-yQQH2ok2-4LroacV7U-aR5tGPrlyYpgSVmtfWWN1a0lwQ1NFZGxqTkVqOGlvM1FJSy0zaURZbG5zc21PQTBHYWR2Z25oSTctMnJha3RxYXJqcEpIb3RMaGEycWZyaVJYa3VrSkJ5ZGpXUm1zWGRBIIEC',
    'bili_jct': 'df12896732fc588bace44b6c3e63c9c7',
    'DedeUserID': '1953213358',
    'DedeUserID__ckMd5': '4a9a5ba6aa73e877',
    'bp_t_offset_1953213358': '1060207862359261184',
    'b_lsid': 'C10106F22E_19677936E5B',
    'sid': '5416w06r',
    'home_feed_column': '4',
    'browser_resolution': '1200-1773',
    'CURRENT_FNVAL': '4048',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'origin': 'https://www.bilibili.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.bilibili.com/video/BV1VRABehEzm/?spm_id_from=333.337.search-card.all.click&vd_source=5fd3df872c1bdbeabb8e2ad8f1c5b7a5',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': "buvid3=8335CA96-FCA7-1561-B9DE-7FA7BB47A85E30987infoc; _uuid=3931010AE2-B693-267E-3C44-73A8FB4B9E1E48238infoc; buvid_fp=a245cfc73c9f8a7462550c0df0288585; buvid4=B35281B3-5FD3-6FE4-90DF-C55BE771E69B39962-025040512-ZLhZNYLN3vAu4Qn88lj/Kw%3D%3D; b_nut=100; rpdid=|(u)Yk)Ykk||0J'u~RJ)lYkYu; header_theme_version=CLOSE; enable_web_push=DISABLE; enable_feed_channel=ENABLE; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDU5MTQyMDcsImlhdCI6MTc0NTY1NDk0NywicGx0IjotMX0._9GQmW9nzHQ_jR_LfN8yhDwN6rDPre9mumDoaZNQD54; bili_ticket_expires=1745914147; SESSDATA=e362b9d4%2C1761225681%2C1d1f1%2A42CjCqD0z5XpLB7yatpQZrERPrYs8Ppcaumkg-yQQH2ok2-4LroacV7U-aR5tGPrlyYpgSVmtfWWN1a0lwQ1NFZGxqTkVqOGlvM1FJSy0zaURZbG5zc21PQTBHYWR2Z25oSTctMnJha3RxYXJqcEpIb3RMaGEycWZyaVJYa3VrSkJ5ZGpXUm1zWGRBIIEC; bili_jct=df12896732fc588bace44b6c3e63c9c7; DedeUserID=1953213358; DedeUserID__ckMd5=4a9a5ba6aa73e877; bp_t_offset_1953213358=1060207862359261184; b_lsid=C10106F22E_19677936E5B; sid=5416w06r; home_feed_column=4; browser_resolution=1200-1773; CURRENT_FNVAL=4048",
}
oid = "114028630252325"
for i in range(3):
    if i == 0:
        pagination_str = "{\"offset\":\"\"}"
    else:
        pagination_str = '{\"offset\":\"{\\\"type\\\":1,\\\"direction\\\":1,\\\"session_id\\\":\\\"1787661227452796\\\",\\\"data\\\":{\\\"pn\\\":%d}}\"}'%(i+1)
    url_pagination_str = urllib.parse.quote(pagination_str)
    wts = str(int(time.time()))
    e = {
        "oid": oid,
        "type": 1,
        "mode": 3,
        "pagination_str": url_pagination_str,
        "plat": 1,
        "web_location": 1315875
    }
    query_string = '&'.join(f"{k}={v}" for k, v in sorted(e.items())) + f'&wts={wts}' + "ea1db124af3c7062474693fa704f4ff8"
    obj = md5()
    obj.update(query_string.encode('utf-8'))
    w_rid = obj.hexdigest()
    response = requests.get(
        f'https://api.bilibili.com/x/v2/reply/wbi/main?oid={oid}&type=1&mode=3&pagination_str={url_pagination_str}&plat=1&web_location=1315875&w_rid={w_rid}&wts={wts}',
        cookies=cookies,
        headers=headers,
    )
    l = response.json()['data']['replies']
    for i in l:
        print(i['content']['message'])
        if i.get('replies'):
            for j in i['replies']:
                print('----', j['content']['message'])
        print("*"*40)
    time.sleep(0.5)
