import React from 'react';
import { connect } from 'react-redux';

const Operations = ({operation}) => {

    return <div>  
        <button type="button" onClick={() => operation('add')}>+</button>
        <button type="button" onClick={() => operation('subtract')}>-</button>
    </div>;
}

export default connect(null,{
    operation : (operation) => ({
        type: 'stackOp',
        operation,
    })
})(Operations);