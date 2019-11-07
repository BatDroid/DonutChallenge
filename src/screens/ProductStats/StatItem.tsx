import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  value: string;
}

const StatItem = ({title, value}: Props) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
      margin: 10,
  },
  title: {
      fontSize: 20,
  },
  value: {
      color: "#666"
  },
});

export default StatItem;
