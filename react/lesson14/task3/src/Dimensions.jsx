import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width, height } = dimensions;
  return <div className='dimensions'>{`${width}px - ${height}px`}</div>;
};

// class Dimensions extends React.Component {
//   state = {
//     width: null,
//     height: null,
//   };

//   componentDidMount() {
//     window.addEventListener('resize', this.onResize);
//     const { innerWidth, innerHeight } = window;
//     this.setDimensions(innerWidth, innerHeight);
//   }

//   onResize = (e) => {
//     const { innerWidth, innerHeight } = e.target;
//     this.setDimensions(innerWidth, innerHeight);
//   };

//   setDimensions = (width, height) => {
//     this.setState({
//       width,
//       height,
//     });
//     document.title = `${innerWidth} x ${innerHeight}`;
//   };

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize);
//   }

//   render() {
//     return (
//       <div className='dimensions'>{`${this.state.width}px - ${this.state.height}px`}</div>
//     );
//   }
// }

export default Dimensions;
