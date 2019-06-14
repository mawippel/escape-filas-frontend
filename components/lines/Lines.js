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
    loading: false
  }
  lat = 0
  lng = 0

  componentDidMount() {
    const { navigation } = this.props;
    this.lat = navigation.getParam('lat');
    this.lng = navigation.getParam('lng');
    this.fetchLines()
  }

  fetchLines = () => {
    this.props.onFetchLines(this.lat, this.lng)
  }
  
  searchFilterFunction = text => {
    if (this.props.linesHolder) {
      this.setState({
        loading: true,
        value: text,
      });

      let newLines = this.props.linesHolder.filter(item => {
        const itemData = `${item.placeName.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      if (!text) {
        newLines = [...this.props.linesHolder]
      }
      this.props.lines.length = 0
      this.props.lines.push(...newLines)


      this.setState({
        loading: false,
      });
    }
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
    if (this.props.loading || this.state.loading) {
      return (
        <CenteredView>
          <ActivityIndicator size="large" color="#000" />
        </CenteredView>
      )
    }

    return (
      <FlatList
        data={this.props.lines}
        extraData={this.props}
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
  return {
    lines: [...state.lineReporter.lines],
    linesHolder: [...state.lineReporter.lines],
    loading: state.lineReporter.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchLines: (lat, lng) => dispatch(actions.fetchLines(lat, lng))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lines);