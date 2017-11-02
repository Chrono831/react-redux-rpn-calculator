const operations = {
    add     : ([a,b, ...rest]) => [a+b, ...rest],
    subtract: ([a,b, ...rest]) => [a-b, ...rest],
    multiply: ([a,b, ...rest]) => [a*b, ...rest],
    divide  : ([a,b, ...rest]) => [a/b, ...rest],

    clear   : () => [],
    dup     : ([a,...rest]) => [a, a, ...rest],
    pop     : ([a,...rest]) => [...rest],

    push    : ([...rest], value) => [value, ...rest],
};

export const stackReducer = (stack = [], action) => {
    console.log(stack, action);

    if (operations.hasOwnProperty(action.type)) {
        return operations[action.type](stack, action.value);
    }

    return stack;
};
