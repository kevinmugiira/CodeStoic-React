import { Component } from "react";

class ClassEvent extends Component {

    handleClick() {
        return(
            console.log("Class based component button has been clicked!")
        );
    }
    render() {
        return(
            <div> 
                <p>This is a class based component 
                    <p>
                        <button onClick={this.handleClick}>
                        Please Click Here 
                        </button>
                    </p>
                </p>
            </div>
        )
    }
}

export default ClassEvent;