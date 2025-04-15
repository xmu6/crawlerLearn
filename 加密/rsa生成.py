"""
公钥和私钥：
公钥加密，私钥解密：数据加密
私钥加密，公钥解密：数字签名
"""
from Crypto.PublicKey import RSA

rsa_obj = RSA.generate(1024)
private_key = rsa_obj.exportKey()   # 私钥
public_key = rsa_obj.publickey().exportKey()  # 公钥
# print(private_key)
# print(public_key)
print(private_key.decode())
print(public_key.decode())
with open('private.pem', 'wb') as f:
    f.write(private_key)

with open('public.pem', 'wb') as f:
    f.write(public_key)


