import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}



// function tick() {
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   const element2 = <Welcome name="Sara" />;
//   ReactDOM.render(element2, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
