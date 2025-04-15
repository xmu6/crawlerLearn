require("./env")
require("./loader")

function decrypt_data(encrypted_data) {
    return window.loader("7d92").b("SM4", encrypted_data)
}

function encrypt_data(page) {
    e = {
    "transformRequest": {},
    "transformResponse": {},
    "timeout": 30000,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "headers": {
        "common": {
            "Accept": "application/json, text/plain, */*"
        },
        "delete": {},
        "get": {},
        "head": {},
        "post": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "put": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "patch": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "Accept": "application/json",
        "Content-Type": "application/json",
        "channel": "web"
    },
    "withCredentials": false,
    "baseURL": "/ebus/fuwu/api",
    "method": "post",
    "url": "/nthl/api/CommQuery/queryDiseaseCatalogByPage",
    "data": {
        "diagCode": "",
        "diagName": "",
        "cprName": "",
        "pageNum": page,
        "pageSize": 10
    }
}
    return window.loader("7d92").a(e)['data']
}

console.log(encrypt_data(1))