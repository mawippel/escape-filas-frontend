import React, { Component } from 'react';
import { StyledDisabledInput } from './styles.js'

export default class DisabledInput extends Component {
  render() {
    return (
        <StyledDisabledInput
            value={this.props.inputValue}
            editable={false} />
    );
  }
}
