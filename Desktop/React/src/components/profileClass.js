import React from 'react'; 
import { Component } from 'react';

class UserInputClass extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  render() {
    return (
      <div>
        <h1>User Input (Class)</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        />
      </div>
    );
  }
}

export default UserInputClass;