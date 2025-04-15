import requests
import execjs

import requests
for page in range(10):
    print(f"第{page+1}页")
    cookies = {
        'SUNWAY-ESCM-COOKIE': 'fee39ce0-2c6e-40af-bafc-f519dea03f95',
        '__jsluid_s': '58ceff63faa42c82e2f04a3c6f701533',
        'JSESSIONID': 'EB282EC04DA596FC6C2372E9F7887593',
    }

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        # 'Content-Length': '0',
        # 'Cookie': 'SUNWAY-ESCM-COOKIE=fee39ce0-2c6e-40af-bafc-f519dea03f95; __jsluid_s=58ceff63faa42c82e2f04a3c6f701533; JSESSIONID=EB282EC04DA596FC6C2372E9F7887593',
        'Origin': 'https://ec.minmetals.com.cn',
        'Referer': 'https://ec.minmetals.com.cn/logonAction.do',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    response = requests.post('https://ec.minmetals.com.cn/open/homepage/public', cookies=cookies, headers=headers)
    key = response.text


    cookies = {
        'SUNWAY-ESCM-COOKIE': 'fee39ce0-2c6e-40af-bafc-f519dea03f95',
        '__jsluid_s': '58ceff63faa42c82e2f04a3c6f701533',
        'JSESSIONID': '64AE8E53109D54D798AB3DBA32FAA038',
    }

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        # 'Cookie': 'SUNWAY-ESCM-COOKIE=fee39ce0-2c6e-40af-bafc-f519dea03f95; __jsluid_s=58ceff63faa42c82e2f04a3c6f701533; JSESSIONID=64AE8E53109D54D798AB3DBA32FAA038',
        'Origin': 'https://ec.minmetals.com.cn',
        'Referer': 'https://ec.minmetals.com.cn/open/home/purchase-info?tabIndex=0',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    obj = execjs.compile(open('五矿.js').read())
    s = obj.call('get_s', page, key)

    json_data = {
        'param': s
    }

    response = requests.post(
        'https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page',
        cookies=cookies,
        headers=headers,
        json=json_data,
    )
    # print(response.json())
    for item in response.json()['list']:
        print(item)
