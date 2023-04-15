import { Component } from "react"


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
        /* this two statements bind the two functions with the 'this' keyword */
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    // the arrow function ie: () => has been used here to bind the event
    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    
    render(){
        return (
        <div>
            <h3>Count value is: {this.state.counter}</h3>
               <div>
                  <p> 
                    <button onClick={this.increment}>Increment</button>
                  </p>
               </div>
               <div>
                  <p>
                     {/* the arrow function ie: () => has been used here to bind the event */}
                    <button onClick={() => this.decrement()}>Decrement</button>
                  </p>
               </div>
        </div>
        
        );
    }
}

export default Counter;