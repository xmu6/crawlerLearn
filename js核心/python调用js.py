import execjs
# 1.创建一个node对象
node = execjs.get()
# 2.js代码的读取编译
fp = open('pwd.js', 'r', encoding='utf-8').read()
# print(fp)
ctx = node.compile(fp)
# 3.调用js代码
res = ctx.call('getPwd', '123456')
print(res)

