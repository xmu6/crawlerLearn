import requests

cookies = {
    '_gid': 'GA1.2.1071487404.1741181950',
    '__wksid': 'n-738A5DA16E8341339B1E5E7C10D8EC30',
    'MEIQIA_TRACK_ID': '2ttqvgmyYDDM9OdJB06slweIOoQ',
    'MEIQIA_VISIT_ID': '2ttqvjCTettmVWehADoco3ZSM3H',
    '_ga_ESVMH6YSPX': 'GS1.1.1741181949.1.1.1741182175.0.0.0',
    '_ga_B8H0JYR4RL': 'GS1.1.1741181950.1.1.1741182176.59.0.0',
    '_ga': 'GA1.1.1076895691.1741181950',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'script',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': '_gid=GA1.2.1071487404.1741181950; __wksid=n-738A5DA16E8341339B1E5E7C10D8EC30; MEIQIA_TRACK_ID=2ttqvgmyYDDM9OdJB06slweIOoQ; MEIQIA_VISIT_ID=2ttqvjCTettmVWehADoco3ZSM3H; _ga_ESVMH6YSPX=GS1.1.1741181949.1.1.1741182175.0.0.0; _ga_B8H0JYR4RL=GS1.1.1741181950.1.1.1741182176.59.0.0; _ga=GA1.1.1076895691.1741181950',
}

params = {
    'cb': '2iptp52d97g',
    'i': 'iEImYBeX6lJnI90oJVME1T/1vMk6CFCfxSdq5SBDKr3TE5q1P3EfBTRJMSxIImoY/BrgCqtzunCmB4AlxzOEjSliKY390Ujf+2m/vr+pyEECgkdPdxq8LQypjs8O7+GS5yH6E3iY0XC9Fv0OEX5lTpREnbWwatE5UtPTalEwwlBKPoT3t9i0neVV1SKtm+MVV/mKnr89czjVTmwZRmMiTMg9kowDIC4aKaaVbsD9LHrv9MQTD5FLVM4dY6tWkz67l9HaKxoElMsI5PZlub90wLN5Hps88LAPcguPW/LkFA74NmuaPe74QRW2gP5pN96VjzhKigo1FsDKZwzxAh+2NbtTASDFw711kcBu/83KixTYjM2IjxMEDpn0fofakzruTT08556Gata3PM8c8l+smJDAQFkSaZOlAO3oxlFdCCOOaoAzpkLGJPVQhExPBCHh5JzTztI8yoczc44RcxAhOdh40DwnTAZQhlok/x+uB0XLXh+vwnsrcnQ4lS96//vgPnlNSg9cFLhaq4DrGQgmgQP2/XGzIJSSeqsG7wufZmJfcvlUB4fiFkWwy+JYEZawQvWEfmArmRwlzgXVYe4+heutJ1CGeqlL+AdbTA0wH/293/c3qTYAxHtcJvVqFx2pKW2ox/6fs4d6o4MO922fa3HWrDhyk2fQK9l0GZysjS+4tmmO9xfTWw6++GTzGmEsJ7f38Gxw98I9i1PEBtYge3XQBqKUs5NtyfCVb3MW8+Yx2+guXVUy+PAKLmOjqa0N/BsYqKEjkjZWrYMMZ/cChI/DY5SxHJvM0/l4vmAmlADMSumK8Piv1lft8hIBDy+s4zPt9Cnh0pPGpzJv1w/OfFYNIcRP97vB8xhyO5zWB2A=',
    'k': '0iLGvO6WmD78aD7Gc41i0fYPUgV/Qo43cZbYdxX9fduOkqpR+/ik8XKwhsPq6PkFh5u7UzqzfJ+7ME8rJE0RNndc0M2gZ/Dx5L2KdAvHSWiFrrl/A6I2iVo/NxWtC7fkAjXElTcd9u+asp3TFkzbFdddVbn3rZWU+/CE6M455LU=',
    'captchaId': '974cd565f11545b6a5006d10dc324281',
}

response = requests.get('https://captcha.yunpian.com/v1/jsonp/captcha/get', params=params, cookies=cookies, headers=headers)
print(response.text)

