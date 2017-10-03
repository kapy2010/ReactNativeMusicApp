import React, {Component} from 'react';
import {
  AppRegistry,
  ListView,
  NavigatorIOS,
  Text,
  View
} from 'react-native';
import {TrackCell} from './TrackCell';

var mockedData = [{
  genre: "Deep House",
  title: "Coffee (Manhattoes Remix)",
  user: {
    username: "manhattoes"
  },
  artwork_url: "https://i1.sndcdn.com/artworks-000107004661-v4xg0d-large.jpg",
  stream_url: "https://api.soundcloud.com/tracks/191554493/stream"
},
  {
    genre: "Bass",
    title: "Threadsafe",
    user: {
      username: "manhattoes"
    },
    artwork_url: "https://i1.sndcdn.com/artworks-000104588970-5kyi09-large.jpg",
    stream_url: "https://api.soundcloud.com/tracks/187885871/stream"
  }];

class BrowseStacksView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }).cloneWithRows(mockedData)
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.datasource.cloneWithRows(mockedData)
    });
  }

  renderTrack(track) {
    return <TrackCell track={track}/>
  }

  render() {
    return (
      <ListView
        dataSource={this.state.datasource}
        renderRow={this.renderTrack}
        style={styles.listView}
      />
    );
  }
}

export {BrowseStacksView};

var styles = {
  listView: {
    backgroundColor: '#F5FCFF',
  }
};