"""
from lxml import etree
selector=etree.HTML(源码) #将源码转化为能被XPath匹配的格式
selector.xpath(表达式) #返回为一列表
"""

from lxml import etree
from select import select

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
selector = etree.HTML(html_doc)
print(type(selector))  # <class 'lxml.etree._Element'>
ret = selector.xpath('//a')  # [<Element a at 0x1c787d27380>,<Element a at 0x1c787d273c0>,<Element a at 0x1c787d27400>]
for linkE in ret:
    name = linkE.xpath('./text()')[0]
    href = linkE.xpath('./@href')[0]
    print(name, href)
    