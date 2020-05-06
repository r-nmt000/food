import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({navigation}) => {
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
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice('$')}
          title="Cost Effective" />
        <ResultList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"/>
        <ResultList
          results={filterResultsByPrice('$$$$')}
          title="Big Spender"/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1
  }
});

export default SearchScreen;