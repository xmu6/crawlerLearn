window = global;
delete global;
delete Buffer;
_process = process
delete process;
delete __dirname;
delete __filename;
Window = function (){}
window.Window = Window
window.__proto__ = Window.prototype
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    webdriver: false,
    languages: ['zh-CN', 'zh'],
    plugins:{
    "0": {
        "0": {},
        "1": {}
    },
    "1": {
        "0": {},
        "1": {}
    },
    "2": {
        "0": {},
        "1": {}
    },
    "3": {
        "0": {},
        "1": {}
    },
    "4": {
        "0": {},
        "1": {}
    },
        length: 5,
},
    platform: 'Win32',
    hardwareConcurrency: 20,
}
function Navigator(){}
window.Navigator = Navigator
navigator.__proto__ = Navigator.prototype
function HTMLDocument(){}
window.HTMLDocument = HTMLDocument;
script = {
    readyState: 'complete',
    type: '',
    src: '',
    onerror() {
    }
};
canvas = {};
document = {
    all:{
        '0':{},
        '1':{},
    },
    createElement(ele) {
        if (ele === 'script') {
            return script
        }
        if (ele === 'canvas') {
            return canvas
        }
        console.log('createElement:::',ele)
    },
    querySelector(selectors) {
        console.log('querySelector:::',selectors)
    },
    getElementsByTagName(qualifiedName) {
        if (qualifiedName === 'head') {
            return []
        }
        console.log('getElementsByTagName:::', qualifiedName)
    },
    documentElement:{},
    createEvent(ele) {
        console.log('createEvent:::',ele)
    },
    cookie: '',
    body: {
        childElementCount: 35,
        innerHTML: '',
    },
    head: {
        childElementCount: 37,
    },
}
document.__proto__ = HTMLDocument.prototype

function HTMLAllCollection(){}
window.HTMLAllCollection = HTMLAllCollection
document.all.__proto__ = HTMLAllCollection.prototype
Element = function (){}
window.Element = Element
Element.prototype = function(_$VN) {};
localStorage = {
    getItem: function (ele){
        if (ele === 'WQ_dy1_vk'){
            return '{"5.0":{"73806":{"e":31536000,"v":"xwcrp9saaxdwxxp7","t":1737959385604},"f06cc":{"e":31536000,"v":"x3wdapsrccx3rc27","t":1737959433073}},"5.1":{"73806":{"e":31536000,"v":"zziw3gaz9qppq2a4","t":1746429393952},"f06cc":{"e":31536000,"v":"gagaa9ipd22jj0p1","t":1746429394118}}}'
        }
        if (ele === 'WQ_dy1_tk_algo'){
            return '{"zziw3gaz9qppq2a4":{"73806":{"v":"eyJ0ayI6InRrMDN3Y2Q2NTFkNDYxOG5TalF6dU5iQ3VKQlZCWVR6UXdyT0VDVjhKUlJHczZtRVNnVTNOc3hxdElBU2J1azFiNXNsdHNsSmp3Mm5tbGprQUxOMkRYT3BQb3NKIiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSc1eEo5MmNwYXh5QnInO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9","e":86400,"t":1746429394180}},"gagaa9ipd22jj0p1":{"f06cc":{"v":"eyJ0ayI6InRrMDN3ZTU2ZDFkNmUxOG5UbDVhZWZ5d3JTZW1JbnIxTXFUSE5rX182ZXlfSDVOaDJFYzdFZ3RobG9sSHVIaks5aEl1VDVfd3dwdHAtT2JMbHFiZ1I2R3UzeU8yIiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSdHVFhTc29OM3pmQU0nO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9","e":86400,"t":1746429394243}}}'
        }
        if (ele === 'WQ_gather_cv1'){
            return '{"v":"6f086516fe378bad9ab0ea6c0f7d2faa","t":1746429394149,"e":31536000}'
        }
        if (ele === 'WQ_gather_wgl1'){
            return '{"v":"69fd22121147fd18f8fd93f625e41cb6","t":1746429394157,"e":31536000}'
        }
        console.log('getItem:::', ele)
    },
}
Storage = function () {}
window.Storage = Storage
localStorage.__proto__ = Storage

location = {
    "ancestorOrigins": {},
    "href": "https://search.jd.com/Search?keyword=%E6%89%8B%E6%9C%BA&wq=%E6%89%8B%E6%9C%BA&stock=1&pvid=92045d20dbb447769ae537286166b213&isList=0&page=1&s=1&click=0&log_id=1746415353712.7375",
    "origin": "https://search.jd.com",
    "protocol": "https:",
    "host": "search.jd.com",
    "hostname": "search.jd.com",
    "port": "",
    "pathname": "/Search",
    "search": "?keyword=%E6%89%8B%E6%9C%BA&wq=%E6%89%8B%E6%9C%BA&stock=1&pvid=92045d20dbb447769ae537286166b213&isList=0&page=1&s=1&click=0&log_id=1746415353712.7375",
    "hash": ""
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

proxy_array = ['window', 'document', 'location', 'navigator', 'navigator.plugins', 'history', 'script', 'document.head', 'meta',
    'base','screen','Element', 'localStorage', 'canvas','document.body','document.all']
getEnv(proxy_array)