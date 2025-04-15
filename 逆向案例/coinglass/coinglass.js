require("./env")
require("./loader")
require("./jsonp")


var Yt = function (t, e) {
    $t = window.loader(81354)
    Wt = window.loader(27885)
    var n = function (t) {
        var e, n = Wt.ZP.inflate(new Uint8Array(t.match(/[\da-f]{2}/gi).map((function (t) {
                return parseInt(t, 16)
            }
        )))), r = "", i = 16384;
        for (e = 0; e < n.length / i; e++)
            r += String.fromCharCode.apply(null, n.slice(e * i, (e + 1) * i));
        return r += String.fromCharCode.apply(null, n.slice(e * i)),
            decodeURIComponent(escape(r))
    }($t.AES.decrypt(t, $t.enc.Utf8.parse(e), {
        mode: $t.mode.ECB,
        padding: $t.pad.Pkcs7
    }).toString($t.enc.Hex));
    return '"' == n.charAt(0) && (n = n.substring(1, n.length)),
    '"' == n.charAt(n.length - 1) && (n = n.substring(0, n.length - 1)),
        n
};

function decrypt_data(data, user){
    n = "Y29pbmdsYXNzL2Fw";
    n = Yt(user, n);
    return Yt(data, n);
}