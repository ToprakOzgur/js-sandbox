function isValid(s: string): boolean {

    const input = s.split("");
    const stack: string[] = [];


    for (const parentheses of input) {
        if (parentheses === "(")
            stack.push(")");
        else if (parentheses === "{")
            stack.push("}");
        else if (parentheses === "[")
            stack.push("]");
        else if (stack.length === 0 || parentheses !== stack.pop())
            return false
    }

    if (stack.length === 0) return true;
    return false;
};
console.log(isValid("()[]{}"));
