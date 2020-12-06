import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Button, Image, TouchableOpacity } from 'react-native';
import {Screen} from './Screen';

export default function ImageInput() {
    const [ selectedImage, setSelectedImage ] = useState();

    const requestPermission = async () => {
      const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
      if(!granted) alert("You need to enable the permission for the Camera Roll!")
    }
  
    useEffect(() => {
      requestPermission();
    }, [])
  
    const selectImage = async () => {
      try {
        const {cancelled, uri} = await ImagePicker.launchImageLibraryAsync();
  
        if(!cancelled) setSelectedImage(uri);
      } catch(error) {
        console.log("Error reading image library!", error);
      }
    }

    return (
        <Screen>
            <TouchableOpacity onPress={selectImage} style={styles.button}>
                <MaterialCommunityIcons name="camera" style={styles.camera}/>
            </TouchableOpacity>
            <Image source={{ uri: selectedImage }} style={{width: 200, height: 200}} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: "lightgrey",
      width: 100,
      height: 100,
      borderRadius: 15,
    },
    camera: {
      fontSize: 50,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center"
    },
  })
