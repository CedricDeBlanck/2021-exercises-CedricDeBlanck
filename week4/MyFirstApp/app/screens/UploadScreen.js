import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import defaultStyles from '../config/colors';

export default function UploadScreen({ onDone, visible = false, progress = 0 }) {
    if(!visible) return null;
    return (
        <Modal>
            <View style={styles.container}>
                {progress < 1 ? (
                
                <Progress.Bar 
                    color={defaultStyles.primary} 
                    progress={progress} 
                    width={200}
                />
                ) : (
                    <LottieView
                        source={require('../assets/animations/done.json')}
                        autoPlay
                        loop={false}
                        style={styles.animation}
                        onAnimationFinish={onDone}
                    />
                )

            }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    animation: {
        width: 150
    }
})
