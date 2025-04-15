import requests
import execjs
for i in range(10):
    print(f'{i+1}页')
    headers = {
        'accept': 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-ts': '1736607570699',
        'encryption': 'true',
        'language': 'zh',
        'origin': 'https://www.coinglass.com',
        'priority': 'u=1, i',
        'referer': 'https://www.coinglass.com/',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    }

    params = {
        'sort': '',
        'order': '',
        'keyword': '',
        'pageNum': i+1,
        'pageSize': '20',
        'ex': 'all',
    }

    response = requests.get('https://capi.coinglass.com/api/home/v2/coinMarkets', params=params, headers=headers)
    user = response.headers['user']
    obj = execjs.compile(open('coinglass.js').read())
    print(obj.call('decrypt_data', response.json()['data'], user))
