import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  errorMessage: string;
}

// todo: add reload button for refetching the data
export const ServerError = (props: Props) => {
  const { errorMessage} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: 'red',
  },
});
