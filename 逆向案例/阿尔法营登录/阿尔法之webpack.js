require("./env")
require("./loader")

// console.log(window.loader)
function p(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};

function get_s(user, pwd) {
    c = p(window.loader(141))
    s = `/WebApi/Users/Login?username=${user}&password=${pwd}DUE$DEHFYE(YRUEHD*&`
    return c.default(s)
}
