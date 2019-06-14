import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { CenteredView } from '../styles';

class Lines extends Component {

  static navigationOptions = {
    title: 'Filas',
  };

  state = {
    lines: null,
    linesHolder: null
  }

  componentDidMount() {
    this.fetchLines()
  }

  fetchLines = () => {
    this.props.onFetchLines()
    this.setState({linesHolder: this.props.lines })
    this.setState({lines: this.props.lines })
  }

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newLines = this.state.linesHolder.filter(item => {
      const itemData = `${item.placeName.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      lines: newLines,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Pesquise aqui..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

	renderAvatar = (quantity) => {
		if (quantity <= 10) {
      return { source: require('../../assets/low_queue.png') }
		} else if (quantity <= 20) {
      return { source: require('../../assets/medium_queue.png') }
		} else {
      return { source: require('../../assets/high_queue.png') }
		}
  }
  
  renderLineLevel = (quantity) => {
    if (quantity <= 10) {
      return `Nível da Fila: Baixo`
		} else if (quantity <= 20) {
      return `Nível da Fila: Médio`
		} else {
      return `Nível da Fila: Alto`
		}
    
  }

  render() {
    if (this.props.loading) {
      return (
        <CenteredView>
          <ActivityIndicator size="large" color="#000" />
        </CenteredView>
      )
    }

    return (
      <FlatList
        data={this.state.lines}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={item => item.id}
        refreshing={this.props.loading}
        onRefresh={() => this.fetchLines()}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
						leftAvatar={this.renderAvatar(item.quantity)}
            title={`${item.placeName}`}
            subtitle={this.renderLineLevel(item.quantity)}
            containerStyle={{ borderBottomWidth: 0 }}
          />
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

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