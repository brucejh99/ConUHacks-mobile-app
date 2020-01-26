import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import fs from 'fs';
import { request } from 'http';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  let camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }} >
      <Camera ref={cam => camera = cam} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={async () => {
              console.log('start');
              const photo = await camera.takePictureAsync();
              request.post('https://mighty-eyrie-60091.herokuapp.com/image_to_text').form({ image: }) // finish
              this.navigation.navigate.goBack();
              console.log(photo);
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Snap </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
      backgroundColor: "grey"
    },
    textField: {
      backgroundColor: "grey",
      marginHorizontal: 16,
      marginBottom: 16
    },
    button: {
      marginHorizontal: 16,
      height: 44
    },
    login: {
      marginBottom: 8
    },
    failText: {
      alignSelf: "center",
      marginTop: 10
    },
    spinner: {
      marginVertical: 25
    }
  });
