// fs模块 用于操作文件的读写
// @babel/parser 用于将JavaScript代码转换为ast树
// @babel/traverse 用于遍历各个节点的函数
// @babel/types 节点的类型判断及构造等操作
// @babel/generator 将处理完毕的AST转换成JavaScript源代码
const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;


// 混淆的js代码文件
const encode_file = "./encode.js"
// 反混淆的js代码文件
const decode_file = "./decode.js"

// 读取混淆的js文件
let jsCode = fs.readFileSync(encode_file, {encoding: "utf-8"});
// 将javascript代码转换为ast树
let ast = parser.parse(jsCode)



// todo 编写ast插件
const visitor = {

}



// 调用插件,处理混淆的代码
traverse(ast,visitor)

// 将处理后的ast转换为js代码(反混淆后的代码)
let {code} = generator(ast);
// 保存代码
fs.writeFile('decode.js', code, (err)=>{});