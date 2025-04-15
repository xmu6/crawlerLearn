import json
import subprocess

import requests
import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad

from functools import partial


subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs

cookies = {
    'mobile_iindex_uuid': 'f70e4d52-1c3e-54d6-be1d-60628a4859df',
    'Hm_lvt_2873e2b0bdd5404c734992cd3ae7253f': '1736091451,1736261516',
    'HMACCOUNT': '8E6049FEE7C87BEE',
    'Hm_lpvt_2873e2b0bdd5404c734992cd3ae7253f': '1736261567',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    # 'Cookie': 'mobile_iindex_uuid=f70e4d52-1c3e-54d6-be1d-60628a4859df; Hm_lvt_2873e2b0bdd5404c734992cd3ae7253f=1736091451,1736261516; HMACCOUNT=8E6049FEE7C87BEE; Hm_lpvt_2873e2b0bdd5404c734992cd3ae7253f=1736261567',
    'Referer': 'https://www.chinaindex.net/ranklist/5',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'UUID': 'f70e4d52-1c3e-54d6-be1d-60628a4859df',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'funcID': 'undefined',
    'incognitoMode': '0',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'sign': '46cf510e48f99667216bfa781d6bebab',
}

response = requests.get(
    'https://www.chinaindex.net/iIndexMobileServer/teleplay/rank/playing/fans',
    params=params,
    cookies=cookies,
    headers=headers,
)
base64_encrypt_data = response.json()["data"]
# lastFetchTime = str(response.json()["lastFetchTime"])
# encrypt_data = base64.b64decode(base64_encrypt_data.encode())
#
# key = lastFetchTime + '000'
# iv = lastFetchTime + '000'
# aes = AES.new(key.encode(), AES.MODE_CBC, iv.encode())
# decrypt_data = aes.decrypt(encrypt_data)
# res = json.loads(unpad(decrypt_data, 16).decode('utf-8'))
# for item in res['rank_list']:
#     print(item)

# js
js_code = open('影视综_js.js').read()
js_compile = execjs.compile(js_code)
ret = js_compile.call('dataFilter', response.json())
for item in json.loads(ret)['rank_list']:
    print(item)
