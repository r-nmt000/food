import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput
          style={styles.inputStyle}
          placeholder="Search"
          value={this.props.term}
          onChangeText={newTerm => this.props.onTermChange(newTerm)}
          onEndEditing={() => this.props.onTermSubmit()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
