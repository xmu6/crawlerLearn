from multiprocessing import Process
import time


def get_request(url):
    print('正在处理请求', url)
    time.sleep(2)
    print('处理请求完成', url)


# 同步代码
# if __name__ == '__main__':
#     start = time.time()
#     urls = ['url1', 'url2', 'url3']
#     for url in urls:
#         get_request(url) # 串行，阻塞操作
#     print('总耗时', time.time() - start)


# 异步代码
if __name__ == '__main__':
    start = time.time()
    urls = ['url1', 'url2', 'url3']
    ps = []
    for url in urls:
        p = Process(target=get_request, args=(url,))  # 创建进程
        ps.append(p)
        p.start()  # 启动进程
    for p in ps:
        p.join()
    # 让主进程等待子进程结束后再结束
    """
    join方法的使用
        join是需要让子进程调用的方法，主进程一定会等待调用了join的子进程结束后，主进程再结束
    """
    print('总耗时', time.time() - start)

# ticketNum = 10
# def func(num):
#     global ticketNum
#     print("我是子进程，我要买%d张票" % num)
#     ticketNum -= num
#     time.sleep(1)
# if __name__ == '__main__':
#     p = Process(target=func, args=(2,))
#     p.start()
#     p.join()
#     print("我是主进程，我买票的票数是%d" % ticketNum)  # 10
#     # 进程与进程之间资源不共享
