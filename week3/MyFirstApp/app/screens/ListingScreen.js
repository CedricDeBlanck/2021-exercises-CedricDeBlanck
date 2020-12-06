import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../components'
import colors from '../config/colors'

export default function ListingScreen() {
    return (
        <SafeAreaView style={styles.cardContainer}>
            <View style={styles.cards}>
                <Card style={styles.card} image={require('../assets/jacket.jpg')} title="Red jacket for sale" subtitle="$100" />
                <Card style={styles.card} image={require('../assets/couch.jpg')} title="Couch in great condition" subtitle="$1000" />
            </View>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: colors.light,
        width: "100%",
        alignItems: "center"

    },
    cards: {
        width: "90%",
    }
})
