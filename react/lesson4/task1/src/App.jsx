import React from 'react';
import Counter from './Counter.jsx';

const App = () => 
    <>
      <Counter start={17} interval={1000}/>
      <Counter start={-10} interval={2000}/>
      <Counter start={22} interval={100}/>
    </>;

export default App;
