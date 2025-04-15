from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
import base64

data = 'hello world'
with open('public.pem', 'rb') as f:
    # 1.获取公钥字符串
    public_key = f.read()
    # 2.基于公钥字符串构建公钥对象
    public_key_obj = RSA.importKey(public_key)
    # 3.基于公钥对象构建加密器对象
    rsa_public = PKCS1_v1_5.new(public_key_obj)
    # 4.加密
    encrypt_data = rsa_public.encrypt(data.encode())
    # 5.base64编码
    base64_encrypt_data = base64.b64encode(encrypt_data)
    print(base64_encrypt_data.decode())


# 解密
# 1.base64解码
encrypt_data = base64.b64decode(base64_encrypt_data)
# 2.获取私钥字符串
with open('private.pem', 'rb') as f:
    # （1）读取私钥字符串
    private_key = f.read()
    # （2）基于私钥字符串构建私钥对象
    private_key_obj = RSA.importKey(private_key)
    # （3）基于私钥对象构建解密器对象
    rsa_private = PKCS1_v1_5.new(private_key_obj)
    # （4）解密
    decrypt_data = rsa_private.decrypt(encrypt_data, None)  # sentinel参数用于指示解密函数在解密过程中如果没有找到有效的填充数据时应该返回的值。
    print(decrypt_data.decode())
