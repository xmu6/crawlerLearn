"""
js版本：19.9.0
Python版本：3.13
"""
import json
import subprocess
import re
import requests

se = requests.Session()
headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Authorization': '',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://tpass.shanxi.chinatax.gov.cn:8443',
    'Pragma': 'no-cache',
    'Referer': 'https://tpass.shanxi.chinatax.gov.cn:8443/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'X-APP-CLIENTID': 'sa67ddd29sc94cga9f96s7da2772s6d7',
    'X-LANG-ID': 'null',
    'X-NATURE-IP': '',
    'X-SM4-INFO': '0',
    'X-TEMP-INFO': 'null',
    'X-TICKET-ID': 'null',
    'deviceIdentyNo': 'MNMAgpgnm5LrcKLgvfFfjpSvKeaNwTEL',
    'hUid': '',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

ret = subprocess.check_output(["node", "./main",], shell=False).decode().strip()
res = re.search(r'::(.*?)::\n。。(.*?)。。', ret)
timestamp = res.group(1)
signature = res.group(2)

json_data = {
    'zipCode': '0',
    'encryptCode': '0',
    'datagram': '{}',
    'timestamp': timestamp,
    'access_token': '',
    'signtype': 'HMacSHA256',
    'signature': signature,
}

response = se.post(
    'https://tpass.shanxi.chinatax.gov.cn:8443/sys-api/v1.0/auth/oauth2/getPublicKey',
    headers=headers,
    json=json_data,
)
# print(response.json())
data = json.loads(response.json()['datagram'])
uuid = data['uuid']
publicKey = data['publicKey']
ret2 = subprocess.check_output(["node", "./main2", publicKey], shell=False).decode().strip()
# print(ret2)
datagram = {
    'uuid': uuid,
    'secret': ret2,
}
json_data = {
    'zipCode': '0',
    'encryptCode': '0',
    'datagram': json.dumps(datagram),
    'timestamp': '20250329225801',
    'access_token': '',
    'signtype': 'HMacSHA256',
    'signature': signature,
}

response = se.post(
    'https://tpass.shanxi.chinatax.gov.cn:8443/sys-api/v1.0/auth/white/sendSm4',
    json=json_data,
)
print(response.json())







