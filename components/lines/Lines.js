import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Lines extends Component {

  componentDidMount() {
    this.props.onFetchLines()
  }
  
  render() {
    console.log(this.props.lines);
    console.log(this.props.loading);
    if (this.props.loading) {
      <View>
        <Text>
          aaa
          aaa
          Loading...
        </Text>
      </View>
    }
    return (
      <View>
        <Text>
          aaa
          aaa
          Carregou
        </Text>
      </View>
    );
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