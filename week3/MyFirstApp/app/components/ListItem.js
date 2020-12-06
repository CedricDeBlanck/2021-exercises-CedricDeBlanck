import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({ image, title, subTitle, onPress, renderRightActions}) {
    return (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
            onPress={onPress}
            underlayColor={colors.light}>
            <View style={styles.container}>
                {image && <Image style={styles.image} source={image} /> }
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                </View>
                <MaterialCommunityIcons
                    color={colors.medium}
                    name="chevron-right"
                    size={25}
                />
            </View>
        </TouchableHighlight>
    </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    }, 
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium
    },
    detailsContainer: {
        marginLeft: 20,
        justifyContent: "center",
        flex: 1
    }
})
