require("./env")
require("./source")

// test
// colorParamSign = {
//     "appid": "search-pc-java",
//     "functionId": "pc_search_s_new",
//     "client": "pc",
//     "clientVersion": "1.0.0",
//     "t": 1737965133433,
//     "body": "87cce2fefcc47d73bea46f706e50984fae168daef678e6766361c2e54e59c513"
// }
// console.log(JSON.stringify(colorParamSign))
// {"appid":"search-pc-java","functionId":"pc_search_s_new","client":"pc","clientVersion":"1.0.0","t":1737965133433,"body":"87cce2fefcc47d73bea46f706e50984fae168daef678e6766361c2e54e59c513"}



let jsonData = __process.argv[2]
colorParamSign = JSON.parse(jsonData)
window.PSign.sign(colorParamSign).then(function(res){
    console.log(':::' + res.h5st + ':::');
    __process.exit()
})