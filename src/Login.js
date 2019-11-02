import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

export default class Login extends React.Component {
  state = {email: '', password: '', errorMessage: null};

   handleLogin=async ()=> {
    const {email, password} = this.state;
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TouchableHighlight
          style={styles.fullWidthButton}
          onPress={this.handleLogin}>
          <Text style={styles.fullWidthButtonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.fullWidthButton}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.fullWidthButtonText}>Sign Up</Text>
        </TouchableHighlight>
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
  button: {
    backgroundColor: 'red',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthButton: {
    backgroundColor: 'dodgerblue',
    marginTop: 30,
    width: 320,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthButtonText: {
    fontSize: 20,
    color: 'white',
  },
});
