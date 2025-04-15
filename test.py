v1 = [-27, -67, -83, -28, -70, -114, -26, -103, -113]
def java_arr_to_python_str(v1):
    num_list = bytearray()
    for i in v1:
        if i < 0:
            i = i + 256
        num_list.append(i)
        print(num_list)
    return num_list.decode('utf-8')
print(java_arr_to_python_str(v1))