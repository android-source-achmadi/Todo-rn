import React, { Component } from 'react';
import {
  TextInput,
} from 'react-native';
import styles from './DaftarTodo.style';

export default class RowEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      textValue: props.rowData.text,
    };

    this.ubahText = this.ubahText.bind(this);
    
  }

  ubahText(text) {
    this.setState({ textValue: text });
  }

  onSubmit(rowData) {
    this.props.ubahTodo(rowData.id, this.state.textValue);
    this.setState({ textValue: '' });
  }

  render() {
    const { rowData } = this.props;

    return (
      <TextInput
        defaultValue={rowData.text}
        onSubmitEditing={() => this.onSubmit(rowData)}
        onChangeText={this.ubahText}
        value={this.state.textValue}
        style={styles.ketikaEdit}
      />
    );
  }
}