import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native';
// import {firebase} from '@react-native-firebase/app';
import auth, {firebase} from '@react-native-firebase/auth';

export default class SignUp extends React.Component {
  static navigationOptions = {header: null};
  state = {email: '', password: '', errorMessage: null};

  async handleSignUp() {
    const {email, password} = this.state;
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      this.props.navigation.navigate('Main');
    } catch (error) {
      this.setState({errorMessage: error.message});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 112, height: 80, marginBottom: 20}}
          source={require('./logo_toyota.png')}
        />
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TouchableHighlight
          style={styles.fullWidthButton}
          onPress={() => this.handleSignUp()}>
          <Text style={styles.fullWidthButtonText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.fullWidthButton}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.fullWidthButtonText}>Have an account? Login</Text>
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
