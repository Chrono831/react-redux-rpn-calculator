import React from 'react';
import { connect } from 'react-redux';

const Operations = ({operation}) => {

    return <div>  
        <button type="button" onClick={() => operation('add')}>+</button>
        <button type="button" onClick={() => operation('subtract')}>-</button>
        <button type="button" onClick={() => operation('multiply')}>x</button>
        <button type="button" onClick={() => operation('divide')}>/</button>
    </div>;
}

export default connect(null,{
    operation : (operation) => ({
        type: 'stackOp',
        operation,
    })
})(Operations);
