export const pushValue = (number) => ({
    type: 'pushValue',
    value: number,
});

export const dupTop = () => ({
    type: 'dup',
});

export const clear = () => ({
    type: 'clear',
});
export const pop = () => ({
    type: 'pop',
});

export const operation = (operation) => ({
    type: 'stackOp',
    operation,
});
