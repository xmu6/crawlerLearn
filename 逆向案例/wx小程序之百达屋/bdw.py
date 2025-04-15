import requests
import time
import execjs

obj = execjs.compile(open('bdw.js', encoding='utf-8').read())
message_id = obj.call('getMessageId')
print(message_id)
signature, timestamp = obj.call('getSignature')
print(signature, timestamp)
import requests



headers = {
    'Connection': 'keep-alive',
    'BusinessType': '1',
    'MessageId': message_id,
    'pageSize': '20',
    'pageNo': '2',
    'AppType': '2',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1 wechatdevtools/1.06.2407110 MicroMessenger/8.0.5 Language/zh_CN webview/',
    'content-type': 'application/json',
    'AppVersion': '3.3.5',
    'OsVersion': 'iOS 10.0.1',
    'DeviceManufacture': 'devtools',
    'Signature': signature,
    'Channel': 'bdw',
    'Timestamp': str(timestamp),
    'ClientType': '5',
    'DeviceModel': 'iPhone 12/13 (Pro)',
    'Accept': '*/*',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://servicewechat.com/wx62466b68205db6dc/devtools/page-frame.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

json_data = {
    'querySource': 2,
    'channelType': 1,
    'sourceType': 10,
    'serviceType': [
        '3',
    ],
    'searchType': 0,
    'dateStartTime': 1739116800000,
    'dateEndTime': 1739203200000,
    'destination': '国内/国际',
}

response = requests.post('https://api.betterwood.com/base/app/store/listV2', headers=headers, json=json_data)
print(response.json())




# headers = {
#     'Connection': 'keep-alive',
#     'pageNum': '2',
#     'MessageId': message_id,
#     'pageSize': '15',
#     'AppType': '2',
#     'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1 wechatdevtools/1.06.2407110 MicroMessenger/8.0.5 Language/zh_CN webview/',
#     'content-type': 'application/json',
#     'AppVersion': '3.3.5',
#     'OsVersion': 'iOS 10.0.1',
#     'DeviceManufacture': 'devtools',
#     'Signature': signature,
#     'Channel': 'bdw',
#     'BusinessType': '1',
#     'Timestamp': str(timestamp),
#     'ClientType': '5',
#     'DeviceModel': 'iPhone 12/13 (Pro)',
#     'Accept': '*/*',
#     'Sec-Fetch-Site': 'cross-site',
#     'Sec-Fetch-Mode': 'cors',
#     'Sec-Fetch-Dest': 'empty',
#     'Referer': 'https://servicewechat.com/wx62466b68205db6dc/devtools/page-frame.html',
#     'Accept-Language': 'zh-CN,zh;q=0.9',
#     'Host': 'api.betterwood.com',
#     'Content-Length': '17',
# }
#
# json_data = {
#     'hotelId': '374',
#     'commentType': 0,
#     'roomType': [],
#     'tagId': [],
#     'sortType': 2,
# }
#
# response = requests.post('https://api.betterwood.com/content/hotel/comment/hotel/list', headers=headers, json=json_data)
# print(response.json())
