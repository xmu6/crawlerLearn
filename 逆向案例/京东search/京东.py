import json
import subprocess
from hashlib import sha256
from re import search

import requests
import time
import re

timer = int(time.time() * 1000)

cookies = {
    '__jdv': '143920055|direct|-|none|-|1737897321944',
    '__jdu': '1737897321942263293058',
    'mba_muid': '1737897321942263293058',
    'shshshfpa': 'bcb376dd-f55b-9808-49f8-958ef3a3de30-1737897334',
    'shshshfpx': 'bcb376dd-f55b-9808-49f8-958ef3a3de30-1737897334',
    'jcap_dvzw_fp': '1n6CILMHlgx0cxaFc0LdrhV5WqgamsUD-Z45Cf7ehwtxAtRmbMV9NmlLVomOk81N3fIikVlwq66i-6_9TJSevg==',
    'x-rp-evtoken': 'mGW9U4qbzsaBdCMe70m9pIPm1ATDJwfbVpKXp3gMbm-KKll_rSLxrDCfAFROQqzcaMc6j5z6fXcmy_vToyAKqA%3D%3D',
    'ipLoc-djd': '4-48202-0-0',
    'areaId': '4',
    'TrackID': '1QRtqpjAhpRvN25907RBwcTEW1Bk---TVsJFYpGhOvIOeh9h_dgwxmB_q1Sokt0Uhy31XIAIHVczqKIlfpUjUstWVLwsQAp1hKP0CL7Z3mWM',
    'light_key': 'AASBKE7rOxgWQziEhC_QY6yaDHLyxS8icT5PXocJFZlQZU8f3NE40jm4b1BXYRjFHBvcK0E7',
    'pinId': 'wfdfmSQxOIsWfB5_xb4LpA',
    'pin': 'jd_ZgKKzeEWUVOh',
    'unick': 'jd_55h0on0fz3dmvy',
    '_tp': '0LApHPr%2FY%2FnlRNjEGUGlTA%3D%3D',
    '_pst': 'jd_ZgKKzeEWUVOh',
    '3AB9D23F7A4B3CSS': 'jdd03IND7P7YA4N3EQI5HTU2AYKBVC22AO6RBCQXVRWTJSYX2CR6B2OSBXMDJ5J6QGG5G5QI6KJUYJ6VYALOQS63FAVLQLEAAAAMUYW2SUDAAAAAAD5OME4NA6BTBVYX',
    '__jda': '143920055.1737897321942263293058.1737897322.1738300682.1738483772.4',
    '__jdc': '143920055',
    'thor': '7D37FA6A07AC77E4571155FF5FA9D6683A076B4650221C7D0F665AC0A2A402033C422B0708A066B15F96AA47C5980DC538D714FDEDB06A4E695E34E33D76319C3EBCCA0F7F0938217733598EDEA2F1DD48496B6D13E0071CBF7BE4060000D28FCAE9EF7A6DDB41DAB3955EC7BA29BEA65FFE88D3664D0BBC3C237F9B2F98D2E14BADF61FAC1B50B113FC19FE9DCFAF7CC0CF7BA91226E9F3C73BE34AEA6B2089',
    'shshshfpb': 'BApXSmdu9xvFARdjNBxx2vPsx_PlIZW_qBnXIdBtr9xJ1MsQOi4G2',
    '3AB9D23F7A4B3C9B': 'IND7P7YA4N3EQI5HTU2AYKBVC22AO6RBCQXVRWTJSYX2CR6B2OSBXMDJ5J6QGG5G5QI6KJUYJ6VYALOQS63FAVLQLE',
    'flash': '3_j24yHTlhp0cWYt3WTzWy0qJ3l7CRPeKOZZt_ZQnzGK7WY5pQTgPu16oT41dIgk5p--QPSzoeCMzbJRTGIVzzU7ktinLShiexGe3QxlOZ_hSQKZZ10y6WOL-GdYkyCVqaCCfJQ5uibamPX9omOtT5U-zL0tSV-yf67Cz9RFCf2qc0YLb_Kz6Q',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    # 'cookie': '__jdv=143920055|direct|-|none|-|1737959385615; 3AB9D23F7A4B3CSS=jdd035S6PJLLJCDQDFJOGXQQY55TVPHT4DAVDIXRS4C63FXPXLQL5DWJGRA3JDR5YF2ZEOK4DH7BU6G5IYKNWPNA26QDQPAAAAAMUUZZZXIAAAAAACKBOCYRNU4E2EYX; __jdu=17379593856151723879885; mba_muid=17379593856151723879885; mba_sid=1737959402086142068528086123.1; shshshfpa=ed6e5052-4eaa-0938-da33-4de6ff048820-1737959402; shshshfpx=ed6e5052-4eaa-0938-da33-4de6ff048820-1737959402; __jd_ref_cls=LoginDisposition_Go; jcap_dvzw_fp=iVuc-DKrxtU4Bf8HpytyABwG5Iy4j5g5OEPuRlcvM9o9v1cwOw-ApkUYt_0lqW2KDhpc-3Tqj-NYYUg00v3Akw==; x-rp-evtoken=mGW9U4qbzsaBdCMe70m9pK5p3qkdJvKqntmqO1bgt8fGP9jlmKjzriLWm4LzdF3H7pv-WnhNTU-rWQL2aZqPaA%3D%3D; ipLoc-djd=22-1930-0-0; jsavif=1; areaId=22; wlfstk_smdl=ayzlvk51u20o2bzjxy243parw6psgihr; TrackID=1Z5I_ycQMxkDb5SACYrJyTNcCPwh6A7eQuEpXmZk7XoAJmRVnH6JWDomU-O8vhpK1CxHPNaF49QRrrY56Nh7ibBOeTOfw7oNVG8tHhwl-1WA; thor=7D37FA6A07AC77E4571155FF5FA9D6683A076B4650221C7D0F665AC0A2A40203935BB16AA4CD5449CA92E3A763D05B5A3D4B798018A57F742B672EF88B8E094DF57C704903E10D7BFB2F87BF4581F974CBEBF633A1F7813E8EE5977A04BC5D89DF8F851730B8DD74220F83F44874A54516A904314A48F4B90D6758610E549D50840070182DEE556D18F79BEF819D74DEFD6416462C86F08F229CCD7EFF458DE6; light_key=AASBKE7rOxgWQziEhC_QY6yaYjSFPg9yEAUhdEEJLTt4COyX6dhJTMDb8KmgRmesjgvNW-v6; pinId=wfdfmSQxOIsWfB5_xb4LpA; pin=jd_ZgKKzeEWUVOh; unick=jd_55h0on0fz3dmvy; ceshi3.com=000; _tp=0LApHPr%2FY%2FnlRNjEGUGlTA%3D%3D; _pst=jd_ZgKKzeEWUVOh; __jda=143920055.17379593856151723879885.1737959386.1737959386.1737959386.1; __jdb=143920055.5.17379593856151723879885|1.1737959386; __jdc=143920055; shshshfpb=BApXSlCR8pfFAmP5CvO3njGj6JJFEwjn6BnXUky1o9xJ1MlocioG2; 3AB9D23F7A4B3C9B=5S6PJLLJCDQDFJOGXQQY55TVPHT4DAVDIXRS4C63FXPXLQL5DWJGRA3JDR5YF2ZEOK4DH7BU6G5IYKNWPNA26QDQPA; flash=3_ZJ9QaAQk1zI2f2TTamPNQFtcnWzyfAy5v3yhNsamNo_ILNqkNCZ2GFC-NXDMqZBntc0m-eqK0DCPPqHUxk58cd3a6FCfJD0i9465vQQ1R54CtzYea3pbqb2x9UHjeDINXZhOunn5HAnTckIiOdVSO3bPpj2UvjR3UZ53b6xwuhfwL8KCJ2aY',
    'origin': 'https://search.jd.com',
    'priority': 'u=1, i',
    'referer': 'https://search.jd.com/',
    'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
    'x-referer-page': 'https://search.jd.com/Search',
    'x-rp-client': 'h5_1.0.0',
}
search_data = {
    "keyword": "手机",
    "page": "5"
}
params = {
    'appid': 'search-pc-java',
    'functionId': 'pc_search_s_new',
    'client': 'pc',
    'clientVersion': '1.0.0',
    't': str(timer),
    'body': '{"keyword":"手机","pvid":"15b31e25e8fa42fc96d90a8e54181555","isList":0,"page":"5","s":"116","click":"0","log_id":"1737960690368.8076","show_items":""}',
    'loginType': '3',
    'uuid': '143920055.17379593856151723879885.1737959386.1737959386.1737959386.1',
    'area': '22_1930_0_0',
    'h5st': '',
    'x-api-eid-token': 'jdd03IND7P7YA4N3EQI5HTU2AYKBVC22AO6RBCQXVRWTJSYX2CR6B2OSBXMDJ5J6QGG5G5QI6KJUYJ6VYALOQS63FAVLQLEAAAAMUYW2SUDAAAAAAD5OME4NA6BTBVYX',
}
p = {
    "appid": "search-pc-java",
    "functionId": "pc_search_s_new",
    "client": "pc",
    "clientVersion": "1.0.0",
    "t": timer,
    "body": ""
}
s = sha256(params['body'].encode())
p['body'] = s.hexdigest()

def get_h5st(p):
    ret = subprocess.check_output(["node", "./jd", json.dumps(p)], shell=False).decode().strip()
    print(ret)
    return re.search(":::(?P<h5st>.*?):::", ret).group('h5st')


h5st = get_h5st(p)
# print(h5st)
params['h5st'] = h5st
params.update(search_data)
response = requests.get('https://api.m.jd.com/', params=params, cookies=cookies, headers=headers)
print('-'*80 + '\n', response.text)
