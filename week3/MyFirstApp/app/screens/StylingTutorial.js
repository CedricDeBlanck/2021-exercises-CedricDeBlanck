import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppText } from '../components';

function StylingTutorial(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="battery-minus" size={200} color="dodgerblue" />
            <AppText>
                <Text>Hello world</Text>
            </AppText>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },  
})

export default StylingTutorial;