from DrissionPage import ChromiumPage

cp = ChromiumPage()
cp.get('https://www.baidu.com')
cp.ele("#kw").input("IP地址")
cp.wait.load_start()
cp.ele("#su").click()
# 开始监听
cp.listen.start("ip/local/geo/v1/district")
# 等待响应
res = cp.listen.wait()
print(res.response.body)
