import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Card = ({ children }) => (
    <View style={styles.cardContainer}>
        {children}
    </View>
);

const CameraButton = ({ navigate }) => (
    <Button
        title='                     New Entry                    '
        onPress={navigate}
        style={styles.cameraButton}
    />
);

export default class MainScreen extends Component {
    navigate = () => this.props.navigation.navigate('Camera');
    render() {
        return (
            <View style={styles.container}>
              <Card>
                  <Text>Hello!</Text>
              </Card>
              <Card>
                  <Text>Hello!</Text>
              </Card>
            <CameraButton navigate={this.navigate} /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 30
  },
  cardContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: '90%',
    display: 'flex',
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    shadowRadius: 5
  },
  cameraButton: {
      alignSelf: 'stretch'
  }
});
