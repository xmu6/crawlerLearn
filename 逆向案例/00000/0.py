import time
import urllib.parse
from hashlib import sha256
import math
import random

timestamp = int(time.time() * 1000)


def R(timestamp):
    e = []
    for _ in range(4):
        n = math.ceil(25 * random.random())
        e.append(chr(65 + n))
    return f"{timestamp}{''.join(e)}"


e = {
    'access_token': "cjLFr5mBXGUiEDRbXGZcchzWH7l4C5Ej",
    'app_version': "3.2.3",
    'area_id': 0,
    'city_id': 77,
    'city_name': "深圳",
    'client_time': timestamp,
    'device_id': "5d756b10e3b5fe967fe6a5daaee3c320",
    'env_tag': "feature/v431",
    'latitude': 0,
    'login_token': "",
    'longitude': 0,
    'noncestr': R(timestamp),
    'sign_key': "1747500201002506400",
    'utm_medium': "wechatapp",
    'utm_source': "miniprogram",
    'ver': 4,
}


def get_sign(e):
    r = "-*@kUWX32vQw1dMEhq#gaUpqN-3Fdctq"
    sorted_keys = sorted(e.keys())
    a = {key: e[key] for key in sorted_keys}
    i = "group:index:clublist"
    # i = "api:venues:recommend"
    for key in a:
        i += f"{key}={urllib.parse.quote(str(a[key]))}&"
    i += r
    i = i.replace("/", '%2F')
    # print(i)
    # i = "api:venues:recommendaccess_token=c4oKZOBY4lzelDz9nIQizYdETsXoh0C0&app_version=3.2.3&area_id=0&city_id=77&city_name=%E6%B7%B1%E5%9C%B3&client_time=1747506844975&device_id=5d756b10e3b5fe967fe6a5daaee3c320&env_tag=feature%2Fv431&latitude=0&login_token=&longitude=0&noncestr=1747506844975FZZL&page=1&page_size=10&sign_key=1747500027081529800&utm_medium=wechatapp&utm_source=miniprogram&GVS+90XQFb9ODbiHZYEK^37E2PyW%!Yn"
    obj = sha256()
    obj.update(i.encode('utf-8'))
    api_sign = obj.hexdigest()
    return api_sign


import requests


headers = {
    'Host': 'xapi.quyundong.com',
    'systeminfo': '{"model":"microsoft","system":"Windows 11 x64","version":"3.9.12","brand":"microsoft","platform":"windows","pixelRatio":1,"windowWidth":414,"windowHeight":780,"language":"zh_CN","screenWidth":414,"screenHeight":780,"SDKVersion":"3.8.4","fontSizeSetting":15,"statusBarHeight":20}',
    'xweb_xhr': '1',
    'env-tag': 'feature/v431',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c33)XWEB/11581',
    'content-type': 'application/json',
    'accept': '*/*',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://servicewechat.com/wxbb9c3b35727d8ce8/202/page-frame.html',
    'accept-language': 'zh-CN,zh;q=0.9',
}

params = {
    'utm_source': 'miniprogram',
    'utm_medium': 'wechatapp',
    'client_time': timestamp,
    'sign_key': '1747539735074981100',
    'device_id': 'b548f428f128770d07f8426b5ae1fa7f',
    'app_version': '3.2.3',
    'latitude': '30.57019997',
    'longitude': '104.06475830',
    'noncestr': R(timestamp),
    'access_token': 'NXZnoWlG8s7ayqsSaoziemS6yBBOK3aB',
    'login_token': '',
    'city_id': '52',
    'city_name': '北京',
    'area_id': '0',
    'page': '1',
    'page_size': '10',
    # 'api_sign': '0c7e0ba454f961930097bd932f64d89810ffa40a4ce23b6e49ae710bf459f1ab',
}
params['api_sign'] = get_sign(params)


response = requests.get('https://xapi.quyundong.com/Group/index/clubList', params=params, headers=headers)
print(response.text)


