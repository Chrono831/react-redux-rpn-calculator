import React from 'react';

import Stack from './stack.js';
import Controls from './controls.js';

import './app.scss';

const App = () => <div>
    <h1>RPN Calculator</h1>

    <Controls />

    <Stack />
</div>;

export default App;