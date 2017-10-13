import React from 'react';

import Stack from './stack.js';

const App = () => <div>
    <h1>RPN Calculator</h1>

    <Stack items={[42, 6, 100]} />

    <div><button type="button">Button!</button></div>
</div>;

export default App;