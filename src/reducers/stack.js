export const stack = (state = [], action) => {
    console.log(state, action);

    const stackOp = (stackFunc) => ( stackFunc(state.stack) );

    switch (action.type) {
        case 'clear':
            return stackOp(() => []);
        case 'dup':{
            return stackOp(([a,...rest]) => [a, a, ...rest]);
        }
        case 'pop':{
            return stackOp(([a,...rest]) => [...rest]);
        }
        case 'pushValue':
            return stackOp(([...rest]) => [action.value, ...rest]);
        case 'stackOp':
            switch(action.operation){
                case 'add': {
                    return stackOp( ([a,b, ...rest]) => [a+b, ...rest] );
                }
                case 'subtract': {
                    return stackOp( ([a,b, ...rest]) => [a-b, ...rest] );
                }
                case 'multiply': {
                    return stackOp( ([a,b, ...rest]) => [a*b, ...rest] );
                }
                case 'divide': {
                    return stackOp( ([a,b, ...rest]) => [a/b, ...rest] );
                }
            }
    }
    return state;
};
