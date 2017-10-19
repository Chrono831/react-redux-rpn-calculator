import React from 'react';
import { connect } from 'react-redux';

const NumberPad = ({pushValue}) => {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    return <div>
        {numbers.map(number => <button key={number} onClick={ ()=> { pushValue(number); }} type="button">{number}</button>)}
    </div>;
}

export default connect(null, { 
    pushValue : (number) => ({
        type: 'pushValue',
        value: number,
    })
})(NumberPad);
