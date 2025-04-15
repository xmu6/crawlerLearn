# 防止请求URL中的一些特殊符号（如&）引起的歧义
import urllib.parse
a = 'xiao'
print(urllib.parse.quote(a))  # xiao
b = '&xiao '
print(urllib.parse.quote(b))  # %26xiao%20
print(urllib.parse.unquote('%26xiao%20'))  # &xiao

# 对字典做真题URL编码
data = {'name': '&xiao ', 'age': 18}
print(urllib.parse.urlencode(data))  # name=%26xiao+&age=18
print(urllib.parse.parse_qs('name=%26xiao+&age=18'))  # {'name': ['&xiao '], 'age': ['18']}
print({key: value[0] for key, value in urllib.parse.parse_qs('name=%26xiao+&age=18').items()})
# {'name': '&xiao ', 'age': '18'}

