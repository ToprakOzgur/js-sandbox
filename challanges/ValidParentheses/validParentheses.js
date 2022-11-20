function isValid(s) {
    var input = s.split("");
    var stack = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var parentheses = input_1[_i];
        if (parentheses === "(")
            stack.push(")");
        else if (parentheses === "{")
            stack.push("}");
        else if (parentheses === "[")
            stack.push("]");
        else if (stack.length === 0 || parentheses !== stack.pop())
            return false;
    }
    if (stack.length === 0)
        return true;
    return false;
}
;
console.log(isValid("()[]{}}"));
