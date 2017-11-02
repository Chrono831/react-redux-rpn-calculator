import React from 'react';
import { connect } from 'react-redux';

import Operations from './operations';
import NumberPad from './number-pad';

import { operation } from '../actions/index';

const Controls = (props) =>
    <div>
        <Operations />
        <button type="button" onClick={e => props.operation('dup')}>Dup</button>
        <button type="button" onClick={e => props.operation('clear')}>Clear</button>
        <button type="button" onClick={e => props.operation('pop')}>←Pop</button>
        <NumberPad/>
    </div>;

export default connect( null, { operation })(Controls);
