import React from 'react';
import { connect } from 'react-redux';

import Operations from './operations';
import NumberPad from './number-pad';

import { dupTop, clear, pop } from '../actions/index';
const actions = {
  dupTop,
  clear,
  pop,
};

const Controls = (props) =>
    <div>
        <Operations />
        <button type="button" onClick={e => props.dupTop()}>Dup</button>
        <button type="button" onClick={e => props.clear()}>Clear</button>
        <button type="button" onClick={e => props.pop()}>←Pop</button>
        <NumberPad/>
    </div>;

export default connect( null, actions)(Controls);
