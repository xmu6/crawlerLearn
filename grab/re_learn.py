import re

"""re.findall(正则模式, 文本)  基于正则模式查找所有匹配的文本内容"""
# part1: 通配符->.  字符集-> []
ret1 = re.findall("a", "a,b,c,d,e")
# ['a']
ret1 = re.findall(".", "a,b,c,d,e")
# ['a', ',', 'b', ',', 'c', ',', 'd', ',', 'e']
ret1 = re.findall("[ace]", "a,b,c,d,e")
# ['a', 'c', 'e']
ret1 = re.findall("[^a-z]", "1,a,2,b,3")
# ['1', ',', '2', ',', '3']

# part2:重复元字符-> + * {} ?
ret2 = re.findall(r"\w+", "apple,banana,orange,melon")
# ['apple', 'banana', 'orange', 'melon']
ret2 = re.findall(r"\w+?", "apple,banana,orange,melon")  # 取消贪婪匹配
# ['a', 'p', 'p', 'l', 'e', 'b', 'a', 'n', 'a', 'n', 'a', 'o', 'r', 'a', 'n', 'g', 'e', 'm', 'e', 'l', 'o', 'n']
ret2 = re.findall(r"\w*", "apple,banana,orange,melon")
# ['apple', '', 'banana', '', 'orange', '', 'melon', '']
ret2 = re.findall("abc*", "abc,abcc,abe,ab")
# ['abc', 'abcc', 'ab', 'ab']
ret2 = re.findall(r"\w{6}", "apple,banana,orange,melon")
# ['banana', 'orange']

# part3: 位置元字符-> ^ $
ret3 = re.findall(r"^\w{5}", "apple,banana,peach,orange,melon")
# ['apple']
ret3 = re.findall(r"\w{5}$", "apple,banana,peach,orange,melon")
# ['melon']

# part4:
# | 指定原子或正则模式进行二选一或多选一
# () 具备模式捕获的能力，也就是优先提取数据的能力，通过(?:) 可以取消模式捕获
ret4 = re.findall(r",\w{5},", ",apple,banana,peach,orange,melon,")  # 筛选出5个字符的单词
# [',apple,', ',peach,', ',melon,']
ret4 = re.findall(r",(\w{5}),", ",apple,banana,peach,orange,melon,")  # 筛选出5个字符的单词
# ['apple', 'peach', 'melon']
ret4 = re.findall(r"(?:\w+)@(?:qq|163)\.com", "123abc@163.com,....234xyz@qq.com,....")  # 筛选出5个字符的单词,通过(?:) 可以取消模式捕获
# ['123abc@163.com', '234xyz@qq.com']

# part5:  转义符-> \d \D  \w \W      \n    \s \S  \b \B
""" \b 1个单词边界原子 """
txt = "my name is nana. nihao,nana"
ret = re.findall(r"\bna", txt)
# ['na', 'na', 'na']

# part6:  compile编译
s1 = "12 apple 34 peach 55 banana"
s2 = "35 apple 555 peach 5665 banana"
reg = re.compile(r"\d+")
ret = reg.findall(s1)
# ['12', '34', '55']
ret = reg.findall(s2)
# ['35', '555', '5665']

