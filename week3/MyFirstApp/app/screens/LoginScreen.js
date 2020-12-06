import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AppFormField, AppForm, Screen, SubmitButton } from '../components';

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppForm
                initialValues={{ email: "", password: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
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
                <SubmitButton title="Login"/>
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
