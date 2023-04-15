// Using state in a functional component

import {useState} from "react";

function FunctionalCounter () {

    const [counter, setCounter] = useState(0);  // declaring two variables using state
    const increment = () => {    // variable declaration using the arrow function
        setCounter( counter + 1)
    };
    const decrement = () => {
        setCounter(counter - 1)
    };
    
    return(
        <div>
             <div>
                <p>
                    Counter value: {counter}
                </p>
                <p>
                    <button onClick={increment}>Add</button>
                </p>
                <p>
                    <button onClick={decrement}>Subtract</button>
                </p>
             </div>
        </div>
    );
}

export default FunctionalCounter;