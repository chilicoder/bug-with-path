module.exports = function (postfix) {
    var result = process.cwd()+postfix;
    return result;
};