import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

import execjs
import requests
from lxml import etree

se = requests.Session()
# cookies = {
#     '6HZbKHDjIEcgS': '60vASQ3.62b75gWeFo_2fsEIvD51zBCbYnfqBTXqngs.1z4M0IitS9fP_b1cNGEfpzIZDgjgdMaCj5dDlblY7SUq',
#     'tfstk': 'g5CIEys9zDmCeJmG-kUw52e54ZOWOgN2p4TRoahEyBdpw7sdVLJ8xpk8NaxNTH7e9CP5vg9yvTAEwLI1VQ-dEBlJeGsWaMYFLUgh1iGrTk2hybOywor4gS7H8QA80nGL6E-HrNK87pEvfIB6wor4_3PJlNRRYRQgUV_9jUGpyHIJ6FLvXDnR2HptXETDw3IR2cp9yUi-9HppWPTkX3dJwgdtCKo6zJTRRy3_nY5gOG_pfbhR97vpcP-9SFfsSpKAJ6G-wrLBdnQpfoviw7JOrL1orb9lJtjkkMnL0pbRCGTBN5kpMN6RcFfLgDTGLNQ2XZgxMwAC116JCyFd5BtB3_pslAdCeMfWK9guoNddjtxDpRqM5652FnvsXkQN5HpfFMriwHWfWG9V_cl2ZGXR2UstAguognTI5Yg6nbT60PasEYjcPR5RL8i1ypLMJSz_5cMkpFY67PasEYvpSeEa5PisE',
# }

# headers = {
#     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
#     'accept-language': 'zh-CN,zh;q=0.9',
#     'cache-control': 'no-cache',
#     'pragma': 'no-cache',
#     'priority': 'u=0, i',
#     'referer': 'https://qikan.cqvip.com/Qikan/Journal/JournalGuid',
#     'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
#     'sec-ch-ua-mobile': '?0',
#     'sec-ch-ua-platform': '"Windows"',
#     'sec-fetch-dest': 'document',
#     'sec-fetch-mode': 'navigate',
#     'sec-fetch-site': 'same-origin',
#     'sec-fetch-user': '?1',
#     'upgrade-insecure-requests': '1',
#     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
#     # 'cookie': '6HZbKHDjIEcgS=60vASQ3.62b75gWeFo_2fsEIvD51zBCbYnfqBTXqngs.1z4M0IitS9fP_b1cNGEfpzIZDgjgdMaCj5dDlblY7SUq; tfstk=g5CIEys9zDmCeJmG-kUw52e54ZOWOgN2p4TRoahEyBdpw7sdVLJ8xpk8NaxNTH7e9CP5vg9yvTAEwLI1VQ-dEBlJeGsWaMYFLUgh1iGrTk2hybOywor4gS7H8QA80nGL6E-HrNK87pEvfIB6wor4_3PJlNRRYRQgUV_9jUGpyHIJ6FLvXDnR2HptXETDw3IR2cp9yUi-9HppWPTkX3dJwgdtCKo6zJTRRy3_nY5gOG_pfbhR97vpcP-9SFfsSpKAJ6G-wrLBdnQpfoviw7JOrL1orb9lJtjkkMnL0pbRCGTBN5kpMN6RcFfLgDTGLNQ2XZgxMwAC116JCyFd5BtB3_pslAdCeMfWK9guoNddjtxDpRqM5652FnvsXkQN5HpfFMriwHWfWG9V_cl2ZGXR2UstAguognTI5Yg6nbT60PasEYjcPR5RL8i1ypLMJSz_5cMkpFY67PasEYvpSeEa5PisE',
# }
url0 = 'https://qikan.cqvip.com/Qikan/Journal/JournalGuid'
response = se.get(url0)
print(response)
html = etree.HTML(response.text)

meta_content = html.xpath('//meta[2]/@content')[0]
ts_js = html.xpath('//script[1]/text()')[0]
auto_url = 'https://qikan.cqvip.com' + html.xpath('//script[2]/@src')[0]
auto_js = se.get(auto_url).text

with open('env.js', 'r', encoding='utf-8') as js_file:
    js_code = js_file.read()
js_code = js_code.replace('metaContent', meta_content).replace('auto_js', auto_js).replace('ts_js', ts_js)
js_compile = execjs.compile(js_code)
cookie_t = js_compile.call('get_cookie').split(';')[0].split('=')

se.cookies.update({cookie_t[0]: cookie_t[1]})
print(se.cookies.get_dict())
res2 = se.get(url0)
res2.encoding = 'utf-8'
print(res2)
print(res2.text)
