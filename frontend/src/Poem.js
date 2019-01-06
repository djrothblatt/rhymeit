import React, { Component } from 'react';
import './Poem.css';

class Poem extends Component {
    constructor(props) {
        super(props);
        this.connect();
        this.state = {
            
        };
    }

    connect() {
        this.socket = new WebSocket(`${process.env.REACT_APP_API_SOCKET}/rhymes`);
        this.socket.onmessage = this.handleMessage;
        this.socket.onclose = this.connect;
    }

    handleMessage({ data: { payload } }) {
        
    }

    render() {
        return (
            <textarea className='poem' placeholder='Start writing...'/>
        );
    }
}

export default Poem;
