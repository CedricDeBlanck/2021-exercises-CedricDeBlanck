import React from 'react';
import { Image, ImageBackground , StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import AppButton from '../components/AppButton';

import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
    return (
       <ImageBackground 
       style={styles.background}
       source={require('../assets/background.jpg')}>
           <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.title}>Sell what you don't need</Text>
           </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: "95%",
        marginVertical: 30
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center",
    },
    loginButton: {
        width: "90%",
        height: 50,
        backgroundColor: "#fc5c65",
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    registerButton: {
        width: "90%",
        height: 50,
        backgroundColor: "#4ecdc4",
        borderRadius: 40,
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    title: {
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 24,
    },
    textButton: {
        color: "white",
        fontSize: 22,
        textAlign: "center",
        textTransform: "uppercase",
    }
});