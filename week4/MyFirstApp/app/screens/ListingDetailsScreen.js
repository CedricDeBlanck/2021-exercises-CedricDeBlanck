import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppText, ListItem } from '../components';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors'

export default function ListingDetailsScreen({ route }) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} preview={{ uri: listing.images[0].thumbnailUrl }} tint="light" uri={listing.images[0].url} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price} </AppText>
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
