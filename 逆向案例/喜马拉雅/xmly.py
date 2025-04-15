import json
import subprocess
import time
import re
import requests
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
import base64

from pandas.io.formats.format import return_docstring

account = '15723473991'
pwd = '123456'
t = int(time.time()*1000)

def encrypt_data(data):
    with open('public.pem', 'rb') as f:
        # 1.获取公钥字符串
        public_key = f.read()
        # 2.基于公钥字符串构建公钥对象
        public_key_obj = RSA.importKey(public_key)
        # 3.基于公钥对象构建加密器对象
        rsa_public = PKCS1_v1_5.new(public_key_obj)
        # 4.加密
        encrypt_data = rsa_public.encrypt(data.encode())
        # 5.base64编码
        base64_encrypt_data = base64.b64encode(encrypt_data)
        return base64_encrypt_data.decode()

url_n = f'https://passport.ximalaya.com/web/nonce/{str(t)}?fromUri=https%253A%252F%252Fstudio.ximalaya.com'
nonce = json.loads(requests.get(url_n).text)['nonce']
print(nonce)

acc = encrypt_data(account)
pw = encrypt_data(pwd)

js_data = {
    'account': acc,
    'password': pw,
    'nonce': nonce
}
# ret = subprocess.check_output(f'node ./main.js '+'{'+f'account: {encrypt_data(account)},password: {encrypt_data(pwd)},nonce: {nonce}' + '}', shell=True).decode().strip()
ret = subprocess.check_output(['node', './main.js', json.dumps(js_data)], text=True).strip()
# print(ret)
sige = re.findall(r':::(.*?):::', ret)[0]
# print(sige,100000)
cookies = {
    '_xmLog': 'h5&d8a984df-6c03-4580-a0b8-7dc1ae396006&2.4.15-alpha.2',
    'trackType': 'web',
    'x_xmly_traffic': 'utm_source%3A%26utm_medium%3A%26utm_campaign%3A%26utm_content%3A%26utm_term%3A%26utm_from%3A',
    'impl': 'passport.ximalaya.com.web',
    's&e': '943c24ef972ab0c1ee7cae9ef0832fd2',
    's&a': 'C_X%04XW%1E%09CPY%02%08S%1CR%1F%0ET%04%0F%06B%06%10[WTX%09%1FUVRCUXOJZV]ZY^OJUC%5C',
    'fds_otp': '6304810753864897258',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    # 'Cookie': 'trackType=web; x_xmly_traffic=utm_source%3A%26utm_medium%3A%26utm_campaign%3A%26utm_content%3A%26utm_term%3A%26utm_from%3A; _xmLog=h5&d8a984df-6c03-4580-a0b8-7dc1ae396006&2.4.15-alpha.2; impl=passport.ximalaya.com.web; s&e=943c24ef972ab0c1ee7cae9ef0832fd2; s&a=C_X%04XW%1E%09CPY%02%08S%1CR%1F%0ET%04%0F%06B%06%10[WTX%09%1FUVZ_O_[WRCGYVTSWRLRX; fds_otp=8633386521022385669',
    'Origin': 'https://passport.ximalaya.com',
    'Pragma': 'no-cache',
    'Referer': 'https://passport.ximalaya.com/page/web/login?fromUri=https%3A%2F%2Fstudio.ximalaya.com',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'fromUri': 'https%3A%2F%2Fstudio.ximalaya.com',
}

json_data = {
    'account': acc,
    'password': pw,
    'nonce': nonce,
    'signature': sige,
    'fromUri': 'https%3A%2F%2Fstudio.ximalaya.com',
    'rememberMe': False,
    'fdsOtp': '',
}

response = requests.post(
    'https://passport.ximalaya.com/web/login/pwd/v2',
    params=params,
    cookies=cookies,
    headers=headers,
    json=json_data,
)

print(response.text)
