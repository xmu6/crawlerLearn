t = {
    rotl: function (e, t) {
        return e << t | e >>> 32 - t
    },
    rotr: function (e, t) {
        return e << 32 - t | e >>> t
    },
    endian: function (e) {
        if (e.constructor == Number)
            return 16711935 & t.rotl(e, 8) | 4278255360 & t.rotl(e, 24);
        for (var r = 0; r < e.length; r++)
            e[r] = t.endian(e[r]);
        return e
    },
    randomBytes: function (e) {
        for (var t = []; e > 0; e--)
            t.push(Math.floor(256 * Math.random()));
        return t
    },
    bytesToWords: function (e) {
        for (var t = [], r = 0, n = 0; r < e.length; r++,
            n += 8)
            t[n >>> 5] |= e[r] << 24 - n % 32;
        return t
    },
    wordsToBytes: function (e) {
        for (var t = [], r = 0; r < 32 * e.length; r += 8)
            t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
        return t
    },
    bytesToHex: function (e) {
        for (var t = [], r = 0; r < e.length; r++)
            t.push((e[r] >>> 4).toString(16)),
                t.push((15 & e[r]).toString(16));
        return t.join("")
    },
    hexToBytes: function (e) {
        for (var t = [], r = 0; r < e.length; r += 2)
            t.push(parseInt(e.substr(r, 2), 16));
        return t
    },
    bytesToBase64: function (t) {
        for (var r = [], n = 0; n < t.length; n += 3)
            for (var o = t[n] << 16 | t[n + 1] << 8 | t[n + 2], i = 0; i < 4; i++)
                8 * n + 6 * i <= 8 * t.length ? r.push(e.charAt(o >>> 6 * (3 - i) & 63)) : r.push("=");
        return r.join("")
    },
    base64ToBytes: function (t) {
        t = t.replace(/[^A-Z0-9+\/]/gi, "");
        for (var r = [], n = 0, o = 0; n < t.length; o = ++n % 4)
            0 != o && r.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | e.indexOf(t.charAt(n)) >>> 6 - 2 * o);
        return r
    }
}

wordsToBytes = function (e) {
    for (var t = [], r = 0; r < 32 * e.length; r += 8)
        t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
    return t;
}

bytesToHex = function (e) {
    for (var t = [], r = 0; r < e.length; r++)
        t.push((e[r] >>> 4).toString(16)),
            t.push((15 & e[r]).toString(16));
    return t.join("");
}
stringToBytes = function (e) {
    return stringToBytes2(unescape(encodeURIComponent(e)))
}
stringToBytes2 = function (e) {
    for (var t = [], r = 0; r < e.length; r++)
        t.push(255 & e.charCodeAt(r));
    return t
}
bytesToWords = function (e) {
    for (var t = [], r = 0, n = 0; r < e.length; r++,
        n += 8)
        t[n >>> 5] |= e[r] << 24 - n % 32;
    return t
}
endian = function (e) {
    if (e.constructor == Number)
        return 16711935 & t.rotl(e, 8) | 4278255360 & t.rotl(e, 24);
    for (var r = 0; r < e.length; r++)
        e[r] = t.endian(e[r]);
    return e
}

