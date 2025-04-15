require("./env.js")
require("./loader.js")
require("./mod1")
require("./mod2")

function v(e, A) {
    var n, f, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), v = [];
    if (A = A || t.length,
        e)
        for (n = 0; n < e; n++)
            v[n] = t[0 | Math.random() * A];
    else
        for (v[8] = v[13] = v[18] = v[23] = "-",
                 v[14] = "4",
                 n = 0; n < 36; n++)
            v[n] || (f = 0 | 16 * Math.random(),
                v[n] = t[19 == n ? 3 & f | 8 : f]);
    return v.join("")
};

function g() {
    return u = v(16, 61),
        u
}

A = g()

function a(e, A, f) {
    var t = window.loader("8060").sm2;
    if (A) {
        var v = t.doEncrypt(e, A, f);
        return v
    }
    return ""
};
publicKey = process.argv[2]

n = a(A, publicKey, 1)
console.log(n)