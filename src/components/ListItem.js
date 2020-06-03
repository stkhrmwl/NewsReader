import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  author: {
    fontSize: 12,
    color: '#9E9E9E',
  },
});

export default ListItem = ({ imageUrl, title, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.author}>{author}</Text>
      </View>
      <View style={styles.rightContainer}>
        {!!imageUrl && (
          <Image style={styles.thumbnail} source={{ uri: imageUrl }} />
        )}
      </View>
    </TouchableOpacity>
  );
};
