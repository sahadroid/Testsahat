import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './Home';
import Profile from './Profile';
import EditProfile from './EditProfile';




export default class Aboutscreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'albums', title: 'Profile', icon: 'people' },
      { key: 'recents', title: 'Edit Profile', icon: 'edit' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    albums: Profile,
    recents: EditProfile,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
