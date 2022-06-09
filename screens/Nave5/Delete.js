import { deleteDoc, getDoc, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image
} from "react-native";
import { doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const Delete = () => {
  const [state, setState] = useState({
    maquina: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const Delete = () => {
    const myDoc = doc(db, "Nave5", state.maquina);

    deleteDoc(myDoc)
      .then(() => {
        alert("Maquina Eliminada");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={{
          uri: "https://logovtor.com/wp-content/uploads/2020/12/dr-schneider-unternehmensgruppe-logo-vector.png",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Maquina:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText("maquina", value)}
        placeholder="Numero Maquina"
      />
      <View style={styles.button}>
      <Button title="Eliminar Maquina" color="#00008B" onPress={Delete}></Button>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 22,
    margin: 12,
  },
  image: {
    flex: 1,
    width: 200,
    height: 50,
    margin: "auto",
    marginLeft: 80,
    marginTop: 20
  },
  button: {
    margin: 12,
    backgroundColor: "#00008B",
  },
});

export default Delete;
