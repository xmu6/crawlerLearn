const cryptoJS = require('crypto-js');

function c(n) {
    return cryptoJS.MD5(n).toString();
}

function getMessageId() {


    function M(n) {
        for (var e = [8, 13, 18, 23], t = 0; t < e.length; t++)
            n = n.slice(0, e[t]) + "-" + n.slice(e[t]);
        return n;
    }

    function H() {
        for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = [], t = "0123456789abcdef", r = 0; r < 36; r++) {
            var o = Math.floor(16 * Math.random());
            e[r] = t.substring(o, o + 1);
        }
        e[14] = "4";
        var u = 3 & Number(e[19]) | 8;
        e[19] = t.substring(u, u + 1),
            e[8] = e[13] = e[18] = e[23] = "-";
        var i = e.join("")
            , a = M(c(i + new Date().getTime() + n));
        return a;
    }

    var r = "";
    I = (0, H)(r)
    return I;
}

function R(n, e, t, r, o, u, i, a, s, f) {
    var d = "987EBBF8450544D7A52D5539DF9A92A2"
        , l = "";
    return l = "AppVersion=".concat(u, "Channel=").concat(i, "ClientType=").concat(o, "DeviceManufacture=").concat(t, "DeviceModel=").concat(r, "MessageId=").concat(a, "OsVersion=").concat(e, "Timestamp=").concat(n, "AppKey=").concat(d, "Url=").concat(f),
        l = c(l.replace(/\s*/g, "")).substring(4, 28).toLocaleUpperCase();
}

function getSignature() {
    var t = {
            AppVersion: "3.3.5",
            Channel: "bdw",
            ClientType: "5",
            DeviceManufacture: "devtools",
            DeviceModel: "iPhone 12/13 (Pro)",
            MessageId: getMessageId(),
            OsVersion: "iOS 10.0.1",
        }
        ,
        o = t.OsVersion
        , u = t.DeviceManufacture
        , i = t.DeviceModel
        , c = t.ClientType
        , a = t.AppVersion
        , f = t.Channel
        , d = t.MessageId
        , p = undefined,
        n = Date.now(),
        url = "https://api.betterwood.com/base/app/store/listV2"
    signature = R(n, o, u, i, c, a, f, d, p, encodeURIComponent(url.split("betterwood.com")[1].split("?")[0]));
    return [signature, n];
}


console.log(getMessageId())
console.log(getSignature())
