import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {
    handleClick() {
        console.log('this is:', this.props.dispatch);
    }
  
    render() {
      return (
        <button onClick={(e) => this.handleClick(e)}>
          Page Test
        </button>
      );
    }
}


Test = connect()(Test);

export default Test;