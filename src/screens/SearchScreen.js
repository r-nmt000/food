import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ""};
  }

  render() {
    return (
      <View style={styles.background}>
        <SearchBar
          term={this.state.term}
          onTermChange={(newTerm) => {
            this.setState({term: newTerm});
          }}
        onTermSubmit={() => console.log('submitted')}/>
        <Text>{this.state.term}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  }
});

export default SearchScreen;