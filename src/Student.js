import React, {Component} from "react";

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


// Class based componnet
class Student extends Component{
    render(){
        return(
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>Roll No: {this.props.roll}</h2>
            </div>
        );
    };
}


export default Student;



