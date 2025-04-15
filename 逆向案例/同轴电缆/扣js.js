
r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$"

function compress (e, t, r) {
                    if (null == e)
                        return "";
                    var n, o, i, a = {}, s = {}, u = "", l = "", c = "", f = 2, d = 3, p = 2, g = [], h = 0, v = 0;
                    for (i = 0; i < e.length; i += 1)
                        if (u = e.charAt(i),
                        Object.prototype.hasOwnProperty.call(a, u) || (a[u] = d++,
                        s[u] = !0),
                        l = c + u,
                        Object.prototype.hasOwnProperty.call(a, l))
                            c = l;
                        else {
                            if (Object.prototype.hasOwnProperty.call(s, c)) {
                                if (256 > c.charCodeAt(0)) {
                                    for (n = 0; n < p; n++)
                                        h <<= 1,
                                        v == t - 1 ? (v = 0,
                                        g.push(r(h)),
                                        h = 0) : v++;
                                    for (n = 0,
                                    o = c.charCodeAt(0); n < 8; n++)
                                        h = h << 1 | 1 & o,
                                        v == t - 1 ? (v = 0,
                                        g.push(r(h)),
                                        h = 0) : v++,
                                        o >>= 1
                                } else {
                                    for (n = 0,
                                    o = 1; n < p; n++)
                                        h = h << 1 | o,
                                        v == t - 1 ? (v = 0,
                                        g.push(r(h)),
                                        h = 0) : v++,
                                        o = 0;
                                    for (n = 0,
                                    o = c.charCodeAt(0); n < 16; n++)
                                        h = h << 1 | 1 & o,
                                        v == t - 1 ? (v = 0,
                                        g.push(r(h)),
                                        h = 0) : v++,
                                        o >>= 1
                                }
                                0 == --f && (f = Math.pow(2, p),
                                p++),
                                delete s[c]
                            } else
                                for (n = 0,
                                o = a[c]; n < p; n++)
                                    h = h << 1 | 1 & o,
                                    v == t - 1 ? (v = 0,
                                    g.push(r(h)),
                                    h = 0) : v++,
                                    o >>= 1;
                            0 == --f && (f = Math.pow(2, p),
                            p++),
                            a[l] = d++,
                            c = String(u)
                        }
                    if ("" !== c) {
                        if (Object.prototype.hasOwnProperty.call(s, c)) {
                            if (256 > c.charCodeAt(0)) {
                                for (n = 0; n < p; n++)
                                    h <<= 1,
                                    v == t - 1 ? (v = 0,
                                    g.push(r(h)),
                                    h = 0) : v++;
                                for (n = 0,
                                o = c.charCodeAt(0); n < 8; n++)
                                    h = h << 1 | 1 & o,
                                    v == t - 1 ? (v = 0,
                                    g.push(r(h)),
                                    h = 0) : v++,
                                    o >>= 1
                            } else {
                                for (n = 0,
                                o = 1; n < p; n++)
                                    h = h << 1 | o,
                                    v == t - 1 ? (v = 0,
                                    g.push(r(h)),
                                    h = 0) : v++,
                                    o = 0;
                                for (n = 0,
                                o = c.charCodeAt(0); n < 16; n++)
                                    h = h << 1 | 1 & o,
                                    v == t - 1 ? (v = 0,
                                    g.push(r(h)),
                                    h = 0) : v++,
                                    o >>= 1
                            }
                            0 == --f && (f = Math.pow(2, p),
                            p++),
                            delete s[c]
                        } else
                            for (n = 0,
                            o = a[c]; n < p; n++)
                                h = h << 1 | 1 & o,
                                v == t - 1 ? (v = 0,
                                g.push(r(h)),
                                h = 0) : v++,
                                o >>= 1;
                        0 == --f && (f = Math.pow(2, p),
                        p++)
                    }
                    for (n = 0,
                    o = 2; n < p; n++)
                        h = h << 1 | 1 & o,
                        v == t - 1 ? (v = 0,
                        g.push(r(h)),
                        h = 0) : v++,
                        o >>= 1;
                    for (; ; ) {
                        if (h <<= 1,
                        v == t - 1) {
                            g.push(r(h));
                            break
                        }
                        v++
                    }
                    return g.join("")
                }


function compressToEncodedURIComponent(e) {
                    return null == e ? "" : compress(e, 6, function(e) {
                        return r.charAt(e)
                    })
                };


e = "{\"5\":{\"p\":13,\"pp\":25}}"
console.log(compressToEncodedURIComponent(e))