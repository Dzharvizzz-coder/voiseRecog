import React from "react";
import { View, Image, Text, TextInput, StyleSheet, ImageBackground, KeyboardAvoidingView } from "react-native";

const CustomOutput = ({output}) => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../assets/images/WrongWordsBg.png')}
                style={styles.img_bg}>
                <Text style={styles.text}>{output}</Text>
            </ImageBackground>        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transeparent',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 2,
        top: 10
    },

    img_bg: {
        width: 292,
        height: 42
    },

    text: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 16,
        color: 'rgba(207, 77, 79, 1)',
        top: 7,
        paddingStart: 15
    }
})

export default CustomOutput