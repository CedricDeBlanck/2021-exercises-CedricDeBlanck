import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from './Icon';

export default function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Icon
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            </TouchableOpacity>
            <Text style={styles.label}>{item.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "33%",
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})
