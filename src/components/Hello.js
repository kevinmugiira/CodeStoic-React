/* This code demonstrates how to create and implement a functional ReactJs component */

const name = "Vekson International!"; // defining a variable type constant and initializing it
const displayMessage = () => {  
    return "They need help";
}

function Hello() {
    return <><h1>Hello Kenya, Welcome to {name} </h1><h3> Message: {displayMessage()}</h3></>;
}

// const Hello = ()=> <><h1>Hello My People, this is a functional component.</h1><h3>Welcome to the Home page.</h3></>


export default Hello;