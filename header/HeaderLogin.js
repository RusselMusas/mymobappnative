import React, { useState } from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";

const HeaderLoginComponent = () => {
  // const [titleText, setTitleText] = useState("Créer votre compte");
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const titleText = "Connectez-vous";

  return (
    <View
      style={{
        backgroundColor: "#00008b",
      }}>
      <Text style={styles.baseText}>
        {"\n"}
        {"\n"}
        <Text style={styles.titleText}>
          {titleText}
          {"\n"}
          {"\n"}
        </Text>
      </Text>
    </View >
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    marginLeft: 25,
    fontWeight: "bold",
    fontSize: 25,
    color: "white"
  },
});

export default HeaderLoginComponent;