import React from 'react';
import {View, Image, Text} from 'react-native';

const TrackCell = ({track}) => {
  return (
    <View style={styles.trackCell}>
      <Image
        source={{uri: track.artwork_url}}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.trackTitle}>{track.title}</Text>
        <Text style={styles.trackArtist}>{track.user.username}</Text>
      </View>
    </View>
  );
};

export {TrackCell};

var styles = {
  thumbnail: {
    width: 50,
    height: 50,
  },
  trackCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 4,
    padding: 4,
    borderBottomWidth: .5,
    borderColor: 'lightgray'
  },
  trackTitle: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  trackArtist: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: 'center',
  },
  rightContainer: {
    flex: 1,
  }
};