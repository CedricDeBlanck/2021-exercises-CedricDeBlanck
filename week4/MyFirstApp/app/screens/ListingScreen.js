import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Card, Screen, ActivityIndicator, AppButton } from '../components'

import useApi from '../hooks/useApi';
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import colors from '../config/colors';

export default function ListingScreen({ navigation }) {

    const { data, error, loading, request } = useApi(listingsApi.getListings);

    useEffect(() => {
        request();
    }, [])

    return (
        <Screen style={styles.screen}>
            {error && <>
                <Text>Listings were not received. Try again.</Text>
                <AppButton title="Retry" onPress={request} />
            </>
            }
            <ActivityIndicator visible={loading} size={100}/>
            {!loading && 
            <FlatList 
                style={styles.card}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                <Card
                    style={styles.card}
                    title={item.title}
                    subtitle={`$${item.price}`}
                    imageUrl={item.images[0].url}
                    onPress={() => navigation.navigate(routes.LISTINGS_DETAILS, item)}
                    thumbnailUrl={item.images[0].thumbnailUrl}
                />
            }
            />
        }
        </Screen> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.light,
        width: "100%",
        alignItems: "center"

    },
    card: {
        width: "90%"
    }
})
