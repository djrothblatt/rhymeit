import React, { Component } from 'react';
import './RhymeInput.css';

class RhymeInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestions: []
        };

        this.handleSuggestions = this.handleSuggestions.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.connect();
    }

    connect() {
        this.socket = new WebSocket(`${process.env.REACT_APP_API_SOCKET}/rhymes`);
        this.socket.onmessage = this.handleSuggestions;
        this.socket.onclose = this.connect;
    }

    handleChange(e) {
        const { target: { value: word } } = e;
        const message = JSON.stringify({ word });
        this.socket.send(message);
    }

    handleSuggestions({ data }) {
        const { payload: suggestions } = JSON.parse(data);
        this.setState({ suggestions });
    }

    render() {
        const { suggestions } = this.state;

        const suggestionItems = suggestions.map((word, key) => <li key={key}>{word}</li>);
        return (
            <div>
              <input className="rhyme" type="text" onChange={this.handleChange} placeholder="Type a word to rhyme" />
              <ul className="suggest">{suggestionItems}</ul>
            </div>
        );
    }
}

export default RhymeInput;
