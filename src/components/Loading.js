import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00A52C" />
    </View>
  );
};

export default Loading;
