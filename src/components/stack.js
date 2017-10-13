import React from 'react';

const Stack = (props) => <ol>{
    props.items.map( (item, index) =>
        <li key={index}>{item}</li>
    )   
}</ol>;

export default Stack;