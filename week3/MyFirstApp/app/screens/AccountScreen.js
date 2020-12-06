import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem, Screen } from '../components'
import colors from '../config/colors'

export default function AccountScreen() {
    return (
        <Screen>
            <View style={styles.listContainer}>
                <View style={styles.profile}>
                        <Image style={styles.image} source={require('../assets/mosh.jpg')}></Image>
                        <View style={styles.profileText}>
                            <Text style={styles.title}>Mosh Hamedani</Text>
                            <Text style={styles.subTitle}>programmingwithmosh@gmail.com</Text>
                        </View>
                </View>
                <View style={styles.firstItem}>
                    <View style={styles.firstIcon}>
                        <MaterialCommunityIcons name="format-list-bulleted" size={25} color={colors.white} />

                    </View>
                    <Text style={styles.text}>
                        My listings
                    </Text>
                </View>
                <View style={styles.listItem}>
                    <View style={styles.secondIcon}>
                        <MaterialCommunityIcons name="email" size={25} color={colors.white} />
                    </View>
                    <Text style={styles.text}>
                        My Messages
                    </Text>
                </View>
                <View style={styles.lastItem}>
                    <View style={styles.thirdIcon}>
                        <MaterialCommunityIcons name="logout" size={25} color={colors.white} />
                    </View>
                    <Text style={styles.text}>
                        Log out
                    </Text>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 0,
        margin: 0,
        backgroundColor: colors.light,
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    firstItem: {
        backgroundColor: colors.white,
        width: "100%",
        height: 50,
        flexDirection: "row",
        fontWeight: "bold",
        alignContent: "center",
        marginTop: 40,
        padding: 5,
        paddingLeft: 15,
    },
    listItem: {
        backgroundColor: colors.white,
        width: "100%",
        height: 50,
        flexDirection: "row",
        fontWeight: "bold",
        alignContent: "center",
        marginVertical: 1,
        padding: 5,
        paddingLeft: 15,

    },
    lastItem: {
        backgroundColor: colors.white,
        width: "100%",
        height: 50,
        flexDirection: "row",
        fontWeight: "bold",
        alignContent: "center",
        marginVertical: 20,
        padding: 5,
        paddingLeft: 15,

    },
    profile: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    firstIcon: {
        backgroundColor: colors.primary,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    secondIcon: {
        backgroundColor: colors.secondary,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    thirdIcon: {
        backgroundColor: "#ffe66d",
        width: 40,
        height: 40,
        borderRadius: 20,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "400",
        fontSize: 15
    },
    subTitle: {
        color: colors.medium
    },
    text: {
        width: "100%",
        height: "100%",
        padding: 12

    },
    profileText: {
        padding: 15
    }
})
