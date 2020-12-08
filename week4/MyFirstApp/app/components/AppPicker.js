import React, { useState } from 'react'
import { Button, FlatList, Modal, PickerIOSItem, StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Screen from './Screen';
import PickerItem from "./PickerItem";

export default function AppPicker({ 
    PickerItemComponent = PickerItem,
    placeholder,
    icon, 
    items, 
    onSelectItem, 
    width="100%",
    numberOfColumns = 1 }) {
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ selectedItem, setSelectedItem ] = useState(null);
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, { width }]}>
                {icon && <MaterialCommunityIcons 
                    name={icon} 
                    size={20} 
                    color={colors.medium} 
                    style={styles.icon} />}
                {selectedItem ? (
                    <AppText style={styles.text}>{selectedItem.label}</AppText>

                ): (
                    <AppText style={styles.text}>{placeholder}</AppText>
                )}
                <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color={colors.medium}
                />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    numColumns={numberOfColumns}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                    <PickerItemComponent
                        item={item}
                        onPress={() => {
                            setModalVisible(false);
                            if(onSelectItem) onSelectItem(item);
                            setSelectedItem(item);
                        }}
                    />
                    }
                    />
            </Screen>
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginTop: 3,
        marginRight: 10
    },
    placeholder: {
        color: colors.medium,
        flex: 1
    },
    text: {
        flex: 1
    }
})
