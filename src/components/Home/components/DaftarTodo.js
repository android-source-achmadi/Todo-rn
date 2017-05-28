import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TouchableOpacity,
  Alert,
  TextInput
} from 'react-native';
import styles from './DaftarTodo.style';
import RowEdit from './RowEdit';
import {
  deviceWidth,
  deviceHeight
} from '../../../utils';

export default class DaftarTodo extends Component {
  constructor() {
    super();

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData) {
    if (rowData.isEditing) {
      return (
        <RowEdit rowData={rowData} ubahTodo={this.props.ubahTodo}/>
      );
    }

    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => this.props.toEdit(rowData.id)}
          style={styles.textBox}
        >
          <Text>{rowData.text}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => Alert.alert(
            'Busek',
            'Yakin pengen busek?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => this.props.deleteTodo(rowData.id)},
            ]
          )}>
          <Text>{'\u2716'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={this.renderRow}
        style={{ height: deviceHeight * 0.9 }}
        enableEmptySections={true}
      />
    );
  }
}