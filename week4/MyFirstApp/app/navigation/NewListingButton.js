import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

export default function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" size={40} color="white"/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: defaultStyles.colors.white,
        borderWidth: 10,
        height: 80,
        width: 80,
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 40,
        bottom: 30,
        alignItems: "center",
        justifyContent: "center"
    }
})
