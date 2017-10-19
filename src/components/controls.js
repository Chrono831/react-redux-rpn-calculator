import React from 'react';
import { connect } from 'react-redux';

const Controls = (props) =>
    <div>
        <button type="button" onClick={e => props.dupTop()}>Dup</button>
    </div>;

export default connect(
    null,
    {
        dupTop: () => ({
            type: 'dup',
        })
    }
)(Controls);