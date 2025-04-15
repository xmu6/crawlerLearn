# 芝麻代理（国外）
# 携趣代理: https://www.xiequ.cn/   (国内可用）
'''
proxy = {
    "https": "125.124.146.223:5648"        协议+IP+端口
}
response = requests.get(url, proxies=proxy)
'''

import requests


# 代理池
def get_proxy_pool():
    url = '.....'
    res = requests.get(url)
    return res.text.strip()
