// Demonstrating conditional rendering

import { useState } from "react";
// import Counter from './Counter';
// import FunctionalCounter from './FunctionalCounter';

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(false);
    // let output;

    // using a ternary operator
    return display ? (<div> <h3>A conditional Component!</h3></div>) : (<div><h3>Elon getting grilled by the BBC!</h3></div>);

    // if (display) {
    //      output = <h2> A conditional component!</h2>;
    // } else {
    //     output = <h2>Elon getting grilled by the BBC!</h2>;
    // }

    // return <div> {output} </div>    
}