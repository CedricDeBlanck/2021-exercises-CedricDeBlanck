import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppForm, AppFormField, AppPicker, ImageInput, Screen, SubmitButton, CategoryPickerItem } from '../components'

import * as Yup from "yup";
import AppFormPicker from '../components/forms/AppFormPicker';
const categories = [
    { 
      backgroundColor: "#fc5c65",
      label: "Furniture",
      icon: "floor-lamp",
      value: 1,
    },
    {
        backgroundColor: "#fd9644",
        label: "Cars",
        icon: "car",
        value: 2,
    },
    { 
      backgroundColor: "#fed330",
      label: "Camera",
      icon: "camera",
      value: 3,
    },
    { 
      backgroundColor: "#26de81",
      label: "Games",
      icon: "cards",
      value: 4,
    },
    { 
        backgroundColor: "#2bcbba",
        label: "Clothing",
        icon: "shoe-heel",
        value: 5,
    },
    { 
        backgroundColor: "#45aaf2",
        label: "Sports",
        icon: "basketball",
        value: 6,
    },
    { 
        backgroundColor: "#4b7bec",
        label: "Movies & Music",
        icon: "headphones",
        value: 7,
    },
    { 
        backgroundColor: "#a55eea",
        label: "Books",
        icon: "book-open-variant",
        value: 8,
    },
    { 
        backgroundColor: "#778ca3",
        label: "Other",
        icon: "application",
        value: 9,
    },
]

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
})

export default function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <View style={styles.editScreen}>
            <AppForm
                initialValues={{ title: "", price: "", category: null, description: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    style={styles.inputField}
                    placeholder="Title"
                    name="Title"
                    maxLength={255}
                />
                <AppFormField
                    style={styles.inputField}
                    keyboardType="numeric"
                    placeholder="Price"
                    name="Price"
                    maxLength={8} // 10000.58
                    width={125}
                />
                <AppFormPicker
                    placeholder="Category"
                    items={categories} 
                    name="Category"
                    numberOfColumns={3}
                    width={250}
                    PickerItemComponent={CategoryPickerItem}
                />
                <AppFormField
                    style={styles.inputField}
                    placeholder="Description"
                    name="Description"
                    numberOfLines={3}
                    maxLength={255}
                    multiline
                />
                <SubmitButton title="Post"/>
            </AppForm>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignContent: "center"
    },
    inputField: {
        width: "90%",
        fontSize: 18,
    },
    editScreen: {
        width: "90%",
        alignContent: "center",
        alignSelf: "center"
    },
    Categories: {
        width: "90%",
        fontSize: 14
    }
})
