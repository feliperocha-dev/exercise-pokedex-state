import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClickFunction}>{this.props.type}</button>
    );
  }
}

export default Button;