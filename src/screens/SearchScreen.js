import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp"

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      results:[],
      errorMessage: ""
    };
  }

  searchApi = async () => {
    try {
      const response = await yelp.get('/search',
        {
          params: {
            limit: 50,
            term: this.state.term,
            location: 'san jose'
          }
        });
      this.setState({results: response.data.businesses});
    } catch (err) {
      this.setState({errorMessage: 'Something went wrong'});
    }
  };

  render() {
    return (
      <View style={styles.background}>
        <SearchBar
          term={this.state.term}
          onTermChange={(newTerm) => {
            this.setState({term: newTerm});
          }}
        onTermSubmit={() => this.searchApi()}/>
        <Text>{this.state.term}</Text>
        {this.state.errorMessage ? <Text>{this.state.errorMessage}</Text> : null }
        <Text>We have found {this.state.results.length} results</Text>
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