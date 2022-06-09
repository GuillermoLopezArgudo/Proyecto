import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Image, Text } from "react-native";

const Nave5 = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={{
          uri: "https://logovtor.com/wp-content/uploads/2020/12/dr-schneider-unternehmensgruppe-logo-vector.png",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>NAVE 5</Text>
      <Image
        source={{
          uri: "https://img.plasticsmachinerymanufacturing.com/files/base/ebm/pmm/image/2021/03/WiBa_Central_drying_system_including_Silmax_hoppers_and_FEEDMAX_loaders.604a3c1b180e1.png?auto=format,compress&w=1300&h=730&fit=max",
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
    marginRight:80,
    marginTop: 20,
    textAlign:"center",
    borderWidth: 1,
    borderColor: "black"
  },
});

export default Nave5;
