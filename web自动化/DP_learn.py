# pip install DrissionPage
# 官网：https://drissionpage.cn/browser_control/intro
from DrissionPage import ChromiumPage, ChromiumOptions
from DrissionPage import SessionPage as Session
from DrissionPage import WebPage
"""
工具讲解
- ChromiumPage
    - 类似selenium的driver.Chrome(...), 会打开一个浏览器窗口
    - 只能进行get请求
- SessionPage
    - 使用类似requests模块的session，但比session更强大
    - 为了方便直接取别名
    - get/post 都可以满足以及代理
- WebPage
    - 集成了ChromiumPage和SessionPage，还可以在两者之间自由切换
"""
co = ChromiumOptions()
co.headless(False)
# 1. 设置无头模式：co.headless(True)
# 2. 设置无痕模式：co.incognito(True)
# 3. 设置访客模式：co.get_argument('--guest')
# 4. 设置请求头user-agent：co.set_user_agent()
# 5. 设置指定端口号：co.set_local_port()
# 6. 设置代理：co.set_proxy('http://localhost:2222')
page = ChromiumPage(co)
url = 'https://www.baidu.com'
page.get(url)
page.wait.load_start()
page.ele("css:#kw").input('美女')
page.ele("css:#su").click()

print(page.html)

