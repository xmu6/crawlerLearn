import requests

cookies = {
    'lastCity': '101040100',
    'ab_guid': 'c1f7a775-631b-454f-bcf4-a9978cb3ac58',
    '__g': '-',
    'Hm_lvt_194df3105ad7148dcf2b98a91b5e727a': '1746255310,1746256072',
    'Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a': '1746256072',
    'HMACCOUNT': '1F51A74C115B18AD',
    'wt2': 'DImI8nF6BpgnfysSLmvoIf0mT_fuSpgFsVWLPVPF-mlRrm5vhFH25gvfsfeobSrJW1wVu12kJn8XzF3u-kaK5tQ~~',
    'wbg': '0',
    'zp_at': 'we1A6QKT-LqLOc4blKRTFuPhS5XhRqANLL8JpGdhxM4~',
    'bst': 'V2R9suFef621ljVtRuyxsRKSi27DrTxyo~|R9suFef621ljVtRuyxsRKSi27DrSwCU~',
    '__c': '1746256072',
    '__l': 'l=%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjobs%3Fquery%3Dpython%26city%3D101010100&r=&g=&s=3&friend_source=0&s=3&friend_source=0',
    '__a': '15205749.1746255296.1746255296.1746256072.8.2.6.8',
    '__zp_stoken__': '7d89fOT7DocK5wp3CukMpDRcVDQtCLD4%2BLl5DOSpGPkA5Pjg8Qjk%2BQB48KcOgwrnCrcO5NWHDjw07LD44QTs5QDg%2BRhw%2BRMS4wrw4PzPDrsK6wqrDvDRhw4wKSAtkCMK5wrkuwqXCuwoKQyzDiMK4OT9BPC7CvTfDg8ORwrsxw4XDlMK5NsODPzk8NTM7DwxYEzs5T09cDUtjTmZnVw5XUFYrPEU%2FOGzCo8O%2BNToTFhQTFRMWFBMVEBUXCQ8JDA4JDxAVFxAWNjvCpcK5UsOhxI%2FCgcOrxJnCmFzCiljDuMKbxIRLw77CnMK%2BdMKtU8O%2Fw4XCtGLCo2jDhcK8wrdcVGpRZ1dywrB1w4ZQdHHCq2lwX2Jpe1IVen5kFjsRGyXDjA%3D%3D',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.zhipin.com/web/geek/jobs?query=python&city=101010100',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'token': 'iGaPuouYuvosr6l3',
    'traceid': 'F-0401a54ySF7fv1o5',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    'zp_token': 'V2R9suFef621ljVtRuyxsRKSi27DrTxyo~|R9suFef621ljVtRuyxsRKSi27DrSwCU~',
    # 'cookie': 'lastCity=101040100; ab_guid=c1f7a775-631b-454f-bcf4-a9978cb3ac58; __g=-; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1746255310,1746256072; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1746256072; HMACCOUNT=1F51A74C115B18AD; wt2=DImI8nF6BpgnfysSLmvoIf0mT_fuSpgFsVWLPVPF-mlRrm5vhFH25gvfsfeobSrJW1wVu12kJn8XzF3u-kaK5tQ~~; wbg=0; zp_at=we1A6QKT-LqLOc4blKRTFuPhS5XhRqANLL8JpGdhxM4~; bst=V2R9suFef621ljVtRuyxsRKSi27DrTxyo~|R9suFef621ljVtRuyxsRKSi27DrSwCU~; __c=1746256072; __l=l=%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjobs%3Fquery%3Dpython%26city%3D101010100&r=&g=&s=3&friend_source=0&s=3&friend_source=0; __a=15205749.1746255296.1746255296.1746256072.8.2.6.8; __zp_stoken__=7d89fOT7DocK5wp3CukMpDRcVDQtCLD4%2BLl5DOSpGPkA5Pjg8Qjk%2BQB48KcOgwrnCrcO5NWHDjw07LD44QTs5QDg%2BRhw%2BRMS4wrw4PzPDrsK6wqrDvDRhw4wKSAtkCMK5wrkuwqXCuwoKQyzDiMK4OT9BPC7CvTfDg8ORwrsxw4XDlMK5NsODPzk8NTM7DwxYEzs5T09cDUtjTmZnVw5XUFYrPEU%2FOGzCo8O%2BNToTFhQTFRMWFBMVEBUXCQ8JDA4JDxAVFxAWNjvCpcK5UsOhxI%2FCgcOrxJnCmFzCiljDuMKbxIRLw77CnMK%2BdMKtU8O%2Fw4XCtGLCo2jDhcK8wrdcVGpRZ1dywrB1w4ZQdHHCq2lwX2Jpe1IVen5kFjsRGyXDjA%3D%3D',
}

params = {
    'page': '1',
    'pageSize': '15',
    'city': '101010100',
    'query': 'python',
    'expectInfo': '',
    'multiSubway': '',
    'multiBusinessDistrict': '',
    'position': '',
    'jobType': '',
    'salary': '',
    'experience': '',
    'degree': '',
    'industry': '',
    'scale': '',
    'stage': '',
    'scene': '1',
    '_': '1746256789925',
}

response = requests.get('https://www.zhipin.com/wapi/zpgeek/search/joblist.json', params=params, cookies=cookies, headers=headers)
print(response.json())