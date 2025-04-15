function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

//导出
module.exports = {
    add,
    multiply
};
//或者
//exports.add = add;
//exports.multiply = multiply;

module.exports = {
    add: add,
    multiply: multiply
};
