import React, { Component } from 'react';
import { Platform } from "react-native";
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {

  state = {
    searchFocused: false
  };

  render() {
    return <GooglePlacesAutocomplete
      placeholder='Informe o Local'
      placeholderTextColor='#333'
      onPress={this.props.onLocationSelected}
      query={{
        key: Constants.manifest.extra.GOOGLE_MAPS_API_KEY,
        language: 'pt',
        components: 'country:br'
      }}
      textInputProps={{
        onFocus: () => {
          this.setState({ searchFocused: true });
        },
        onBlur: () => {
          this.setState({ searchFocused: false });
        },
        autoCapitalize: 'none',
        autoCorrect: false
      }}
      listViewDisplayed={this.state.searchFocused}
      fetchDetails
      enablePoweredByContainer={false}
      styles={searchStyle}
    />;
  }
}

const searchStyle = {
  container: {
    position: "absolute",
    top: Platform.select({ ios: 60, android: 40 }),
    width: "90%"
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: "transparent",
    height: 54,
    marginHorizontal: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  textInput: {
    height: 54,
    margin: 0,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: "#DDD",
    fontSize: 18
  },
  listView: {
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
    marginTop: 10
  },
  description: {
    fontSize: 16
  },
  row: {
    padding: 20,
    height: 58
  }
}
