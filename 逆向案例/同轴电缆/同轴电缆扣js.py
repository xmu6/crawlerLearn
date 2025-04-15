'https://www.digikey.com/en/products/filter/coaxial-cables\x02rf/456'
import json

import execjs
import requests

cookies = {
    '_pxhd': '3c1a46ca309534c74fc43adb6f5b8dfa8149d33c0733e2acc0802b6ef2810fc4:44ea806d-d1b2-11ef-8654-367601ecdd32',
    'pxcts': '55ecc457-d1b2-11ef-9c91-d88199efc0da',
    '_pxvid': '44ea806d-d1b2-11ef-8654-367601ecdd32',
    'pf-accept-language': 'en-US',
    'ping-accept-language': 'en-US',
    'TS01c02def': '01dea9a590e9447372601dce8ed3f846d59dac2ce69f4727b5dd0e4f800bf2d6d0bdcc28253203153abc614ab874043ce143a7f01b',
    'TS0178f15d': '01dea9a590e9447372601dce8ed3f846d59dac2ce69f4727b5dd0e4f800bf2d6d0bdcc28253203153abc614ab874043ce143a7f01b',
    'TS809e22c5027': '081244aa86ab2000ba6dd882d80199bf6e6afb893f8ed6b70c2f6c3ed0ee3b8c5485e892577067aa08dd62a32c113000ae723053664b1fa31de35ae2efa3cde9e9503cef2a1550cadef50792c35a226377f95f3823d56cd6bf8651a80c1aa8bc',
    'TS01cba742': '01c72bed214af4d83569cdfad6f99d687e5ee3689ceda62a2ef6de17dee57343fe4f4d83a7d89d5c414bb018715c36a3ec28563686',
    'TS01737bf0': '01c72bed214af4d83569cdfad6f99d687e5ee3689ceda62a2ef6de17dee57343fe4f4d83a7d89d5c414bb018715c36a3ec28563686',
    'TS605a4192027': '08a1509f8aab20001226c3403bd37797bef2642200e070b2d33bcd2074c16711eff1c1c3afe5a5240891c7cfcf1130004a310ccfd4491d11dbde4df5d6dccc42728dfa84bd9303d067fd594a5117db1432bb432bc43449a6e917a6d3640148b3',
    'TS016ca11c': '01c72bed215e4955897c389ed6f4b87de0827bde7cffd53993e689485ae44299ff27c531d1c6b65bd2b74f0a9f9b4f55ca1146aa63',
    'TS01d47dae': '01c72bed215e4955897c389ed6f4b87de0827bde7cffd53993e689485ae44299ff27c531d1c6b65bd2b74f0a9f9b4f55ca1146aa63',
    'TSc580adf4027': '08a1509f8aab2000092623faf0237d5c5d951bc05c9f3e75f381e614ca91050d65a33e6f632e223e08c3944a1a11300072ce1f25bca38ba2dbde4df5d6dccc42964af2fff53571a54a336a06d676fe4d44f444fba79457593b57e2b2b410a6fa',
    '_evga_542b': '455ff52e7e973d57.',
    'dk_sft_ses': 'c61fd9a6-baf7-4f90-8002-bdfef4c5a734',
    'dk_tagxi': 'undefined.0.undefined',
    'dk_item_data': 'vil=ps-fam_456',
    'dk_ref_data_x': 'ref_page_type=PS&ref_page_sub_type=FAM&ref_page_id=456&ref_page_url=https://www.digikey.com/en/products/filter/coaxial-cables/x02rf/456&ref_content_search_keywords=undefined',
    'EG-U-ID': 'E75b628ab2-82de-48ed-8e6c-b4a46fb65a75',
    'EG-S-ID': 'E829fd61fb-ecea-42cb-8c0a-7f3b513c5dbe',
    '__ssid': '4f345ad391e71231c0b137571695ed4',
    'OptanonAlertBoxClosed': '2025-01-13T13:29:49.536Z',
    '_ga': 'GA1.1.219146690.1736774963',
    '_gcl_au': '1.1.2023494119.1736774990',
    '_ga_0434Z4NCVG': 'GS1.1.1736774962.1.0.1736774989.60.0.0',
    'OptanonConsent': 'isGpcEnabled=0&datestamp=Mon+Jan+13+2025+21%3A29%3A49+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202407.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=3e36d1dc-43bb-4895-a39e-e2bfc7b736ad&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&intType=1',
    '_fbp': 'fb.1.1736774990305.475884500339396129',
    'TSd6475659027': '08e0005159ab2000ff38c928177287057e2560dc9fe8219b4910a4e36284cbc92dcb61a9c6ed5d350897f58a36113000c4f2ead6580d5f0691ccc64116e3143332b12b4e8a4064c820f2e08b11077ba845a162c36eb537f4144a79bfa120670d',
    '_px2': 'eyJ0IjoxNzM2Nzc1NTA1MTk3LCJ2IjoiNDRlYTgwNmQtZDFiMi0xMWVmLTg2NTQtMzY3NjAxZWNkZDMyIiwidSI6IjY2MjVlYzgwLWQxYjItMTFlZi1iZDMzLWNmZjVhZTM4NTdjNSIsImgiOiI2MTJkNDUwYjI0MmNhYTQxOThiNWJmODMxY2ZkODYxYzY5OWQ3NDhlNjBmOGE0YjUwNTM1MmViYjhiY2Q5NDNiIn0=',
    'dkc_tracker': '3668587538426',
    'digikey_theme': 'dkdk',
    'search_prefs': '%7B%22theme%22%3A%22dkdk%22%7D',
    'TS01173021': '01f9ef228d86f1dbd93614372c36d4eb1e0cafc06c1673ea0e7b94e351908219df85d999da65b3c07aa7f14c310bb4938bec821436',
    'TScaafd3c3027': '08205709cbab20000c6a1cbc42830f67442ce70c27de1292aef24e135acf4ae4e022042833da7e3c0880d2af2f113000319c90523cddbb5c66e3fc6ab18e31fe2709347df9fdec84b5f9cc0465f901bb054105d821afd9f143dcd19de3c7a508',
    '_dd_s': 'rum=0&expire=1736776324705',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'authorization': 'Bearer',
    # 'cookie': '_pxhd=3c1a46ca309534c74fc43adb6f5b8dfa8149d33c0733e2acc0802b6ef2810fc4:44ea806d-d1b2-11ef-8654-367601ecdd32; pxcts=55ecc457-d1b2-11ef-9c91-d88199efc0da; _pxvid=44ea806d-d1b2-11ef-8654-367601ecdd32; pf-accept-language=en-US; ping-accept-language=en-US; TS01c02def=01dea9a590e9447372601dce8ed3f846d59dac2ce69f4727b5dd0e4f800bf2d6d0bdcc28253203153abc614ab874043ce143a7f01b; TS0178f15d=01dea9a590e9447372601dce8ed3f846d59dac2ce69f4727b5dd0e4f800bf2d6d0bdcc28253203153abc614ab874043ce143a7f01b; TS809e22c5027=081244aa86ab2000ba6dd882d80199bf6e6afb893f8ed6b70c2f6c3ed0ee3b8c5485e892577067aa08dd62a32c113000ae723053664b1fa31de35ae2efa3cde9e9503cef2a1550cadef50792c35a226377f95f3823d56cd6bf8651a80c1aa8bc; TS01cba742=01c72bed214af4d83569cdfad6f99d687e5ee3689ceda62a2ef6de17dee57343fe4f4d83a7d89d5c414bb018715c36a3ec28563686; TS01737bf0=01c72bed214af4d83569cdfad6f99d687e5ee3689ceda62a2ef6de17dee57343fe4f4d83a7d89d5c414bb018715c36a3ec28563686; TS605a4192027=08a1509f8aab20001226c3403bd37797bef2642200e070b2d33bcd2074c16711eff1c1c3afe5a5240891c7cfcf1130004a310ccfd4491d11dbde4df5d6dccc42728dfa84bd9303d067fd594a5117db1432bb432bc43449a6e917a6d3640148b3; TS016ca11c=01c72bed215e4955897c389ed6f4b87de0827bde7cffd53993e689485ae44299ff27c531d1c6b65bd2b74f0a9f9b4f55ca1146aa63; TS01d47dae=01c72bed215e4955897c389ed6f4b87de0827bde7cffd53993e689485ae44299ff27c531d1c6b65bd2b74f0a9f9b4f55ca1146aa63; TSc580adf4027=08a1509f8aab2000092623faf0237d5c5d951bc05c9f3e75f381e614ca91050d65a33e6f632e223e08c3944a1a11300072ce1f25bca38ba2dbde4df5d6dccc42964af2fff53571a54a336a06d676fe4d44f444fba79457593b57e2b2b410a6fa; _evga_542b=455ff52e7e973d57.; dk_sft_ses=c61fd9a6-baf7-4f90-8002-bdfef4c5a734; dk_tagxi=undefined.0.undefined; dk_item_data=vil=ps-fam_456; dk_ref_data_x=ref_page_type=PS&ref_page_sub_type=FAM&ref_page_id=456&ref_page_url=https://www.digikey.com/en/products/filter/coaxial-cables/x02rf/456&ref_content_search_keywords=undefined; EG-U-ID=E75b628ab2-82de-48ed-8e6c-b4a46fb65a75; EG-S-ID=E829fd61fb-ecea-42cb-8c0a-7f3b513c5dbe; __ssid=4f345ad391e71231c0b137571695ed4; OptanonAlertBoxClosed=2025-01-13T13:29:49.536Z; _ga=GA1.1.219146690.1736774963; _gcl_au=1.1.2023494119.1736774990; _ga_0434Z4NCVG=GS1.1.1736774962.1.0.1736774989.60.0.0; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Jan+13+2025+21%3A29%3A49+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202407.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=3e36d1dc-43bb-4895-a39e-e2bfc7b736ad&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&intType=1; _fbp=fb.1.1736774990305.475884500339396129; TSd6475659027=08e0005159ab2000ff38c928177287057e2560dc9fe8219b4910a4e36284cbc92dcb61a9c6ed5d350897f58a36113000c4f2ead6580d5f0691ccc64116e3143332b12b4e8a4064c820f2e08b11077ba845a162c36eb537f4144a79bfa120670d; _px2=eyJ0IjoxNzM2Nzc1NTA1MTk3LCJ2IjoiNDRlYTgwNmQtZDFiMi0xMWVmLTg2NTQtMzY3NjAxZWNkZDMyIiwidSI6IjY2MjVlYzgwLWQxYjItMTFlZi1iZDMzLWNmZjVhZTM4NTdjNSIsImgiOiI2MTJkNDUwYjI0MmNhYTQxOThiNWJmODMxY2ZkODYxYzY5OWQ3NDhlNjBmOGE0YjUwNTM1MmViYjhiY2Q5NDNiIn0=; dkc_tracker=3668587538426; digikey_theme=dkdk; search_prefs=%7B%22theme%22%3A%22dkdk%22%7D; TS01173021=01f9ef228d86f1dbd93614372c36d4eb1e0cafc06c1673ea0e7b94e351908219df85d999da65b3c07aa7f14c310bb4938bec821436; TScaafd3c3027=08205709cbab20000c6a1cbc42830f67442ce70c27de1292aef24e135acf4ae4e022042833da7e3c0880d2af2f113000319c90523cddbb5c66e3fc6ab18e31fe2709347df9fdec84b5f9cc0465f901bb054105d821afd9f143dcd19de3c7a508; _dd_s=rum=0&expire=1736776324705',
    'lang': 'en',
    'priority': 'u=1, i',
    'referer': 'https://www.digikey.com/en/products/filter/coaxial-cables/x02rf/456?s=N4IgrCBcoA5QbAGhDOkBMYC%2BWg',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'site': 'us',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'x-currency': 'USD',
    'x-request-id': '3a62c9a2-e011-4144-be6e-1e955bb2618c',
}

data = {"5": {"p": 10, "pp": 25}}
obj = execjs.compile(open('扣js.js').read())
s = obj.call('compressToEncodedURIComponent', json.dumps(data))
params = {
    's': s,
}

response = requests.get(
    'https://www.digikey.com/products/api/v5/filter-page/456',
    params=params,
    cookies=cookies,
    headers=headers,
)
print(response.text)
