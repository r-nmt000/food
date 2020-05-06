import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import ResultDetail from "./ResultDetail";

const ResultList = ({title, results, navigation}) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) =>{
          return (
            <TouchableOpacity onPress={() => {navigation.navigate('ResultsShow', { id: item.id})}}>
              <ResultDetail result={item}/>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  }
});

export default withNavigation(ResultList);