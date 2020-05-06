import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from "./ResultDetail";

const ResultList = ({title, results}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) =>{
          return <ResultDetail result={item}/>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultList;