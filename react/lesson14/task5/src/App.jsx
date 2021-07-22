import React, { useEffect, useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [isVisible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <button className='btn' onClick={toggle}>
        Toggle
      </button>
      {isVisible && <Clock location='New York' offset={-2} />}
      {isVisible && <Clock location='Kyiv' offset={2} />}
      {isVisible && <Clock location='London' offset={0} />}
    </>
  );
};

// class App extends React.Component {
//   // state = {
//   //   visible: true,
//   // };

//   toggle = () => {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   };

//   // render() {
//   //   return (
//   //     <>
//   //       <button className='btn' onClick={this.toggle}>
//   //         Toggle
//   //       </button>
//   //       {this.state.visible && <Clock location='New York' offset={-2} />}
//   //       {this.state.visible && <Clock location='Kyiv' offset={2} />}
//   //       {this.state.visible && <Clock location='London' offset={0} />}
//   //     </>
//   //   );
//   // }
// }

export default App;
