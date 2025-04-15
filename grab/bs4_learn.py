from bs4 import BeautifulSoup
import re

html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""

# 一、查找tag对象
soup = BeautifulSoup(html_doc, 'lxml')
print(soup.head, type(soup.head))
# <head><title>The Dormouse's story</title></head> <class 'bs4.element.Tag'>
print(soup.title, type(soup.title))
# <title>The Dormouse's story</title> <class 'bs4.element.Tag'>
print(soup.a, type(soup.a))  # 第一个a标签，如果想获取所有a标签要用到soup.find_all('a')
# <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a> <class 'bs4.element.Tag'>
print(soup.find_all("a"))  # [...]
print(soup.p.b)
# <b>The Dormouse's story</b>

# 二、查找tag对象的标签名和属性
print(soup.a.name)  # a
print(soup.p.b.name)  # b
print(soup.a["href"])  # http://example.com/elsie
print(soup.a.attrs)  # {'href': 'http://example.com/elsie', 'class': ['sister'], 'id': 'link1'}
'''
三、
HTML 4定义了一系列可以包含多个值的属性.在HTML5中移除了一些,却增加更多.
最常见的多值的属性是 class (一个tag可以有多个CSS的class). 
还有一些属性 rel , rev , accept-charset , headers , accesskey . 
在Beautiful Soup中多值属性的返回类型是list
'''
print(soup.a["class"])  # 返回列表['sister']

# 四、tag的属性可以被添加,删除或修改(tag的属性操作方法与字典一样)
# soup.a["class"] = ["sister c1"]
# del soup.a["id"]
# print(soup)

# 五、获取标签对象的文本内容
print(soup.p.string)  # p下的文本只有一个时，取到，否则为None
print(soup.p.strings)  # 拿到一个生成器对象, 取到p下所有的文本内容
for i in soup.p.strings:
    print(i)
'''如果tag包含了多个子节点,tag就无法确定 .string 方法应该调用哪个子节点的内容, .string 的输出结果是 None，如果只有一个子节点那么就输出该子
节点的文本，比如下面的这种结构，soup.p.string 返回为None,但soup.p.strings就可以找到所有文本'''

print('- - '*20)
# 2、子节点、子孙节点
print(soup.p.contents)  # 列表，p下所有子节点
print(soup.p.children)  # 得到一个迭代器,包含p下所有子节点
print(soup.p.descendants)  # 获取子孙节点,p下所有的标签都会选择出来
print(soup.a.next_sibling)  # 下一个兄弟,类型：<class 'bs4.element.NavigableString'>
print(soup.a.next_sibling.next_sibling)
# （2）find_next_siblings() 和 find_next_sibling()
'''
这2个方法通过 .next_siblings 属性对当tag的所有后面解析的兄弟tag节点进行迭代, find_next_siblings() 方法返回所有符合条件的后面的兄弟节点, 
find_next_sibling() 只返回符合条件的后面的第一个tag节点.
'''
print(soup.a.previous_sibling.previous_sibling)
print(soup.a.previous_siblings)  # 上面的兄弟们=>生成器对象

print("-"*80)

# 一、 name 四种过滤器: 字符串、正则表达式、列表、方法
# 1、字符串：即标签名
print(soup.find_all(name='a'))

# 2、正则表达式

print(soup.find_all(name=re.compile('^b')))  # 找出b开头的标签，结果有body和b标签

# 3、列表：如果传入列表参数,Beautiful Soup会将与列表中任一元素匹配的内容返回.下面代码找到文档中所有<a>标签和<b>标签:
print(soup.find_all(name=['a', 'b']))


# 4、方法:如果没有合适过滤器,那么还可以定义一个方法,方法只接受一个元素参数 ,如果这个方法返回 True 表示当前元素匹配并且被找到,如果不是则反回 False
def has_class_but_no_id(tag):
    return tag.has_attr('class') and tag.has_attr('id')


print(soup.find_all(name=has_class_but_no_id))

print("*"*80)

print(soup.find_all(href="http://example.com/tillie"))
print(soup.find_all(href=re.compile("^http://")))
print(soup.find_all(id=True))  # 拥有id属性的tag
print(soup.find_all(href=re.compile("http://"), id='link1'))  # 多个属性
print(soup.find_all("a", class_="sister"))  # 注意，class是Python的关键字，所以class属性用class_

print("*"*80)

print(soup.find_all(text="Elsie"))
# ['Elsie']
print(soup.find_all(text=["Tillie", "Elsie", "Lacie"]))
# ['Elsie', 'Lacie', 'Tillie']
# 只要包含Dormouse就可以
print(soup.find_all(text=re.compile("Dormouse")))
# ["The Dormouse's story", "The Dormouse's story"]

print(soup.find_all("a", limit=2))


