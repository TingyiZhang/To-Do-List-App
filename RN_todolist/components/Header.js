import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ props.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '500',
    textTransform: 'capitalize'
  }
});

export default Header;