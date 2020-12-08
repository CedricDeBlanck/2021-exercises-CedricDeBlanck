import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { ListItem, ListItemSeparator, Screen } from '../components'
import colors from '../config/colors'
import Icon from '../components/Icon';
import routes from '../navigation/routes';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },
    },
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
]

export default function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
           <View style={[styles.container, { marginVertical: 20 }]}>
                <ListItem
                    title="Mosh Hamedani"
                    subTitle="info@myreactnativeapp.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(item) => item.title}
                    ItemSeparatorComponent={() => <ListItemSeparator />}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
           <View style={styles.container}>
                <ListItem
                    title="Log out"
                    IconComponent={
                        <Icon
                            name="logout"
                            backgroundColor={colors.yellow}
                        />
                    }
                />
           </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      backgroundColor: colors.white,
    },
    screen: {
      backgroundColor: colors.light,
    }
  })
