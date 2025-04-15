require("./env")
require('./jsonp')
require("./loader")
cryptoJS = require("crypto-js")

function get_s(page, key) {
    d = window.loader('9816')

    function w(A) {
        var e, t, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = "=";
        for (e = 0; e + 3 <= A.length; e += 3)
            t = parseInt(A.substring(e, e + 3), 16),
                n += r.charAt(t >> 6) + r.charAt(63 & t);
        e + 1 == A.length ? (t = parseInt(A.substring(e, e + 1), 16),
            n += r.charAt(t << 2)) : e + 2 == A.length && (t = parseInt(A.substring(e, e + 2), 16),
            n += r.charAt(t >> 2) + r.charAt((3 & t) << 4));
        while ((3 & n.length) > 0)
            n += a;
        return n
    }

    d["a"].prototype.encryptLong = function (A) {
        var e = this.getKey()
            , t = (e.n.bitLength() + 7 >> 3) - 11;
        try {
            var n = ""
                , r = "";
            if (A.length > t)
                return n = A.match(/.{1,50}/g),
                    n.forEach((function (A) {
                            var t = e.encrypt(A);
                            r += t
                        }
                    )),
                    w(r);
            var a = e.encrypt(A)
                , s = w(a);
            return s
        } catch (i) {
            return i
        }
    }
    t = new d["a"]
    r = key
    function v(A, e) {
        var t = Object.keys(A);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(A);
            e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable
                }
            ))),
                t.push.apply(t, n)
        }
        return t
    }

    function m(A) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? v(Object(t), !0).forEach((function (e) {
                    b(A, e, t[e])
                }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach((function (e) {
                    Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
                }
            ))
        }
        return A
    };

    function b(A, e, t) {
        return e in A ? Object.defineProperty(A, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : A[e] = t,
            A
    }

    e = {
        "inviteMethod": "",
        "businessClassfication": "",
        "mc": "",
        "lx": "ZBGG",
        "dwmc": "",
        "pageIndex": page
    }

    t.setPublicKey(r)
    a = m(m({}, e), {}, {
        sign: cryptoJS.MD5(JSON.stringify(e)).toString(),
        timeStamp: +new Date
    })

    return s = t.encryptLong(JSON.stringify(a))
}

console.log(get_s(1, 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjWsQ0+GT6cTMJRHGKheINPA7ASyhUfR0iXw9LfcQWLW2tJNeCDTbTP1X8bZM8m9XHdZuVKnH8P5tTGke3zmbOFZdQd91905cCqx9UzRanXpBnLP+QKuaObl85f6EcDoJNCiGllaed3PsBURPQw5dgVToIL0JAaR9cYFNNmY7RPQIDAQAB'))