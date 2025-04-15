require('./env')
require('./mod1');
require('./mod2');
require('./loader');

cipher_IPC_key = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4D6i0oD/Ga5qb//RfSe8MrPVIrMIGecCxkcGWGj9kxxk74qQNq8XUuXoy2PczQ30BpiRHrlkbtBEPeWLpq85tfubTUjhBz1NPNvWrC88uaYVGvzNpgzZOqDC35961uPTuvdUa8vztcUQjEZy16WbmetRjURFIiWJgFCmemyYVbQIDAQAB-----END PUBLIC KEY-----"
cipher_NVR_key = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6jsSvQoIXMDZzGvlchWD+g2YcIMH8GqcWQj/efEySFswD07o85hj1xaO5Nlj9OAGuidtBhnUvUMuytfeYkXKAiDX6EcIYIaq1YAYU/MiA52ZXptKgcy/6Xe9C5ludLUoKAPCURqMwmMhIFy2uL8HyeoI3HsIRfagQUMcBMrtZQQIDAQAB-----END PUBLIC KEY-----"

info = process.argv[2]
info = JSON.parse(info)
nonce = info.nonce
key = decodeURIComponent(info.key)
old_pwd = info.old_pwd
new_pwd = info.new_pwd

dm = window.loader(53218)
g = (e, t) => (0,
    dm.b5)({
    md5Password: "md5" === "md5" ? (0,
        dm.Ay)(e) : (0,
        dm.TZ)(e),
    authParams: {
        encrypt_type: ["2"],
        nonce: nonce,
        key: key
    }
}, t);
ON = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4D6i0oD/Ga5qb//RfSe8MrPVIrMIGecCxkcGWGj9kxxk74qQNq8XUuXoy2PczQ30BpiRHrlkbtBEPeWLpq85tfubTUjhBz1NPNvWrC88uaYVGvzNpgzZOqDC35961uPTuvdUa8vztcUQjEZy16WbmetRjURFIiWJgFCmemyYVbQIDAQAB-----END PUBLIC KEY-----"
console.log('old_pwd:::'+encodeURIComponent(g(old_pwd, false))+':::')
console.log('new_pwd:::'+encodeURIComponent(g(new_pwd, true))+':::')
console.log('cipher_IPC:::'+encodeURIComponent(dm.nJ(old_pwd, "ipc" === "ipc" ? ON : "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6jsSvQoIXMDZzGvlchWD+g2YcIMH8GqcWQj/efEySFswD07o85hj1xaO5Nlj9OAGuidtBhnUvUMuytfeYkXKAiDX6EcIYIaq1YAYU/MiA52ZXptKgcy/6Xe9C5ludLUoKAPCURqMwmMhIFy2uL8HyeoI3HsIRfagQUMcBMrtZQQIDAQAB-----END PUBLIC KEY-----"))+':::')

