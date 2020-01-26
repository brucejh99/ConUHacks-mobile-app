import React from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import styles from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CameraPage extends React.Component {
    camera = null;

    state = {
        hasCameraPermission: null,
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <View>
                <Camera
                    style={styles.preview}
                    ref={camera => this.camera = camera}
                />
                <TouchableOpacity
                    onPress={async () => {
                        let photo = await this.camera.takePictuerAsync();
                        console.log(photo);
                    }}
                    style={styles.snap}
                >
                    <Text>O</Text>
                </TouchableOpacity>
            </View>
        );
    };
};
