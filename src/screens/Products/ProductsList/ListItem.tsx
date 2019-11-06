import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {ProductType} from '../../../redux/products/actions/types';

const {height} = Dimensions.get('window');
export const ITEM_HEIGHT = height * 0.068;

interface Props {
  item: ProductType;
  onItemPressed: (product: ProductType) => void;
}

export default ({item, onItemPressed}: Props) => {
  const {display_name, status} = item;
  const onPress = () => onItemPressed(item);
  return (
    <TouchableHighlight onPress={onPress} underlayColor="#cccc">
      <View style={styles.itemRoot}>
        <View style={styles.infoContainer}>
          <Text style={styles.displayName}>{display_name}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
        {/* todo: add chevron Icon from react-native-vector-icons */}
        <Text style={styles.chevron}>></Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  itemRoot: {
    height: ITEM_HEIGHT,
    borderBottomWidth: 0.5,
    borderColor: '#cccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    marginLeft: '2%',
  },
  displayName: {
    fontSize: 20,
  },
  chevron: {
    fontSize: 20,
    marginRight: '2%',
  },
  status: {
    color: '#666',
  },
});
