import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Dimensions } from "react-native";
import HeaderLoginComponent from "../header/HeaderLogin";
// import auth from '@react-native-firebase/auth';
// import firebase from "../firebase";

const LoginFormComponent = () => {
    // const [titleText, setTitleText] = useState("Créer votre compte");
    const [telephone, onChangePhoneNumber] = React.useState("+243");

    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        backgroundColor: "#00008b",
    };

    return (
        <View
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <HeaderLoginComponent />
            <View style={styles.formContainer}>
                <View
                    style={{
                        backgroundColor: "white",
                        margin: 10,
                        borderRadius: 25,
                        padding: 10
                    }}>
                    <Text style={styles.baseText}>
                        Informations de connexion
                    </Text>
                    <TextInput
                        keyboardType="phone-pad"
                        style={styles.input}
                        onChangeText={onChangePhoneNumber}
                        value={telephone}
                        placeholder="Enter phone number"
                    />
                    <View style={styles.btnContainer}>
                        <Button
                            style={styles.btn}
                            title="Connexion"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 15,
        color: "#696969",
        marginBottom: 12
    },
    input: {
        marginLeft: 10,
        width: 250,
        backgroundColor: "#e6e6fa",
        borderRadius: 15,
        padding: 4,
        marginBottom: 3,
        marginTop: 3
    },
    btnContainer: {
        textAlign: "center",
        marginTop: 20,
        paddingStart: 10,
        paddingEnd: 22
    },
    btn: {
        color: "white",
    },
    formContainer: {
        backgroundColor: '#ffffff',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        height: ScreenHeight,
    }
});

export default LoginFormComponent;