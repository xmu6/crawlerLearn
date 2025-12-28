window = global;
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
}
document = {
    createEvent(ele) {
        if (ele === 'Event') {
            return Event
        }
        console.log('document createEvent:::', ele)
    }
}



















function getEnv(proxy_array) {
        for (var i = 0; i < proxy_array.length; i++) {
            handler = `{\n
            get: function(target, property, receiver) {\n
                   console.log('方法：get','    对象：${proxy_array[i]}','    属性：',property,'    属性类型：',typeof property,'    属性值类型：',typeof target[property]);
                   return target[property];
            },
            set: function(target, property, value, receiver){\n
                    console.log('方法：set','    对象：${proxy_array[i]}','    属性：',property,'    属性类型：',typeof property,'    属性值类型：',typeof target[property]);
                    return Reflect.set(...arguments);
            }
        }`
            eval(`
                try {
                    ${proxy_array[i]};
                    ${proxy_array[i]} = new Proxy(${proxy_array[i]}, ${handler});
                } catch (e) {
                    ${proxy_array[i]} = {};
                    ${proxy_array[i]} = new Proxy(${proxy_array[i]}, ${handler});
                }
            `)
        }
    }

proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'script', '_head', 'meta', 'base', 'Page']
getEnv(proxy_array)


