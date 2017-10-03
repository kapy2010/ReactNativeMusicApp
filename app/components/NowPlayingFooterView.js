import React, {Component} from 'react';
import {View, Text} from 'react-native';

class NowPlayingFooterView extends Component {
  render() {
    if (!this.props.nowPlaying) {
      return (
        <View style={styles.nowPlayingFooter}>
          <Text style={styles.trackTitle}>Welcome!</Text>
          <Text style={styles.trackArtist}>No Track Right Now</Text>
        </View>
      );
    }
    return (
      <View style={styles.nowPlayingFooter}>
        <Text style={styles.trackTitle}>{this.props.nowPlaying.title}</Text>
        <Text style={styles.trackArtist}>{this.props.user.username}</Text>
      </View>
    );
  }
}

export {NowPlayingFooterView};

var styles = {
  nowPlayingFooter: {
    flex: 0,
    borderTopWidth: 1
  }
};