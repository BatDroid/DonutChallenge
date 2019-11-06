import React from 'react';
import {FlatListProps, FlatList} from 'react-native';
import ListItem, {ITEM_HEIGHT} from './ListItem';
import {ProductType} from 'src/redux/products/actions/types';

interface Props extends Omit<FlatListProps<ProductType>, 'renderItem'> {
  onItemPressed: (prodcut: ProductType) => void;
}

export default (props: Props) => {
  const {onItemPressed, ...listProps} = props;
  return (
    <FlatList
      keyExtractor={i => i.id.toString()}
      initialNumToRender={18}
      renderItem={({item}) => {
        return <ListItem item={item} onItemPressed={onItemPressed} />;
      }}
      getItemLayout={(_, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      {...listProps}
    />
  );
};
