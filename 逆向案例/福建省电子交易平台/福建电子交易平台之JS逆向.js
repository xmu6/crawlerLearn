crypto_js = require("crypto-js")

function b(t) {
    var e = crypto_js.enc.Utf8.parse('EB444973714E4A40876CE66BE45D5930')
        , n = crypto_js.enc.Utf8.parse("B5A8904209931867")
        , a = crypto_js.AES.decrypt(t, e, {
        iv: n,
        mode: crypto_js.mode.CBC,
        padding: crypto_js.pad.Pkcs7
    });
    return a.toString(crypto_js.enc.Utf8)
}

// data = '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'
// console.log(b(data))



function l(t, e) {
            return t.toString().toUpperCase() > e.toString().toUpperCase() ? 1 : t.toString().toUpperCase() == e.toString().toUpperCase() ? 0 : -1
        }
function u(t) {
            for (var e = Object.keys(t).sort(l), n = "", a = 0; a < e.length; a++)
                if (void 0 !== t[e[a]])
                    if (t[e[a]] && t[e[a]]instanceof Object || t[e[a]]instanceof Array) {
                        var i = JSON.stringify(t[e[a]]);
                        n += e[a] + i
                    } else
                        n += e[a] + t[e[a]];
            return n
        }
function d(t) {
            for (var e in t)
                "" !== t[e] && void 0 !== t[e] || delete t[e];
            var n = "B3978D054A72A7002063637CCDF6B2E5" + u(t);
            return crypto_js.MD5(n).toString()
        }
// e = {
//     "ts": 1736081714694,
//     "pageNo": 4,
//     "pageSize": 10,
//     "total": 777,
//     "type": "12",
//     "timeType": "0"
// }
// console.log(d(e))
