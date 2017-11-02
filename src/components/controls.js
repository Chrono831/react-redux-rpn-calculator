import React from 'react';
import { connect } from 'react-redux';

import Operations from './operations';
import NumberPad from './number-pad';

import { operation } from '../actions/index';

import './controls.scss';

const Controls = (props) =>
    <div className="controls">
        <div className="stack-controls">
            <button type="button" onClick={e => props.operation('dup')}>Dup</button>
            <button type="button" onClick={e => props.operation('pop')}>←Pop</button>
            <button type="button" onClick={e => props.operation('clear')}>Clear</button>
        </div>
        <NumberPad/>
        <Operations />
    </div>;

export default connect( null, { operation })(Controls);