// o函数
o = function o(i, a) {
    i.constructor == String ? i = a && "binary" === a.encoding ? n.stringToBytes(i) : stringToBytes(i) : r(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || i.constructor === Uint8Array || (i = i.toString());
    for (var u = bytesToWords(i), s = 8 * i.length, c = 1732584193, l = -271733879, f = -1732584194, d = 271733878, p = 0; p < u.length; p++)
        u[p] = 16711935 & (u[p] << 8 | u[p] >>> 24) | 4278255360 & (u[p] << 24 | u[p] >>> 8);
    u[s >>> 5] |= 128 << s % 32,
        u[14 + (s + 64 >>> 9 << 4)] = s;
    var h = o._ff
        , v = o._gg
        , y = o._hh
        , b = o._ii;
    for (p = 0; p < u.length; p += 16) {
        var m = c
            , w = l
            , g = f
            , x = d;
        c = h(c, l, f, d, u[p + 0], 7, -680876936),
            d = h(d, c, l, f, u[p + 1], 12, -389564586),
            f = h(f, d, c, l, u[p + 2], 17, 606105819),
            l = h(l, f, d, c, u[p + 3], 22, -1044525330),
            c = h(c, l, f, d, u[p + 4], 7, -176418897),
            d = h(d, c, l, f, u[p + 5], 12, 1200080426),
            f = h(f, d, c, l, u[p + 6], 17, -1473231341),
            l = h(l, f, d, c, u[p + 7], 22, -45705983),
            c = h(c, l, f, d, u[p + 8], 7, 1770035416),
            d = h(d, c, l, f, u[p + 9], 12, -1958414417),
            f = h(f, d, c, l, u[p + 10], 17, -42063),
            l = h(l, f, d, c, u[p + 11], 22, -1990404162),
            c = h(c, l, f, d, u[p + 12], 7, 1804603682),
            d = h(d, c, l, f, u[p + 13], 12, -40341101),
            f = h(f, d, c, l, u[p + 14], 17, -1502002290),
            c = v(c, l = h(l, f, d, c, u[p + 15], 22, 1236535329), f, d, u[p + 1], 5, -165796510),
            d = v(d, c, l, f, u[p + 6], 9, -1069501632),
            f = v(f, d, c, l, u[p + 11], 14, 643717713),
            l = v(l, f, d, c, u[p + 0], 20, -373897302),
            c = v(c, l, f, d, u[p + 5], 5, -701558691),
            d = v(d, c, l, f, u[p + 10], 9, 38016083),
            f = v(f, d, c, l, u[p + 15], 14, -660478335),
            l = v(l, f, d, c, u[p + 4], 20, -405537848),
            c = v(c, l, f, d, u[p + 9], 5, 568446438),
            d = v(d, c, l, f, u[p + 14], 9, -1019803690),
            f = v(f, d, c, l, u[p + 3], 14, -187363961),
            l = v(l, f, d, c, u[p + 8], 20, 1163531501),
            c = v(c, l, f, d, u[p + 13], 5, -1444681467),
            d = v(d, c, l, f, u[p + 2], 9, -51403784),
            f = v(f, d, c, l, u[p + 7], 14, 1735328473),
            c = y(c, l = v(l, f, d, c, u[p + 12], 20, -1926607734), f, d, u[p + 5], 4, -378558),
            d = y(d, c, l, f, u[p + 8], 11, -2022574463),
            f = y(f, d, c, l, u[p + 11], 16, 1839030562),
            l = y(l, f, d, c, u[p + 14], 23, -35309556),
            c = y(c, l, f, d, u[p + 1], 4, -1530992060),
            d = y(d, c, l, f, u[p + 4], 11, 1272893353),
            f = y(f, d, c, l, u[p + 7], 16, -155497632),
            l = y(l, f, d, c, u[p + 10], 23, -1094730640),
            c = y(c, l, f, d, u[p + 13], 4, 681279174),
            d = y(d, c, l, f, u[p + 0], 11, -358537222),
            f = y(f, d, c, l, u[p + 3], 16, -722521979),
            l = y(l, f, d, c, u[p + 6], 23, 76029189),
            c = y(c, l, f, d, u[p + 9], 4, -640364487),
            d = y(d, c, l, f, u[p + 12], 11, -421815835),
            f = y(f, d, c, l, u[p + 15], 16, 530742520),
            c = b(c, l = y(l, f, d, c, u[p + 2], 23, -995338651), f, d, u[p + 0], 6, -198630844),
            d = b(d, c, l, f, u[p + 7], 10, 1126891415),
            f = b(f, d, c, l, u[p + 14], 15, -1416354905),
            l = b(l, f, d, c, u[p + 5], 21, -57434055),
            c = b(c, l, f, d, u[p + 12], 6, 1700485571),
            d = b(d, c, l, f, u[p + 3], 10, -1894986606),
            f = b(f, d, c, l, u[p + 10], 15, -1051523),
            l = b(l, f, d, c, u[p + 1], 21, -2054922799),
            c = b(c, l, f, d, u[p + 8], 6, 1873313359),
            d = b(d, c, l, f, u[p + 15], 10, -30611744),
            f = b(f, d, c, l, u[p + 6], 15, -1560198380),
            l = b(l, f, d, c, u[p + 13], 21, 1309151649),
            c = b(c, l, f, d, u[p + 4], 6, -145523070),
            d = b(d, c, l, f, u[p + 11], 10, -1120210379),
            f = b(f, d, c, l, u[p + 2], 15, 718787259),
            l = b(l, f, d, c, u[p + 9], 21, -343485551),
            c = c + m >>> 0,
            l = l + w >>> 0,
            f = f + g >>> 0,
            d = d + x >>> 0
    }
    return endian([c, l, f, d])
};
o._ff = function (e, t, r, n, o, i, a) {
    var u = e + (t & r | ~t & n) + (o >>> 0) + a;
    return (u << i | u >>> 32 - i) + t
};
o._gg = function (e, t, r, n, o, i, a) {
    var u = e + (t & n | r & ~n) + (o >>> 0) + a;
    return (u << i | u >>> 32 - i) + t
};
o._hh = function (e, t, r, n, o, i, a) {
    var u = e + (t ^ r ^ n) + (o >>> 0) + a;
    return (u << i | u >>> 32 - i) + t
};
o._ii = function (e, t, r, n, o, i, a) {
    var u = e + (r ^ (t | ~n)) + (o >>> 0) + a;
    return (u << i | u >>> 32 - i) + t
};


function at(t, r) {
    if (null == t)
        throw new Error("Illegal argument " + t);
    var i = wordsToBytes(o(t, r));
    return bytesToHex(i)
}

function get_rid(e) {

    for (var a = (tt = '7cd084941338484aae1ad9425b84077c4932caff0ff746eab6f01bf08b70ac45',
        r = [],
        [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52].forEach((function (e) {
                tt.charAt(e) && r.push(tt.charAt(e))
            }
        )),
        r.join("").slice(0, 32)), u = Math.round(Date.now() / 1e3), s = Object.assign({}, e, {
        wts: u
    }), c = Object.keys(s).sort(), l = [], f = /[!'()*]/g, d = 0; d < c.length; d++) {
        var p = c[d]
            , h = s[p];
        h && "string" == typeof h && (h = h.replace(f, "")),
        null != h && l.push("".concat(encodeURIComponent(p), "=").concat(encodeURIComponent(h)))
    }
    var v = l.join("&");
    w_rid = at(v + a)
    return [w_rid, u]
}
// w_rid, wts = get_rid()










