from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import base64
"""
AES最常用的模式是CBC模式和ECB模式，ECB模式不需要iv偏移量，CBC需要

key的长度
    16：*AES-128*
    24：*AES-192*
    32：*AES-256*
iv的字节长度只能是16位
"""

key = b'0123456789abcdef'  # 16 24 32
iv = b'fedcba9876543210'  # 16 bytes iv must
data = 'hello world!'.encode()  # 加密内容
text = pad(data, 16)
# 创建加密对象
aes = AES.new(key, AES.MODE_CBC, iv)  # 创建一个aes对象

en_text = aes.encrypt(text)  # 加密
print('aes加密:::', en_text)  # 返回二进制类型数据

# 二进制密文转换成字符串格式
en_text = base64.b64encode(en_text).decode()
print('base64编码:::', en_text)


# 解密
aes = AES.new(key, AES.MODE_CBC, iv)
text = b'q2nFA1dQpdzKbPu1IeR1Rw=='
encrypted_base64 = base64.b64decode(text)
source = aes.decrypt(encrypted_base64)  # 解密
# 未填充数据
print('解密:::', source.decode())
# 取消填充数据
print('解密:::', unpad(source, 16).decode())
