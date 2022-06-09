import React, { useState, useEffect } from "react";
import { StyleSheet, Image, ScrollView, Text } from "react-native";


const Nave3 = () => {

  

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={{
          uri: "https://logovtor.com/wp-content/uploads/2020/12/dr-schneider-unternehmensgruppe-logo-vector.png",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>NAVE 3</Text>
      <Image
        source={{
          uri: "http://img.interempresas.net/FotosArtProductos/P85431.jpg",
        }}
        style={styles.image2}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 200,
    height: 50,
    margin: "auto",
    marginLeft: 80,
    marginTop: 80,
  },
  image2: {
    flex: 1,
    width: 210,
    height: 250,
    margin: "auto",
    marginLeft: 80,
    marginTop: 20,
  },
  text: {
    flex: 1,
    fontSize: 25,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 20,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Nave3;
