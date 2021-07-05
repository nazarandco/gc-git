const rootElement = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

console.log(ReactDOM);

ReactDOM.render(greetingElem, rootElement);