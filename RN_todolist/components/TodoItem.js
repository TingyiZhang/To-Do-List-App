import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => this.props.toggleDone()}
      >
        <Text style={(todoItem.done) ? { color: '#008000' } : { color: '#000000' }}>
          { todoItem.title }
        </Text>

        <Button
          title="Remove"
          color={(todoItem.done) ? 'rgba(255, 0, 0, 1)' : 'rgba(255, 0, 0, 1)' }
          onPress={() => this.props.removeTodo()}
        />
      </TouchableOpacity>



    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  }
})