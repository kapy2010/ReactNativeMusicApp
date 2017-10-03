import React, {Component} from 'react';
import {
  AppRegistry,
  ListView,
  NavigatorIOS,
  Text,
  View
} from 'react-native';
import {BrowseStacksView} from './BrowseStacksView';
import {NowPlayingFooterView} from './NowPlayingFooterView';

class ReactNativeMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {nowPlaying: null};
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <BrowseStacksView/>
        <NowPlayingFooterView nowPlaying={this.state.nowPlaying}/>
      </View>
    );
  }
}

var styles = {
  appContainer: {
    flex: 1,
    paddingTop: 20
  }
};

export default ReactNativeMusic;