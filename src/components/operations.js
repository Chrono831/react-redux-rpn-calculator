import React from 'react';
import { connect } from 'react-redux';
import { operation } from '../actions/index';
const actions = {
  operation,
};

const Operations = ({operation}) => {

    return <div>
        <button type="button" onClick={() => operation('add')}>+</button>
        <button type="button" onClick={() => operation('subtract')}>-</button>
        <button type="button" onClick={() => operation('multiply')}>x</button>
        <button type="button" onClick={() => operation('divide')}>/</button>
    </div>;
};

export default connect(null, actions)(Operations);
