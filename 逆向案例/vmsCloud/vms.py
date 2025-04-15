import subprocess
import time
import requests
import re
import json
from config import *

se = requests.Session()

url1 = f'https://aps1-vms-api.tplinkcloud.com/api/v2/vms/{vmsId}/sites/{siteId}/devices/{deviceId}/passthrough'
cookies = {
    'VMS_SID': cookie,
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'CSRF-TOKEN': 'ba2fc4fe2630410a9a88d6e5fdef6927',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://vms.tplinkcloud.com',
    'Pragma': 'no-cache',
    'Referer': 'https://vms.tplinkcloud.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'SourceType': 'vms_web',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'reqid': '1ab2b6ae5134fec015f30fd5599fbc20',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

json_data = {
    'param': {
        'user_management': {
            'get_encrypt_info': None,
        },
        'method': 'do',
    },
}

response = se.post(
    'https://aps1-vms-api.tplinkcloud.com/api/v2/vms/aps1-4ba1ee9c7e6841ad935e2c7d72b2a6d0/sites/1665766493519893/devices/1667581536698373/passthrough',
    cookies=cookies,
    headers=headers,
    json=json_data,
)
res = re.search(r'\\"nonce\\" : \\"(?P<nonce>.*?)\\",\\n  \\"key\\" : \\"(?P<key>.*?)\\"', response.text)
nonce = res.group('nonce')
key = res.group('key')
dict = {
    'nonce': nonce,
    'key': key,
    'old_pwd': old_pwd,
    'new_pwd': new_pwd,
}
ret = subprocess.check_output(['node', './main.js', json.dumps(dict)], shell=False).decode().strip()
print(ret)
res = re.search(r'old_pwd:::(?P<old_pwd>.*?):::\nnew_pwd:::(?P<new_pwd>.*?):::\ncipher_IPC:::(?P<cipher_IPC>.*?):::',
                ret, re.S)
cipher_IPC = res.group('cipher_IPC')
old_pwd = res.group('old_pwd')
new_pwd = res.group('new_pwd')
# print(cipher_IPC, old_pwd, new_pwd)
url2 = f'https://aps1-vms-api.tplinkcloud.com/api/v2/vms/{vmsId}/sites/{siteId}/devices/{deviceId}/passthrough'
data = {
    "param": {
        "user_management": {
            "change_user_info": {
                "secname": "root",
                "username": "admin",
                "encrypt_type": "2",
                "old_passwd": old_pwd,
                "passwd": new_pwd,
                "ciphertext": cipher_IPC,
                "passwdType": "md5"
            }
        },
        "method": "do"
    }
}
response = se.post(
    url2,
    cookies=cookies,
    headers=headers,
    json=data,
)
print(response.text)
