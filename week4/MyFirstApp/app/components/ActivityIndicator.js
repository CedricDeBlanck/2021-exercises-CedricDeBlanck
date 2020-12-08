import React, { useRef, useEffect } from 'react'
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native'

export default function ActivityIndicator({ visible = false, size = 200 }) {
    if(!visible) return null;

    const animation = useRef();

    return (
        <View style={styles.container}>
            <LottieView
                style={{ width: size, height: size}}
                autoPlay={true}
                source={require('../assets/animations/loading.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})
