import execjs
import requests

cookies = {
    'PI': '44',
    'Hm_lvt_2610e5c202b60841b30a62960fbef0ad': '1737814380',
    'Hm_lpvt_2610e5c202b60841b30a62960fbef0ad': '1737814380',
    'HMACCOUNT': '3EC348E14EC919E9',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    # 'cookie': 'PI=44; Hm_lvt_2610e5c202b60841b30a62960fbef0ad=1737814380; Hm_lpvt_2610e5c202b60841b30a62960fbef0ad=1737814380; HMACCOUNT=3EC348E14EC919E9',
    'priority': 'u=1, i',
    'referer': 'https://www.jizhy.com/44/rank/major-pay',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sw8': '1-MTExenhzZGU3ZkE=-MjIyMjIyMjI=-0-MzMzMzMzMzM=-NDQ0NDQ0NDQ=-bWV0aG9k-NTU1NTU1NTU=',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
}
for i in range(1, 10):
    print(f'第{i}页')
    t = {
        'page': i,
        'page_len': '20',
        'diploma_id': '7',
        'wenli': '0',
    }
    obj = execjs.compile(open('jzy.js').read())
    params = obj.call('encrypt', t)


    response = requests.get('https://www.jizhy.com/open/sch/salary-rank-list', params=params, cookies=cookies,
                            headers=headers)
    print(response.text)
