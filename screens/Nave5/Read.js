import { deleteDoc, getDoc, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const Read = () => {
  const [userDoc, setUserDoc] = useState(null);

  const [state, setState] = useState({
    maquina: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const Read = () => {
    const myDoc = doc(db, "Nave5", state.maquina);

    getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          setUserDoc(snapshot.data());
        } else {
          alert("No Doc Found");
        }
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
      <View style={{margin:'auto'}}>
        <Text style={styles.text}>Maquina:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChangeText("maquina", value)}
          placeholder="Numero Maquina"
        />
        {userDoc != null && (
          <View style={styles.text}>
            <Text>Material: {userDoc.material}</Text>
            <Text>Tipo: {userDoc.tipo}</Text>
            <Text>Kg Total: {userDoc.kgtotal} kg</Text>
            <Text>Porcentaje: {userDoc.porcentaje} %</Text>
            <Text>Kg Restante: {userDoc.kgRestante} kg</Text>
          </View>
        )}
        <View style={styles.button}>
          <Button title="Leer Dato" color="#00008B" onPress={Read}></Button>
        </View>
      </View>
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
    marginTop: 20
  },
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
  button: {
    margin: 12,
    backgroundColor: "#00008B",
  },
});

export default Read;
