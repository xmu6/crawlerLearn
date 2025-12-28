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
    'client_time': '1747496251124',
    'sign_key': '1747489132086208300',
    'device_id': 'b548f428f128770d07f8426b5ae1fa7f',
    'app_version': '3.2.3',
    'latitude': '30.57019997',
    'longitude': '104.06475830',
    'noncestr': '1747496251124BZSU',
    'access_token': 'tqDg8obiU558CW8C6tTSUjrtuzCNE7rW',
    'login_token': '',
    'city_id': '322',
    'city_name': '成都',
    'area_id': '0',
    'page': '1',
    'page_size': '10',
    'api_sign': '78f799415ee4aeefd414d999e8c9a62354e2e82a1332949fcf146be98cd59748',
}

response = requests.get('https://xapi.quyundong.com/Group/index/clubList', params=params, headers=headers)
print(response.text)