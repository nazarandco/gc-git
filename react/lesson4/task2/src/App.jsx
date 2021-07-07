import React from 'react';
import Clock from './Clock.jsx';

const App = () => (
  <>
    <Clock location='Kyiv' offset={2} />
    <Clock location='Lviv' offset={3} />
    <Clock location='San-Francisco' offset={1} />
  </>
);

export default App;
