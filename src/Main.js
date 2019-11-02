import React from 'react';
import {StyleSheet, Platform, Image, Text, View, Button} from 'react-native';
import firebase from '@react-native-firebase/app';

export default class Main extends React.Component {
  static navigationOptions = {header: null};
  state = {currentUser: null};

  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }
  handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate('Loading');
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Image
            style={{width: 112, height: 80, marginBottom:20}}
            source={require('./logo_toyota.png')}
        />
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
