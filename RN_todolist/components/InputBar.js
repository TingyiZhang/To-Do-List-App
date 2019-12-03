import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(todoInput) => props.textChange(todoInput)}
        value={props.todoInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}> + </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: .5
  },
  input: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    fontSize: 20,
    height: 50
  },
  addButton: {
    width: 80,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: '#171717',
    fontSize: 25,
    alignItems: 'center', 
    fontWeight: '900'
  }
})

export default InputBar;