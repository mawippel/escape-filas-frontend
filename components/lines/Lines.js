import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Lines extends Component {

  state = {
    lines: [
      { id: 0, name: 'Teste1', quantity: 123, placeId: 'ergerg' },
      { id: 1, name: 'Teste1', quantity: 123, placeId: 'afadf' },
      { id: 2, name: 'Teste1', quantity: 123, placeId: 'dgfdf' },
      { id: 3, name: 'Teste1', quantity: 123, placeId: 'bfgb' },
      { id: 4, name: 'Teste1', quantity: 123, placeId: 'esrg' },
      { id: 5, name: 'Teste1', quantity: 123, placeId: 'vvfrv' },
      { id: 6, name: 'Teste1', quantity: 123, placeId: 'sss' },
      { id: 7, name: 'Teste1', quantity: 123, placeId: 'sssafas' },
      { id: 8, name: 'Teste1', quantity: 123, placeId: 'aa' },
      { id: 9, name: 'Teste1', quantity: 123, placeId: 'tyghjm' },
      { id: 10, name: 'Teste1', quantity: 123, placeId: 'mm' },
      { id: 11, name: 'Teste1', quantity: 123, placeId: 'erg,kk,kerg' },
      { id: 12, name: 'Teste1', quantity: 123, placeId: 'fnf' },
      { id: 13, name: 'Teste1', quantity: 123, placeId: 'llll' },
    ]
  }

  // Changed only when the Lines are loaded/reloaded
  linesHolder = [
      { id: 0, name: 'Teste1', quantity: 123, placeId: 'ergerg' },
      { id: 1, name: 'Teste1', quantity: 123, placeId: 'afadf' },
      { id: 2, name: 'Teste1', quantity: 123, placeId: 'dgfdf' },
      { id: 3, name: 'Teste1', quantity: 123, placeId: 'bfgb' },
      { id: 4, name: 'Teste1', quantity: 123, placeId: 'esrg' },
      { id: 5, name: 'Teste1', quantity: 123, placeId: 'vvfrv' },
      { id: 6, name: 'Teste1', quantity: 123, placeId: 'sss' },
      { id: 7, name: 'Teste1', quantity: 123, placeId: 'sssafas' },
      { id: 8, name: 'Teste1', quantity: 123, placeId: 'aa' },
      { id: 9, name: 'Teste1', quantity: 123, placeId: 'tyghjm' },
      { id: 10, name: 'Teste1', quantity: 123, placeId: 'mm' },
      { id: 11, name: 'Teste1', quantity: 123, placeId: 'erg,kk,kerg' },
      { id: 12, name: 'Teste1', quantity: 123, placeId: 'fnf' },
      { id: 13, name: 'Teste1', quantity: 123, placeId: 'llll' },
  ];

  componentDidMount() {
    this.fetchLines()
  }

  fetchLines = () => {
    // this.props.onFetchLines()
    // this.linesHolder = this.props.lines
    // this.setState({linesHolder: this.props.lines})
  }

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newLines = this.linesHolder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
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

  render() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />
    }
    return (
      <FlatList
        data={this.state.lines}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={item => item.placeId}
        refreshing={this.props.loading}
        onRefresh={() => this.fetchLines()}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.name}`}
            subtitle={'Nível da Fila: Médio'}
            containerStyle={{ borderBottomWidth: 0 }}
          />
        )}
      />
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