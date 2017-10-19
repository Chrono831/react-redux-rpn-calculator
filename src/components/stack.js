import React from 'react';
import { connect } from 'react-redux';

const Stack = (props) => <ol>{
    props.items.map( (item, index) =>
        <li key={index}>{item}</li>
    )   
}</ol>;

export default connect(
    state => ({
        items: state.stack,
    })
)(Stack);