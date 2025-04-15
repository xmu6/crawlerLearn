"""
请求和响应入口的定位：
关键字搜索：
    方法关键字：decrypt(
    key关键字
    headers关键字
    拦截器关键字 interceptor:
        请求拦截器  interceptors.request.use
        响应拦截器  interceptors.response.use
    路径关键字 部分url
请求堆栈
hook钩子

断点：
    普通断点
    条件断点
    日志断点
    XHR断点
"""

import base64
import json
import time
from hashlib import md5
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import requests

for i in range(100):
    print('第{}页'.format(i + 1))
    json_data = {
        'pageNo': i + 1,
        'pageSize': 10,
        'total': 679,
        'type': '11,12,13',
        'timeType': '0',
        'ts': int(time.time() * 1000),
    }
    n = 'B3978D054A72A7002063637CCDF6B2E5'
    ret = sorted(json_data.items(), key=lambda x: x[0])
    for key, value in ret:
        n += key + str(value)
    md5_obj = md5()
    md5_obj.update(n.encode())
    portal_sign = md5_obj.hexdigest()

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://ggzyfw.fujian.gov.cn',
        'Referer': 'https://ggzyfw.fujian.gov.cn/index/newList?type=13',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'end-user': 'test',
        'portal-sign': portal_sign,
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    response = requests.post('https://ggzyfw.fujian.gov.cn/FwPortalApi/Article/PageList', headers=headers,
                             json=json_data)

    text = response.json()["Data"].encode()
    text = base64.b64decode(text)

    key = b'EB444973714E4A40876CE66BE45D5930'
    iv = b"B5A8904209931867"
    aes = AES.new(key, AES.MODE_CBC, iv)
    source = aes.decrypt(text)
    res = json.loads(unpad(source, 16).decode())
    for item in res["Table"]:
        print(item["TITLE"])
