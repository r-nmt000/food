import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp"
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm( newTerm);
        }}
        onTermSubmit={() => searchApi(term)}/>
      <Text>{term}</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  }
});

export default SearchScreen;