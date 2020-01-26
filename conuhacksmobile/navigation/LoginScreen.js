import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    failed: false
  }

  render() {
    const { email, password, failed } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>
            Login
        </Text>
        <TextInput
          value={email}
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={text => this.setState({ email: text })}
          style={styles.textField}
        />
        <TextInput
          value={password}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={passwordInput => this.setState({ password: passwordInput })}
          style={styles.textField}
        />
        <Button
          title=' Submit '
          onPress={() => {
            if(email === 'bjhong@yahoo.com' && password === '123') {
              this.props.navigation.navigate('App');
            } else {
              this.setState({
                email: '',
                password: '',
                failed: true
              })
            }
          }}
          style={styles.submit}
        />
        {failed ? 
        <Text style={styles.failText}>
          Invalid username or password
        </Text> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  loginText: {
    fontSize: 56
  },
  textField: {
    height: 40,
    width: 250,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginTop: 5,
    marginVertical: 16
  },
  submit: {
    marginHorizontal: 10,
    padding: 10,
    width: 100
  },
  failText: {
    alignSelf: "center",
    marginTop: 10,
    color: 'red'
  }
});
