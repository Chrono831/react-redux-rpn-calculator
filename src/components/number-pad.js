import React from 'react';
import { connect } from 'react-redux';
import { operation } from '../actions/index';

const actions = {
  operation,
};

const NumberPad = ({ operation }) => {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    return <div>
        {numbers.map(number =>
            <button
                key={number}
                onClick={ ()=> { operation('push', number); }}
                type="button"
            >{number}</button>)
        }
    </div>;
}

export default connect(null, actions)(NumberPad);
