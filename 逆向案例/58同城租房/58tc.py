import requests
from lxml import etree

cookies = {
    'f': 'n',
    'userid360_xml': '7434E09F387612F05C9A83D7BA1DAD05',
    'time_create': '1747070157507',
    'f': 'n',
    'id58': 'd/8W8Gf6n6xPYyLOCkdsAg==',
    'city': 'cd',
    '58home': 'cd',
    '58tj_uuid': '249bdf7b-ea2f-48a1-8761-b0a8178bb099',
    'new_uv': '1',
    'utm_source': 'sem-baidu-pc',
    'spm': 'u-2few7p4vh988mb62t1.2few8w827wgt4eurg.kd_209092640545.cr_83486247654.ac_20304970.cd_1083610762686783476',
    'init_refer': '',
    'commontopbar_ipcity': 'cd%7C%E6%88%90%E9%83%BD%7C0',
    'als': '0',
    'seo_source_type': '1',
    'xxzlclientid': 'ed9d9067-365c-47df-89c9-1744478157411',
    'new_session': '0',
    'xxzlxxid': 'pfmxgPzUOgcHX0J/MN0AlusUyQlumoYOYhg8YczvktvbcS4MwnR9015eGhpwj0J01o3u',
    'xxzlbbid': 'pfmbM3wxMDMyNXwxLjEwLjB8MTc0NDQ3ODQyNDQwNDc0NjMwNnxaWXhUaEplMFpBZ1NtMmlKSDJnZ1JYdWVWUndqK3c2Y1MzUGY4ZStWWEZ3PXw2YjgwNzRkM2NlNTNlMDNlM2E2NDk1NTUzNDg4NGQ3NV8xNzQ0NDc4NDAyMTM5Xzc3OTU3MjJjNzJhNTQ3OWE4ODEzMjVjNmYxZGY3MTJjXzQ3OTAxNzQ1MjU4MDczOTgwMTQwOTk1OTE3NjkyMjIwMzQyNjEwfDhjNjdlNDhlMWZjYjc5MTJkM2RlODIzMGYwODdjOTZmXzE3NDQ0Nzg0MjQxMjVfMjU0',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://cd.58.com//?spm=u-2few7p4vh988mb62t1.2few8w827wgt4eurg.kd_209092640545.cr_83486247654.ac_20304970.cd_1083610762686783476&utm_source=sem-baidu-pc&utm_campaign=sell&utm_medium=cpc',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'f=n; userid360_xml=7434E09F387612F05C9A83D7BA1DAD05; time_create=1747070157507; f=n; id58=d/8W8Gf6n6xPYyLOCkdsAg==; city=cd; 58home=cd; 58tj_uuid=249bdf7b-ea2f-48a1-8761-b0a8178bb099; new_uv=1; utm_source=sem-baidu-pc; spm=u-2few7p4vh988mb62t1.2few8w827wgt4eurg.kd_209092640545.cr_83486247654.ac_20304970.cd_1083610762686783476; init_refer=; commontopbar_ipcity=cd%7C%E6%88%90%E9%83%BD%7C0; als=0; seo_source_type=1; xxzlclientid=ed9d9067-365c-47df-89c9-1744478157411; new_session=0; xxzlxxid=pfmxgPzUOgcHX0J/MN0AlusUyQlumoYOYhg8YczvktvbcS4MwnR9015eGhpwj0J01o3u; xxzlbbid=pfmbM3wxMDMyNXwxLjEwLjB8MTc0NDQ3ODQyNDQwNDc0NjMwNnxaWXhUaEplMFpBZ1NtMmlKSDJnZ1JYdWVWUndqK3c2Y1MzUGY4ZStWWEZ3PXw2YjgwNzRkM2NlNTNlMDNlM2E2NDk1NTUzNDg4NGQ3NV8xNzQ0NDc4NDAyMTM5Xzc3OTU3MjJjNzJhNTQ3OWE4ODEzMjVjNmYxZGY3MTJjXzQ3OTAxNzQ1MjU4MDczOTgwMTQwOTk1OTE3NjkyMjIwMzQyNjEwfDhjNjdlNDhlMWZjYjc5MTJkM2RlODIzMGYwODdjOTZmXzE3NDQ0Nzg0MjQxMjVfMjU0',
}

params = {
    'spm': 'u-2few7p4vh988mb62t1.2few8w827wgt4eurg.kd_209092640545.cr_83486247654.ac_20304970.cd_1083610762686783476',
    'utm_source': 'sem-baidu-pc',
    'PGTID': '0d100000-0006-6ad4-e5a2-e3dad145e1da',
    'ClickID': '5',
}

response = requests.get('https://cd.58.com/chuzu/', params=params, cookies=cookies, headers=headers)
print(response.text)



