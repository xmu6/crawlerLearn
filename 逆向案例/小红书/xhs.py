import json
import execjs

import requests
import time

cookies = {
    'abRequestId': '56ca061c-aea0-509f-aff8-615aba97d9e2',
    'webBuild': '4.62.3',
    'a1': '19696c3f49dv1ui6pg5zdamayolj41t352hegc7qx50000364164',
    'webId': '4fee025dbb16030b56d6cebf6fbd0b35',
    'web_session': '030037af2562163bbc392e706e2f4a68a3d101',
    'unread': '{%22ub%22:%2264a676cc000000002303461b%22%2C%22ue%22:%22648677e00000000013004cc9%22%2C%22uc%22:20}',
    'gid': 'yjKjKS4YK820yjKjKSqi4JSWjfhy73KUk2ufxAC060vl1d28V4y9qk888qK4yK482iDiyyyd',
    'xsecappid': 'xhs-pc-web',
    'loadts': '1746290884783',
    'acw_tc': '0ad629bf17462926750136699e8c87ac688d28038d8943d61fafb4a4c7fd91',
    'websectiga': '634d3ad75ffb42a2ade2c5e1705a73c845837578aeb31ba0e442d75c648da36a',
    'sec_poison_id': 'a33306df-02c5-4ae3-ad08-aaf6825c363b',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://www.xiaohongshu.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.xiaohongshu.com/',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    'x-b3-traceid': '36c52b6b3b8af55f',
    'x-mns': 'awgzKh+e6J6Dpxjj1wMwhQMQcpidB4uCma8fMBiEobz5K4zFGlwDW8Gktp+KIONvb2TPO6CTP6u5hMNxDMLdMdWlIy5WMQcGt82uva6mhfhRX+eIH5SDo5GdGGJQ183ZtZittGFl+bteWzzzd9yFzKYg9E6ZE6f+994dyxlBO4Gfjl4lBBXyhph5Ql3CbRFminX2kwu9hcMDm+dGXli53xnijtFMdFcClLKhIQhtNLGlucN7LGILcK+u1P/OXe0GgNLdj32EcwmXvFdHPE6pOGtp6CDzt3v4RYONoOSlt00kX8pHXzb0Nc2nXHoi92lvOnf+QhxyTKatz7zjRM/Ph7RLbhNTluCWTvzESmjDHmTJ0f7Ckc0gYbiEOFQxF9Ey/d7BPJMGKF8KCMdCOhoD9JvpohbZjWiki/y5a78BvOF5FYbnSLuHkORn2la3t/u4OWHum8x1ToZtu79CvDBjTYj9DLQdwGaxk6wkec+ZpMeonHj8Tb1RkNIFSdzT',
    'x-s': 'XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjFiM2RkMTNjZDBiYTNmYWQwNTQzZDQ3ODM0ZDIxNjcyNTYxZGJiY2JhOTEwZDBiNWM0Njg4MjAxNDE3MGUwZWE3MmY5OTVlMzVkYmNhZmI3MmE4ZTg0ZTk3MTUzZmE2OTY4OGQ1ODlkMjE2NTc2ODM5NTllNDA2ZGE2Y2YzNDYyYzA5ZGQ4OWY4OTRmNDc4YThlZDI5MDg5ODliNjQ2NDkzMGFlZjhiOTFhNWMxZmJkOWI4NDgwN2NiODQ4MGFjZjI3ZmEwZDdhYjM1NmE4ZDU5N2MxNmFmNDNiNjhlOWM4OTk2MzBjNDgwM2ViYzJkZjBkNDg5ZmY5ZTRmNGFiNTIxYzE3YmQ1ZTUyMmExZGI2YTA5YTY3ZTE3ODgxOTY0MmQ4YjczY2E4NmE2OTVmNzFiYzA0NmYwZDQxMTZiYmMwYzEwNTY4OGY2ZDNlMGEzZmZmNDIxMzlmMzcyNTZiNzYwYjA5MWY0NTQyM2YwZWI1NDc1NmJjMjgzNDQ1YjA4OTFkMDE3NTQ5ZWI5NWE3YzRhOWExNmM4MGQyNDQ0ZjIxIn0=',
    'x-s-common': '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',
    'x-t': '1746292648166',
    'x-xray-traceid': 'cb4b9394708cb90186f9e31a54ee0566',
    # 'cookie': 'abRequestId=56ca061c-aea0-509f-aff8-615aba97d9e2; webBuild=4.62.3; a1=19696c3f49dv1ui6pg5zdamayolj41t352hegc7qx50000364164; webId=4fee025dbb16030b56d6cebf6fbd0b35; web_session=030037af2562163bbc392e706e2f4a68a3d101; unread={%22ub%22:%2264a676cc000000002303461b%22%2C%22ue%22:%22648677e00000000013004cc9%22%2C%22uc%22:20}; gid=yjKjKS4YK820yjKjKSqi4JSWjfhy73KUk2ufxAC060vl1d28V4y9qk888qK4yK482iDiyyyd; xsecappid=xhs-pc-web; loadts=1746290884783; acw_tc=0ad629bf17462926750136699e8c87ac688d28038d8943d61fafb4a4c7fd91; websectiga=634d3ad75ffb42a2ade2c5e1705a73c845837578aeb31ba0e442d75c648da36a; sec_poison_id=a33306df-02c5-4ae3-ad08-aaf6825c363b',
}

json_data = {
    'cursor_score': '',
    'num': 18,
    'refresh_type': 1,
    'note_index': 12,
    'unread_begin_note_id': '',
    'unread_end_note_id': '',
    'unread_note_count': 0,
    'category': 'homefeed.movie_and_tv_v3',
    'search_key': '',
    'need_num': 8,
    'image_formats': [
        'jpg',
        'webp',
        'avif',
    ],
    'need_filter_image': False,
}
p = '/api/sns/web/v1/homefeed'
headers0 = execjs.compile(open('xhs.js').read()).call('getInfo', p, json_data)
print(headers0)
headers['x-s'] = headers0['X-s']
headers['x-t'] = str(headers0['X-t'])

data = json.dumps(json_data, separators=(',',':'))

response = requests.post('https://edith.xiaohongshu.com/api/sns/web/v1/homefeed', cookies=cookies, headers=headers, data=data)
print(response.json())