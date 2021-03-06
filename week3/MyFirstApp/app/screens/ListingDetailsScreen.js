import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AppText, ListItem } from '../components'

import colors from '../config/colors'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title="Mosh"
                        subTitle="5 listings" 
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginVertical: 10
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 40
    }
})
