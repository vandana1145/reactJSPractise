import React, {Component} from "react";
import PropTypes from "prop-types";

// // Function based Component
// const Student = (props) => {
//     return <h1>Hello {props.name}!!</h1>
// }

// // Class based component
// class Student extends Component {
//     render() {
//         return(
//             <h1>Hello {this.props.name}</h1>
//         );
//     }
// }


// Function based component
// const Student = (props) => {
//     return (
//         <div>
//             <h1>Hello, {props.name}</h1>
//             <h2>Roll No: {props.roll}</h2>
//         </div>
//     );
// };


// // Class based componnet
// class Student extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello, {this.props.name}</h1>
//                 <h2>Roll No: {this.props.roll}</h2>
//             </div>
//         );
//     };
// }


// // Typechecking with PropTypes in ReactJS
// Student.propTypes = {
//     name: PropTypes.string.isRequired,
//     roll: PropTypes.number.isRequired
// };

// Student.defaultProps = {
//     name: "Programming"
// }


// // Children in JSX in React
// Functional component
// const Student = (props) => {
//     return(
//         <h1>Hello World!!! {props.children}</h1>
//     );
// };

// Class based Component
// class Student extends Component {
//     render(){
//         return(
//             <h1>Hello Programming!!! {this.props.children}</h1>
//         )
//     };
// };


// state in React: only valid for class based components. state can be modified, whereas props can not, props are read-only
// state inside the class is private for that particular class
// props can not be modified inside the class, they are controlled by the parents.
// Declaring state directly inside the class(no constructor)
// class Student extends Component {
//     state = {
//         name: "World!",
//         sub: this.props.sub
//     }
//     render(){
//         return(
//             //<h1>Hello {this.props.children} {this.state.name}</h1>
//             <h1>Hello {this.state.sub} {this.state.name}</h1>
//         )
//     }
// }

// Declaring state inside the constructor
class Student extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "World!",
            sub: "Javascript"
        };
    };

    render() {
        return(
            <h1>Hello {this.state.sub} {this.state.name}</h1>
        )
    }
}

export default Student;



