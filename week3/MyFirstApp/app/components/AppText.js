import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({ children, style, ...otherProps }) {
    return (
        <Text style={[styles.text, style]} {...otherProps}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: defaultStyles.text
})