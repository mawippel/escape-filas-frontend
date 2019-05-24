import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Lines extends Component {

  componentDidMount() {
    this.props.onFetchLines()
  }
  
  render() {
    console.log(this.props.lines);
    return <View />;
  }
}

const mapStateToProps = state => {
	return {
		lines: state.lineReporter.lines,
		loading: state.lineReporter.loading
	};
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchLines: () => dispatch(actions.fetchLines())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lines);