import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({text, onPress}){
    return(
        <TouchableOpacity style = {styles.button} onPress={onPress}>
            <Text style = {styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#dde8fa',
        borderRadius: 2,
        borderWidth: 2,
        borderColor: '#8fa5c8'
    },
    buttonText:{
        textAlign: 'center',
        margin: 5,
        color: 'black',
        fontWeight: '500',
        fontSize: 19,
    },
})