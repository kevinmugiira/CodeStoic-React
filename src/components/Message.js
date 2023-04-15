/* Illustrating a class component! Have fun. */

import {Component} from "react";

class Message extends Component{
    render() {
        return <><h1>This is a class component, {this.props.messageContent}</h1><h5>Created by Veksohn!!</h5></>;
    }
}

export default Message;