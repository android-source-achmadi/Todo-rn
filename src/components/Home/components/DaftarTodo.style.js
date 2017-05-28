import { StyleSheet } from 'react-native';
import {
  deviceWidth,
  deviceHeight
} from '../../../utils'

export default StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#eee',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: deviceWidth*0.8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth*0.15,
  },
  ketikaEdit: {
    height: 40,
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: 'gray'
  }
});