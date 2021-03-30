// import React from 'react' for creating react component line React.create
import React from 'react';
import ReactDOM from 'react-dom';
import Student from './Student';
//import el from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//ReactDOM.render(<App/>, document.getElementById("root"));

// Rendering element
ReactDOM.render(<Student roll={1} />, 
                document.getElementById("root"));