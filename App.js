import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 96,
    width: '100%',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  rightContainer: {
    width: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
  },
  publisher: {
    fontSize: 12,
    color: '#9E9E9E',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.title} numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.publisher}>ReactNews</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: 'https://picsum.photos/id/10/200/200' }}
          />
        </View>
      </View>
    </View>
  );
}
