import base64
# 注意：base64的编码一定是4的倍数


# 将原始数据转化为二进制/字节数据
data = 'hello world'.encode('utf-8')
print(data)
# 将二进制数据转化为base64编码
base64_data = base64.b64encode(data).decode()
print(base64_data)

bs = 'yo'.encode('utf-8')
print(base64.b64encode(bs).decode())

s = 'aGVsbG8gd29ybGQ='
ret = base64.b64decode(s).decode()
print(ret)