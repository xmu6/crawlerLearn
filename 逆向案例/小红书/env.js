window = global;
_global = global;
delete global;
delete Buffer;
window.localStorage = {
    "b1b1": "1",
    "MF_STATISTICS": "{\"timestamp\":1746290914512,\"visitTimes\":1,\"readFeedCount\":0}",
    "XHS_STRATEGY_BOX": "{\"firstVisit-\":false}",
    "p1": "3",
    "last_tiga_update_time": "1746290864661",
    "HOME_FEED_CURSOR_SCORE": "81646",
    "NEW_XHS_ABTEST_REPORT_KEY": "{\"4fee025dbb16030b56d6cebf6fbd0b3568163662000000001703f94e56ca061c-aea0-509f-aff8-615aba97d9e2\":\"2025-05-04\"}",
    "sdt_source_storage_key": "{\"signVersion\":\"1\",\"extraInfo\":{\"mnsTokenUrl\":\"https://fe-static.xhscdn.com/as/v1/3e44/public/11b080d07a42355a374e830a4a0dc392.js\"},\"reportUrl\":\"/api/sec/v1/shield/webprofile\",\"desVersion\":\"2\",\"commonPatch\":[\"/fe_api/burdock/v2/note/post\",\"/api/sns/web/v1/comment/post\",\"/api/sns/web/v1/note/like\",\"/api/sns/web/v1/note/collect\",\"/api/sns/web/v1/user/follow\",\"/api/sns/web/v1/feed\",\"/api/sns/web/v1/login/activate\",\"/api/sns/web/v1/note/metrics_report\",\"/api/redcaptcha\",\"/api/store/jpd/main\",\"/phoenix/api/strategy/getAppStrategy\"],\"signUrl\":\"https://fe-static.xhscdn.com/as/v1/3e44/public/04b29480233f4def5c875875b6bdc3b1.js\",\"xhsTokenUrl\":\"https://fe-static.xhscdn.com/as/v1/3e44/public/bf7d4e32677698655a5cadc581fd09b3.js\",\"url\":\"https://fe-static.xhscdn.com/as/v1/f218/6/public/0666f0acdeed38d4cd9084ade1739498.js\",\"validate\":true}",
    "UNREAD_NOTE_INFO": "{\"cachedFeeds\":[],\"unreadBeginNoteId\":\"64a676cc000000002303461b\",\"unreadEndNoteId\":\"648677e00000000013004cc9\",\"unreadNoteCount\":20,\"timestamp\":0}",
    "xhs-pc-theme": "system",
    "guide-ExploreMoreGuide": "{\"neverShowAgainFlag\":false,\"hasShownFlag\":false,\"lastShowTime\":1746286176209}",
    "b1": "I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJeD9MDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR6QL+5Ii6sdnoeSfqYHqwl2qt5B0DoIx++GDi/sVtkIxdsxuwr4qtiIhuaIE3e3LV0I3VTIC7e0utl2ADmsLveDSKsSPw5IEvsiVtJOqw8BuwfPpdeTFWOIx4TIiu6ZPwrPut5IvlaLbgs3qtxIxes1VwHIkumIkIyejgsY/WTge7eSqte/D7sDcpipedeYrDtIC6eDVw2IENsSqtlnlSuNjVtIx5e1qt3bmAeVn8LIESaIhEe+AFDI3EPKI8BIiW7ZPwAIvGj4sesYINsxVwSIC7edB7e0fh+IEde6WrS8qwUIE7s1f0s6WAeiVtwpjgeYuwuIv8ca03edPwhgfOsWVw8IxI2I38isqwZgVtPzg8QwcNejd/eiqwoIhAsS/AskFRYIk/s0MvskdE0IhgsiVwDIhGdQqwJ8ut9I33e3PtVIiNsVVwxIENsdutMHPw2mqwMIvcvIxua29uf2IeexutEIhVzIideSVwLbzQrLj7sYj8VIiFB2PtwmqwRIvAexVtu+DNeTl0sVFpBIh7s3ggsiPtzLqwqIC0efVtUIiOe6UuPICKsd/3sjqwFIC6sVutbs9GtIkSKIxNsVI/ekgeedZosDuteIiF9IxkumqtnIvklIEJsxbHStj/sWVtbIhpcbuwFJWosYpKeSuwprVwZIxkAIicynPwtsqwCIv5eWF0exVtgZVwBIiu2butRI3ZleAHcIE7sDF3e097ekPwwwVtPIiHLI37s3VtsIE6e0Sl5IhQielRQIvRFIvNeVVwUguw4OZ==",
    "guide-ImageNoteGuide": "{\"neverShowAgainFlag\":false,\"hasShownFlag\":false,\"lastShowTime\":1746286176209}",
    "xhs_context_networkQuality": "EXCELLENT",
    getItem: function (){},
}
canvas = {
    getContext: function (){}
}
document = {
    createElement(ele) {
        if (ele === 'canvas') {
            return canvas;
        }
        console.log('createElement:::',ele)
    },
    documentElement: {},
    cookie: 'abRequestId=56ca061c-aea0-509f-aff8-615aba97d9e2; webBuild=4.62.3; a1=19696c3f49dv1ui6pg5zdamayolj41t352hegc7qx50000364164; webId=4fee025dbb16030b56d6cebf6fbd0b35; web_session=030037af2562163bbc392e706e2f4a68a3d101; unread={%22ub%22:%2264a676cc000000002303461b%22%2C%22ue%22:%22648677e00000000013004cc9%22%2C%22uc%22:20}; gid=yjKjKS4YK820yjKjKSqi4JSWjfhy73KUk2ufxAC060vl1d28V4y9qk888qK4yK482iDiyyyd; xsecappid=xhs-pc-web; loadts=1746290884783; acw_tc=0ad629bf17462926750136699e8c87ac688d28038d8943d61fafb4a4c7fd91; websectiga=634d3ad75ffb42a2ade2c5e1705a73c845837578aeb31ba0e442d75c648da36a; sec_poison_id=a33306df-02c5-4ae3-ad08-aaf6825c363b',
    querySelectorAll(selectors) {},

}
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    platform: 'Win32',
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
}
location = {
    "ancestorOrigins": {},
    "href": "https://www.xiaohongshu.com/explore?channel_id=homefeed.food_v3",
    "origin": "https://www.xiaohongshu.com",
    "protocol": "https:",
    "host": "www.xiaohongshu.com",
    "hostname": "www.xiaohongshu.com",
    "port": "",
    "pathname": "/explore",
    "search": "?channel_id=homefeed.food_v3",
    "hash": ""
}
window.sdt_source_init = true;


// function setProxyArr(proxyObjArr) {
//     for (let i = 0; i < proxyObjArr.length; i++) {
//         const objName = proxyObjArr[i];
//         const handler = {
//             get(target, property, receiver) {
//                 console.log("方法:", "get  ", "对象:", objName, "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property], ", 属性值类型：", typeof target[property]);
//                 return target[property];
//             },
//             set(target, property, value, receiver) {
//                 console.log("方法:", "set  ", "对象:", objName, "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
//                 return Reflect.set(target, property, value, receiver);
//             }
//         };
//         // 检查并初始化对象
//         let targetObject = _global[objName] || {};  // 在Node.js环境中使用global
//         _global[objName] = new Proxy(targetObject, handler);  // 在Node.js环境中使用global
//     }
// }
//
// setProxyArr(["window", "document", "navigator", "script", "canvas", 'ctx','div',])


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

// proxy_array = ['window', 'document', 'canvas', 'location', 'navigator', 'history', 'script', '_head', 'meta', 'base','localStorage']
// getEnv(proxy_array)
