import React, { Component } from 'react';
import { connect } from 'react-redux';

class Boards extends Component {
    handleClick() {
        console.log('this is:', this.props.dispatch);
    }
  
    render() {
      return (
        <button onClick={(e) => this.handleClick(e)}>
          Click me
        </button>
      );
    }
}


Boards = connect()(Boards);

export default Boards;