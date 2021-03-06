import React, {Component} from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

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
// class Student extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "World!",
//             sub: "Javascript"
//         };
//     };

//     render() {
//         return(
//             <h1>Hello {this.state.sub} {this.state.name}</h1>
//         )
//     }
// }


// Event Handling with class based components in ReactJS

// Class based component
// class Student extends Component{
    // handleClick(){
    //     console.log("Button Clicked, here 'this'is not accessible so undefined.", this)//here this is not accessible from inside this function, so its undefined while doing clg()
    // }
    // Three ways/methods to solve this: 

    //1. make arrow function; react will bind 'this' automatically with the event function. Most recommended one
    // handleClick = () => {
    //     console.log("Button Clicked using arrow function", this)
    // }

    //2. Rare case when you need to use regular function instead of arrow function. Then you need to bind 'this' separately with the function.
    // This also need to create a constructor
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "World!",
//             sub: this.props.sub
//         }

//         this.handleClick = this.handleClick.bind(this);
//     }
//     // in order to use 'this' inside the below function, we need to bind 'this' with the function; states can then only accessible.
//     handleClick() {
//         console.log("Button Clicked using regular function and bind method", this)
//     };

//     render() {
//         return(
//             <>
//             <h1>Hello {this.state.sub} {this.state.name}</h1>
//             <button onClick={this.handleClick}>Click Me</button>
//             </>
//         );
//     };
// }

// Event handling in functional component
// function Student(props){
//     function handleClick(e){
//         //e.preventDefault();//calling explicitely to prevent the autoclick event in the anchor tag
//         console.log("Button Clicked inside functional component.")
//     }
//     return(
//         <div>
//             <h1>Hello {props.sub} World!</h1>
//             {/*<a href="https://reactjs.org" onClick={handleClick}>Click me</a>*/}
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }


// Update state uisng setState method; only valid for class based component
// class Student extends Component {
// // Student is the sub-class or child class of Componenet class. Subclass has the responsibility to 
// // call all the props of the parent class which is being called inside the constructor using the super(props) method.
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "World of",
//             sub: this.props.sub
//         };
//     };

//     handleClick = () => {
//         // type 1 for setState
//         // this.setState({name:"programming of", sub:"reactJS"})
//         // console.log("Button Clicked!", this)
        
//         // type 2 for setState
//         this.setState((state, props) => {
//             console.log(this.state.name, this.state.sub)
//             console.log(props.sub)
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <h1>Hey Programmers!</h1>
//                 <h2>Welcome to the {this.state.name} {this.state.sub}</h2>
//                 <button onClick={this.handleClick}>Click me</button>
//             </div>
//         )
//     }
// }


// Passing arguments to the event handlers
class Student extends Component{
    // state without constructor or state props
    state = {
        id: 2,
        name: "Programmers :)"
    };

    handleClick = (id,word, e) => {
        console.log("Button Clicked!")
        console.log(id)
        console.log(word)
        console.log(e)
    };

    // In order to pass arguments to event handlers, we can take help of a separate helper function just to pass argument
    // handleClickArg = (e) => {
    //     this.handleClick(this.state.id,"World", e);
    // }

    render() {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                {/* Another method to pass arguments to the event handlers is by passing the arrow function directly inside the onClick method as an anonymous function. */}
                <button onClick={e => {this.handleClick(this.state.id, "World", e)}}>Delete</button>
                {/* <button onClick={this.handleClickArg}>Delete</button> */}
            </div>
        )
    };
} 

export default Student;