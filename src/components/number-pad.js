import React from 'react';
import { connect } from 'react-redux';
import { operation } from '../actions/index';

// const numbers = [0,1,2,3,4,5,6,7,8,9];
const numbers = [
    7, 8, 9,
    4, 5, 6,
    1, 2, 3,
    0,
];

const NumberPad = ({ operation }) => {
    return <div className="number-pad">
        {numbers.map(number =>
            <button
                key={number}
                onClick={ () => { operation('push', number); }}
                type="button"
            >{number}</button>)
        }
    </div>;
}

export default connect(null, { operation })(NumberPad);
