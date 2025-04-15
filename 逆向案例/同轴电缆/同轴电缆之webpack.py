import requests
import json
import execjs

cookies = {
    '_pxhd': '3c1a46ca309534c74fc43adb6f5b8dfa8149d33c0733e2acc0802b6ef2810fc4:44ea806d-d1b2-11ef-8654-367601ecdd32',
    '_pxvid': '44ea806d-d1b2-11ef-8654-367601ecdd32',
    'pf-accept-language': 'en-US',
    'ping-accept-language': 'en-US',
    '_evga_542b': '455ff52e7e973d57.',
    'EG-U-ID': 'E75b628ab2-82de-48ed-8e6c-b4a46fb65a75',
    '__ssid': '4f345ad391e71231c0b137571695ed4',
    'OptanonAlertBoxClosed': '2025-01-13T13:29:49.536Z',
    '_ga': 'GA1.1.219146690.1736774963',
    '_gcl_au': '1.1.2023494119.1736774990',
    '_fbp': 'fb.1.1736774990305.475884500339396129',
    'digikey_theme': 'dkdk',
    'dktst_0002': 'control',
    '_cs_c': '0',
    'pxcts': '2aedc28c-d41b-11ef-99e5-cb7bed590fcf',
    'search': '%7B%22id%22%3A%2236063b1a-6d39-4a24-9568-e577eba50e9b%22%2C%22usage%22%3A%7B%22dailyCount%22%3A4%2C%22lastRequest%22%3A%222025-01-16T15%3A05%3A01.697Z%22%7D%2C%22version%22%3A1.1%7D',
    'dk_tagxi': 'undefined.0.undefined',
    'dk_item_data': 'vil=ps-fam_456',
    'dk_ref_data_x': 'ref_page_type=PS&ref_page_sub_type=FAM&ref_page_id=456&ref_page_url=https://www.digikey.com/en/products/filter/coaxial-cables/x02rf/456&ref_content_search_keywords=undefined',
    'EG-S-ID': 'C3b1c8bc4e-8466-4567-b32c-e5359c4c9a99',
    'QSI_HistorySession': '',
    'TSd6475659027': '08e0005159ab2000d9892bc2424368cb6f671b5bf2da6cb20767b3aaff0ca8532987dd2d8ead143a085a1a5fbc1130009fb210444cfb29513d671888d0bd8e949cdb1906e88bdbf93b577a0acbf2c9df735cdc2fd00716efc5057a26227b8d94',
    'dkc_tracker': '3668852192193',
    '_uetsid': 'bca0d730d35111ef9525e55d3f269a64',
    '_uetvid': '0cc652b0d1bf11ef8398dfc9a41b5331',
    'OptanonConsent': 'isGpcEnabled=0&datestamp=Thu+Jan+16+2025+23%3A06%3A17+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202407.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=3e36d1dc-43bb-4895-a39e-e2bfc7b736ad&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&intType=1&geolocation=SG%3B&AwaitingReconsent=false',
    '_ga_0434Z4NCVG': 'GS1.1.1737039909.9.1.1737039977.60.0.0',
    '_cs_cvars': '%7B%221%22%3A%5B%22Page%20Title%22%2C%22Part%20Search%20-%20Family%20Page%22%5D%2C%222%22%3A%5B%22Page%20Site%22%2C%22US%22%5D%2C%223%22%3A%5B%22Page%20Type%22%2C%22PS%22%5D%2C%224%22%3A%5B%22Page%20Sub%20Type%22%2C%22FAM%22%5D%2C%225%22%3A%5B%22Page%20Content%20Group%22%2C%22Part%20Search%22%5D%2C%226%22%3A%5B%22PageContentSubGroup%22%2C%22Category%20Page%22%5D%2C%227%22%3A%5B%22Page%20ID%22%2C%22456%22%5D%2C%2210%22%3A%5B%22Customer%20Dimension%22%2C%22%7B%5C%22%5C%5C%5C%22PLS%5C%5C%5C%22%5C%22%3A%5C%22Scrolling%5C%22%7D%22%5D%2C%2212%22%3A%5B%22Part%20Substitutes%22%2C%22False%22%5D%2C%2215%22%3A%5B%22Page%20State%22%2C%22Sort%20Order%20Test%20-%20Default%22%5D%2C%2216%22%3A%5B%22L1%20cat%22%2C%22Cable%20Assemblies%22%5D%2C%2220%22%3A%5B%22Dark%20Mode%22%2C%22Dark%20Mode%20On%22%5D%7D',
    '_cs_id': 'a0e34c1f-ca15-a844-9da8-f81ab53923a0.1736780396.7.1737039977.1737039910.1730827023.1770944396609.1',
    '_cs_s': '2.5.0.9.1737041777554',
    '_px2': 'eyJ1IjoiNmU3NmNlMjAtZDQxYi0xMWVmLTgwMmMtN2Y2OTAwN2QzODY4IiwidiI6IjQ0ZWE4MDZkLWQxYjItMTFlZi04NjU0LTM2NzYwMWVjZGQzMiIsInQiOjE3MzcwNDAyNzM4MTcsImgiOiI5ZjA3M2Q0MmE5YmQzZWI5ODA1OTU3MWM3OTUwYWNlMjI0Y2FkZjA3MzE5YjQ2NDEzYjUwMTNhNzgzNDVhMTdhIn0=',
    '_pxde': 'ad66813ff7ceb328aefeb04d8ea391b36b7bca632409b7841283854ea2b81e84:eyJ0aW1lc3RhbXAiOjE3MzcwMzk5ODkxNDAsImZfa2IiOjAsImlwY19pZCI6W10sImNncCI6MX0=',
    '_dd_s': 'rum=0&expire=1737040892730',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'authorization': 'Bearer',
    # 'cookie': '_pxhd=3c1a46ca309534c74fc43adb6f5b8dfa8149d33c0733e2acc0802b6ef2810fc4:44ea806d-d1b2-11ef-8654-367601ecdd32; _pxvid=44ea806d-d1b2-11ef-8654-367601ecdd32; pf-accept-language=en-US; ping-accept-language=en-US; _evga_542b=455ff52e7e973d57.; EG-U-ID=E75b628ab2-82de-48ed-8e6c-b4a46fb65a75; __ssid=4f345ad391e71231c0b137571695ed4; OptanonAlertBoxClosed=2025-01-13T13:29:49.536Z; _ga=GA1.1.219146690.1736774963; _gcl_au=1.1.2023494119.1736774990; _fbp=fb.1.1736774990305.475884500339396129; digikey_theme=dkdk; dktst_0002=control; _cs_c=0; pxcts=2aedc28c-d41b-11ef-99e5-cb7bed590fcf; search=%7B%22id%22%3A%2236063b1a-6d39-4a24-9568-e577eba50e9b%22%2C%22usage%22%3A%7B%22dailyCount%22%3A4%2C%22lastRequest%22%3A%222025-01-16T15%3A05%3A01.697Z%22%7D%2C%22version%22%3A1.1%7D; dk_tagxi=undefined.0.undefined; dk_item_data=vil=ps-fam_456; dk_ref_data_x=ref_page_type=PS&ref_page_sub_type=FAM&ref_page_id=456&ref_page_url=https://www.digikey.com/en/products/filter/coaxial-cables/x02rf/456&ref_content_search_keywords=undefined; EG-S-ID=C3b1c8bc4e-8466-4567-b32c-e5359c4c9a99; QSI_HistorySession=; TSd6475659027=08e0005159ab2000d9892bc2424368cb6f671b5bf2da6cb20767b3aaff0ca8532987dd2d8ead143a085a1a5fbc1130009fb210444cfb29513d671888d0bd8e949cdb1906e88bdbf93b577a0acbf2c9df735cdc2fd00716efc5057a26227b8d94; dkc_tracker=3668852192193; _uetsid=bca0d730d35111ef9525e55d3f269a64; _uetvid=0cc652b0d1bf11ef8398dfc9a41b5331; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Jan+16+2025+23%3A06%3A17+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202407.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=3e36d1dc-43bb-4895-a39e-e2bfc7b736ad&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&intType=1&geolocation=SG%3B&AwaitingReconsent=false; _ga_0434Z4NCVG=GS1.1.1737039909.9.1.1737039977.60.0.0; _cs_cvars=%7B%221%22%3A%5B%22Page%20Title%22%2C%22Part%20Search%20-%20Family%20Page%22%5D%2C%222%22%3A%5B%22Page%20Site%22%2C%22US%22%5D%2C%223%22%3A%5B%22Page%20Type%22%2C%22PS%22%5D%2C%224%22%3A%5B%22Page%20Sub%20Type%22%2C%22FAM%22%5D%2C%225%22%3A%5B%22Page%20Content%20Group%22%2C%22Part%20Search%22%5D%2C%226%22%3A%5B%22PageContentSubGroup%22%2C%22Category%20Page%22%5D%2C%227%22%3A%5B%22Page%20ID%22%2C%22456%22%5D%2C%2210%22%3A%5B%22Customer%20Dimension%22%2C%22%7B%5C%22%5C%5C%5C%22PLS%5C%5C%5C%22%5C%22%3A%5C%22Scrolling%5C%22%7D%22%5D%2C%2212%22%3A%5B%22Part%20Substitutes%22%2C%22False%22%5D%2C%2215%22%3A%5B%22Page%20State%22%2C%22Sort%20Order%20Test%20-%20Default%22%5D%2C%2216%22%3A%5B%22L1%20cat%22%2C%22Cable%20Assemblies%22%5D%2C%2220%22%3A%5B%22Dark%20Mode%22%2C%22Dark%20Mode%20On%22%5D%7D; _cs_id=a0e34c1f-ca15-a844-9da8-f81ab53923a0.1736780396.7.1737039977.1737039910.1730827023.1770944396609.1; _cs_s=2.5.0.9.1737041777554; _px2=eyJ1IjoiNmU3NmNlMjAtZDQxYi0xMWVmLTgwMmMtN2Y2OTAwN2QzODY4IiwidiI6IjQ0ZWE4MDZkLWQxYjItMTFlZi04NjU0LTM2NzYwMWVjZGQzMiIsInQiOjE3MzcwNDAyNzM4MTcsImgiOiI5ZjA3M2Q0MmE5YmQzZWI5ODA1OTU3MWM3OTUwYWNlMjI0Y2FkZjA3MzE5YjQ2NDEzYjUwMTNhNzgzNDVhMTdhIn0=; _pxde=ad66813ff7ceb328aefeb04d8ea391b36b7bca632409b7841283854ea2b81e84:eyJ0aW1lc3RhbXAiOjE3MzcwMzk5ODkxNDAsImZfa2IiOjAsImlwY19pZCI6W10sImNncCI6MX0=; _dd_s=rum=0&expire=1737040892730',
    'lang': 'en',
    'priority': 'u=1, i',
    'referer': 'https://www.digikey.com/en/products/filter/coaxial-cables/x02rf/456',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'site': 'us',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'x-currency': 'USD',
    'x-request-id': 'dc2c8e41-dddc-4da8-a686-5098c2555ce5',
}
obj = execjs.compile(open('同轴电缆.js').read())
page = {
        "pagination": {
            "p": 12,
            "pp": 25
        }
    }
s = obj.call('f', page)

params = {
    's': s,
}

response = requests.get(
    'https://www.digikey.com/products/api/v5/filter-page/456',
    params=params,
    cookies=cookies,
    headers=headers,
)
print(response.json())

