import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })

  };

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
      <Text>We found {results.length} results.</Text>
      <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
      <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"/>
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