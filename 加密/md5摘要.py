from hashlib import md5
# 0-9 a-f 32位

# 1.创建一个加密对象
obj = md5()  # md5实例化
data = 'hello world'.encode('utf-8')
# 2.加密
obj.update(data)  # 参数为字节数据
result = obj.hexdigest()  # 获取摘要结果
print(result, len(result))

# md5的盐
salt = '我是盐'.encode()
obj = md5(salt)
data = 'hello world'.encode('utf-8')
obj.update(data)
result = obj.hexdigest()
print(result, len(result))

# md5的多次update
obj = md5()
data_1 = 'hello '.encode('utf-8')
data_2 = 'world'.encode('utf-8')
obj.update(data_1)
obj.update(data_2)
result = obj.hexdigest()
# 等同于直接update('hello world'.encode('utf-8'))
print(result)

# 第二种结果
obj = md5()
data = '123456'.encode()
obj.update(data)
result = obj.hexdigest()
print(result)
result = obj.digest()
print(result, type(result))


# 其他摘要算法
from hashlib import sha1, sha224, sha256, sha384, sha512
sha1_obj = sha1()
sha1_obj.update('hello world'.encode('utf-8'))
result = sha1_obj.hexdigest()
print(result, len(result))

# sha1 -> 40位
# sha224 -> 56位
# sha256 -> 64位
# sha384 -> 96位
# sha512 -> 128位
