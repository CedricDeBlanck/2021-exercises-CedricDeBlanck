import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AppForm, AppFormField, Screen, SubmitButton } from '../components'

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().type,
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <View style={styles.container}>
            <AppForm
                initialValues={{ email: "", password: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    style={styles.inputField}
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    icon="account" 
                    placeholder="Name"
                    name="name"
                    textContentType="username"
                />
                <AppFormField
                    style={styles.inputField}
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    icon="email" 
                    keyboardType="email-address" 
                    placeholder="Email"
                    name="email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    style={styles.inputField}
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    icon="lock" 
                    placeholder="Password"
                    name="password"
                    textContentType="password"
                />
                <SubmitButton title="Register"/>
            </AppForm>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputField: {
        width: "90%",
        fontSize: 18
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
})
