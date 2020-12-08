import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted) alert("You need to enable the permission for the Camera Roll!");
}

useEffect(() => {
    requestPermission();
}, []);

  const handlePress = () => {
    if(!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: "Yes", onPress: () => onChangeImage(null) },
      { text: "No" }
    ])
  }

  const selectImage = async () => {
    try {

    const { cancelled, uri} = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5
    });
    if(!cancelled) {
      onChangeImage(uri);
    }
    } catch(error) {
    console.log("Error reading an image", error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (        
          <MaterialCommunityIcons color={defaultStyles.colors.medium} name="camera" size={30} />
          )}
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image}/>
          )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    justifyContent: "center",
    borderRadius: 15,
    height: 100,
    width: 100
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
})
