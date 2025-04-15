!function() {
    "use strict";
    var e, t, c, n, a, r, f, s, i = {}, u = {};
    function d(e) {
        var t = u[e];
        if (void 0 !== t)
            return t.exports;
        var c = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
        }
          , n = !0;
        try {
            i[e].call(c.exports, c, c.exports, d),
            n = !1
        } finally {
            n && delete u[e]
        }
        return c.loaded = !0,
        c.exports
    }
    window.loader = d
    d.m = i,
    e = [],
    d.O = function(t, c, n, a) {
        if (!c) {
            var r = 1 / 0;
            for (u = 0; u < e.length; u++) {
                c = e[u][0],
                n = e[u][1],
                a = e[u][2];
                for (var f = !0, s = 0; s < c.length; s++)
                    (!1 & a || r >= a) && Object.keys(d.O).every((function(e) {
                        return d.O[e](c[s])
                    }
                    )) ? c.splice(s--, 1) : (f = !1,
                    a < r && (r = a));
                if (f) {
                    e.splice(u--, 1);
                    var i = n();
                    void 0 !== i && (t = i)
                }
            }
            return t
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--)
            e[u] = e[u - 1];
        e[u] = [c, n, a]
    }
    ,
    d.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return d.d(t, {
            a: t
        }),
        t
    }
    ,
    c = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    d.t = function(e, n) {
        if (1 & n && (e = this(e)),
        8 & n)
            return e;
        if ("object" == typeof e && e) {
            if (4 & n && e.__esModule)
                return e;
            if (16 & n && "function" == typeof e.then)
                return e
        }
        var a = Object.create(null);
        d.r(a);
        var r = {};
        t = t || [null, c({}), c([]), c(c)];
        for (var f = 2 & n && e; "object" == typeof f && !~t.indexOf(f); f = c(f))
            Object.getOwnPropertyNames(f).forEach((function(t) {
                r[t] = function() {
                    return e[t]
                }
            }
            ));
        return r.default = function() {
            return e
        }
        ,
        d.d(a, r),
        a
    }
    ,
    d.d = function(e, t) {
        for (var c in t)
            d.o(t, c) && !d.o(e, c) && Object.defineProperty(e, c, {
                enumerable: !0,
                get: t[c]
            })
    }
    ,
    d.f = {},
    d.e = function(e) {
        return Promise.all(Object.keys(d.f).reduce((function(t, c) {
            return d.f[c](e, t),
            t
        }
        ), []))
    }
    ,
    d.u = function(e) {
        return 5772 === e ? "static/chunks/5772-2c940211728156eb.js" : 568 === e ? "static/chunks/568-fe905c72faf2cf22.js" : 1864 === e ? "static/chunks/1864-0ed94ac573ffd168.js" : 3638 === e ? "static/chunks/3638-91ee8531f0795bbe.js" : 4267 === e ? "static/chunks/4267-0c0ab47633f074a9.js" : 4749 === e ? "static/chunks/4749-d9bc43a6aa832700.js" : 2068 === e ? "static/chunks/2068-74061ca15043f7e7.js" : 1116 === e ? "static/chunks/1116-fca6719257230af2.js" : 2307 === e ? "static/chunks/2307-aa1c3bfc9b82d495.js" : 1216 === e ? "static/chunks/1216-856436a3d5fe58e2.js" : 4328 === e ? "static/chunks/4328-69a785da3b5aa253.js" : 6268 === e ? "static/chunks/6268-8d6c4db2e9d4dc40.js" : 5633 === e ? "static/chunks/5633-91e5f9d1ed89d933.js" : 7204 === e ? "static/chunks/7204-3914b3b4fcfade81.js" : 2062 === e ? "static/chunks/2062-4ade2eae8699621b.js" : 5798 === e ? "static/chunks/5798-f4f0b20103268332.js" : 5584 === e ? "static/chunks/5584-ef2793b12f8e0bb4.js" : 1314 === e ? "static/chunks/1314-eb50aa7555b0c97e.js" : 5607 === e ? "static/chunks/5607-4d09909f4610cec1.js" : 6337 === e ? "static/chunks/6337-1a845c25e1ff46cf.js" : 758 === e ? "static/chunks/758-607b69c2f3ceebb0.js" : 3219 === e ? "static/chunks/3219-91090441fab329e7.js" : 5867 === e ? "static/chunks/5867-09e9e564628d21c6.js" : 793 === e ? "static/chunks/793-062fc70a2a87055c.js" : 7284 === e ? "static/chunks/7284-81316788b65f2bba.js" : 6782 === e ? "static/chunks/6782-e5b664d596b2e8f6.js" : 5455 === e ? "static/chunks/5455-c1db2d6735acc789.js" : 8213 === e ? "static/chunks/8213-623335d49a497743.js" : 3955 === e ? "static/chunks/3955-4a1d67df98cd10b6.js" : 5846 === e ? "static/chunks/5846-bd1922d58f750013.js" : 4220 === e ? "static/chunks/4220-eb9a1d311633ea99.js" : 4006 === e ? "static/chunks/4006-05d0747677682e6d.js" : "static/chunks/" + e + "." + {
            1: "ab0cfef0f310a7a5",
            316: "f1680acb26758aa2",
            795: "1b755315752b0e5b",
            1277: "9491b533fd998f28",
            1758: "e965a30df407d7e2",
            1765: "ab3aadcef5af452c",
            2217: "3336e4ff4249dcf2",
            2263: "3fd2674f484d0ac5",
            2513: "f1e79bec2c80a936",
            3052: "1452e68de8f24fc7",
            3092: "1bc40d9c17ed4b96",
            3644: "714801bc2e13a6b7",
            3678: "fb14635c5dfadbf8",
            3961: "5f3b9b4d0b4e25b1",
            4093: "2bad55b1eff7f523",
            4118: "c936185c40f46214",
            4140: "9c7afa7d72c816f9",
            4540: "6ea93fdd780988f0",
            4857: "78545cd4f89c90db",
            5494: "84b0cbaeded68863",
            5545: "ba6201a5e63b5cd3",
            5551: "a289be65fed4b33e",
            5662: "d23e62776ca263d3",
            5725: "c1a288cca4f2eccd",
            5734: "b346e19f103e9d6e",
            5813: "884c0a72ae6db059",
            6217: "f1f7ce2cc9110288",
            6394: "8422132466a1826e",
            7190: "8c71b15392fd0610",
            7269: "2df073d1d8945ba2",
            7287: "984326ebf48de141",
            7427: "ea09eb8e17cf3e5f",
            7493: "f3e5155cc80970ee",
            8292: "31e5ac897f18eee6",
            8468: "0f2d6230e1a675bd",
            8526: "2a08b599010a4993",
            8625: "bf10ea36f0f84fdd",
            8670: "3ba449ddd3e6307c",
            8805: "5cfaaecd25738e40",
            8970: "74fbf243c9d40e3c",
            8977: "1e92c05b3ab95bba",
            9160: "2b6d0ab1f9ddbcf1",
            9162: "a1b5782b8eb95046",
            9398: "2238f36f2269a2d6",
            9420: "5ff934b7017fbfeb"
        }[e] + ".js"
    }
    ,
    d.miniCssF = function(e) {
        return "static/css/" + {
            1: "e6c127aa0f9491e1",
            237: "e6c127aa0f9491e1",
            1754: "e6c127aa0f9491e1",
            2690: "e6c127aa0f9491e1",
            2699: "e6c127aa0f9491e1",
            2888: "bb76c7306e89485b",
            3497: "e6c127aa0f9491e1",
            3937: "e6c127aa0f9491e1",
            4393: "e6c127aa0f9491e1",
            4814: "e6c127aa0f9491e1",
            5215: "e6c127aa0f9491e1",
            5405: "e6c127aa0f9491e1",
            5844: "8a64004888a56b39",
            6368: "9dbe5d236a36e7a4",
            6598: "572f85f558327f40",
            7113: "e6c127aa0f9491e1",
            7226: "e6c127aa0f9491e1",
            7386: "e6c127aa0f9491e1",
            8957: "572f85f558327f40"
        }[e] + ".css"
    }
    ,
    d.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    d.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n = {},
    a = "_N_E:",
    d.l = function(e, t, c, r) {
        if (n[e])
            n[e].push(t);
        else {
            var f, s;
            if (void 0 !== c)
                for (var i = document.getElementsByTagName("script"), u = 0; u < i.length; u++) {
                    var o = i[u];
                    if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == a + c) {
                        f = o;
                        break
                    }
                }
            f || (s = !0,
            (f = document.createElement("script")).charset = "utf-8",
            f.timeout = 120,
            d.nc && f.setAttribute("nonce", d.nc),
            f.setAttribute("data-webpack", a + c),
            f.src = d.tu(e)),
            n[e] = [t];
            var b = function(t, c) {
                f.onerror = f.onload = null,
                clearTimeout(l);
                var a = n[e];
                if (delete n[e],
                f.parentNode && f.parentNode.removeChild(f),
                a && a.forEach((function(e) {
                    return e(c)
                }
                )),
                t)
                    return t(c)
            }
              , l = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: f
            }), 12e4);
            f.onerror = b.bind(null, f.onerror),
            f.onload = b.bind(null, f.onload),
            s && document.head.appendChild(f)
        }
    }
    ,
    d.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    d.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    d.tt = function() {
        return void 0 === r && (r = {
            createScriptURL: function(e) {
                return e
            }
        },
        "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (r = trustedTypes.createPolicy("nextjs#bundler", r))),
        r
    }
    ,
    d.tu = function(e) {
        return d.tt().createScriptURL(e)
    }
    ,
    d.p = "https://aws-s3.coinglasscdn.com/cg_v3/_next/",
    f = function(e) {
        return new Promise((function(t, c) {
            var n = d.miniCssF(e)
              , a = d.p + n;
            if (function(e, t) {
                for (var c = document.getElementsByTagName("link"), n = 0; n < c.length; n++) {
                    var a = (f = c[n]).getAttribute("data-href") || f.getAttribute("href");
                    if ("stylesheet" === f.rel && (a === e || a === t))
                        return f
                }
                var r = document.getElementsByTagName("style");
                for (n = 0; n < r.length; n++) {
                    var f;
                    if ((a = (f = r[n]).getAttribute("data-href")) === e || a === t)
                        return f
                }
            }(n, a))
                return t();
            !function(e, t, c, n) {
                var a = document.createElement("link");
                a.rel = "stylesheet",
                a.type = "text/css",
                a.onerror = a.onload = function(r) {
                    if (a.onerror = a.onload = null,
                    "load" === r.type)
                        c();
                    else {
                        var f = r && ("load" === r.type ? "missing" : r.type)
                          , s = r && r.target && r.target.href || t
                          , i = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                        i.code = "CSS_CHUNK_LOAD_FAILED",
                        i.type = f,
                        i.request = s,
                        a.parentNode.removeChild(a),
                        n(i)
                    }
                }
                ,
                a.href = t,
                document.head.appendChild(a)
            }(e, a, t, c)
        }
        ))
    }
    ,
    s = {
        2272: 0
    },
    d.f.miniCss = function(e, t) {
        s[e] ? t.push(s[e]) : 0 !== s[e] && {
            1: 1
        }[e] && t.push(s[e] = f(e).then((function() {
            s[e] = 0
        }
        ), (function(t) {
            throw delete s[e],
            t
        }
        )))
    }
    ,
    function() {
        var e = {
            2272: 0,
            5844: 0
        };
        d.f.j = function(t, c) {
            var n = d.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    c.push(n[2]);
                else if (/^(2272|5844)$/.test(t))
                    e[t] = 0;
                else {
                    var a = new Promise((function(c, a) {
                        n = e[t] = [c, a]
                    }
                    ));
                    c.push(n[2] = a);
                    var r = d.p + d.u(t)
                      , f = new Error;
                    d.l(r, (function(c) {
                        if (d.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var a = c && ("load" === c.type ? "missing" : c.type)
                              , r = c && c.target && c.target.src;
                            f.message = "Loading chunk " + t + " failed.\n(" + a + ": " + r + ")",
                            f.name = "ChunkLoadError",
                            f.type = a,
                            f.request = r,
                            n[1](f)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        d.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, c) {
            var n, a, r = c[0], f = c[1], s = c[2], i = 0;
            if (r.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (n in f)
                    d.o(f, n) && (d.m[n] = f[n]);
                if (s)
                    var u = s(d)
            }
            for (t && t(c); i < r.length; i++)
                a = r[i],
                d.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return d.O(u)
        }
          , c = window.webpackChunk_N_E = window.webpackChunk_N_E || [];
        c.forEach(t.bind(null, 0)),
        c.push = t.bind(null, c.push.bind(c))
    }(),
    d.nc = void 0
}();
