import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Title = props => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>{props.title}</Text>
      </View>
      <TouchableOpacity style={styles.details}>
        <Text style={styles.textDetails}>see all ></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 35,
    marginVertical: 20,
  },
  title: {
    flex: 1,
  },
  details: {
    flex: 1,
    marginRight: -80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 23,
    color: 'black',
  },
  textDetails: {
    fontSize: 15,
    color: '#6C63FF',
    textAlign: 'center',
  },
});
