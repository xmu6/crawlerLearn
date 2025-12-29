import json

from DrissionPage import ChromiumPage
import re
page = ChromiumPage()
page.listen.start('h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/?jsv=')
page.get('https://uland.taobao.com/sem/tbsearch?bc_fl_src=tbsite_T9W2LtnM&channelSrp=bingSomama&clk1=badf3b8e7af3033f8ae2f033111f252f&commend=all&ie=utf8&initiative_id=tbindexz_20170306&localImgKey=&msclkid=0daf83f86c0216c687caebeda8c3004e&page=1&q=%E6%89%8B%E6%9C%BA&refpid=mm_2898300158_3078300397_115665800437&search_type=item&sourceId=tb.index&spm=tbpc.pc_sem_alimama%2Fa.201856.d13&ssid=s5-e&tab=allttps://h5.m.taobao.com/mlapp/recommend.html')
res = page.listen.wait()
body = res.response.body
ret = re.findall(r"mtopjsonp\d+\((.*)\)", body)[0]
data = json.loads(ret)
for i in data['data']['itemsArray']:
    print(i['title'])



