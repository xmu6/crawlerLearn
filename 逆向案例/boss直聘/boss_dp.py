import time

from DrissionPage import ChromiumPage, ChromiumOptions
import pandas as pd

page = ChromiumPage()
page.listen.start('/wapi/zpgeek/search/joblist.json')
page.get('https://www.zhipin.com/web/geek/job?query=python&city=101010100')

res = page.listen.wait()
print("res:::",res.response.body)
joblist = res.response.body['zpData']['jobList']
for i in range(10):
    time.sleep(1)
    btn = page.ele('.ui-icon-arrow-right')
    btn_a = btn.parent().attr('class')

    if btn_a != 'disabled':
        btn.click()
        res = page.listen.wait()
        joblist += res.response.body['zpData']['jobList']
        print(joblist)
    else:
        print('爬虫结束！')
        break
# 写入到excel中
df = pd.DataFrame(joblist)
df.to_excel('boss直聘.xlsx', index=False)
page.quit()