import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

export default class Loading extends React.Component {
  static navigationOptions = {header: null};
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'SignUp');
    });
    // firebase.auth().onAuthStateChanged(user => {
    //   this.props.navigation.navigate(user ? 'Main' : 'SignUp');
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
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
