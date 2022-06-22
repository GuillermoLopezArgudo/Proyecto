import { setDoc, doc,} from "firebase/firestore";
import React, { useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { db, auth } from "../../utils/firebase";

const Create = () => {
  const [kgRestante, setKgRestante] = useState(0);

  const [state, setState] = useState({
    maquina: "",
    material: "",
    tipo: "",
    kgtotal: "",
    porcentaje: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const Crear = async () => {

    const myDoc = doc(db, auth.currentUser?.email,"Nave3");

  
    Tipo()

    const kg = (state.kgtotal * state.porcentaje) / 100;
    const total = state.kgtotal - kg;
    setKgRestante(state.kgtotal - kg);
    
    const maquina = state.maquina
    const docData = {
      [maquina]: {
      material: state.material,
      tipo: state.tipo,
      kgtotal: state.kgtotal,
      porcentaje: state.porcentaje,
      kgRestante: total,
      }
    };

    await setDoc(myDoc, docData, {merge:true})
      .then(() => {
        alert("Maquina Añadida");
      })
      .catch((error) => {
        alert(error.message);
      });
  
  };

  const Tipo = () => {
    const desglosado = state.material.split("");

    const tipo = desglosado[0] + desglosado[1];

    if (tipo == "50") {
      state.tipo = "ABS"
    } else if (tipo == "51") {
      state.tipo = "ABS/PC"
    } else if (tipo == "52") {
      state.tipo = "PA";
    } else if (tipo == "54") {
      state.tipo ="PMMA";
    } else if (tipo == "57") {
      state.tipo = "PP";
    } else if (tipo == "58") {
      state.tipo = "POM";
    } else if (tipo == "60") {
      state.tipo = "PC";
    } else if (tipo == "63") {
      state.tipo = "TPE";
    } else {
      state.tipo = "NO ASIGNADO"
    }
  };


  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={{
          uri: "https://logovtor.com/wp-content/uploads/2020/12/dr-schneider-unternehmensgruppe-logo-vector.png",
        }}
        style={styles.image}
      />
      <View style={{ flex: 1, padding: 5 }}>
        <Text style={styles.text}>Maquina:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChangeText("maquina", value)}
          placeholder="Numero Maquina"
        />
      </View>

      <Text style={styles.text}>Material:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText("material", value)}
        placeholder="Numero Material"
        keyboardType="numeric"
      />

      <Text style={styles.text}>Kg Total Produccion:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText("kgtotal", value)}
        placeholder="Kg total"
        keyboardType="numeric"
      />

      <Text style={styles.text}>Porcentaje:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText("porcentaje", value)}
        placeholder="Porcentaje"
        keyboardType="numeric"
      />

      <Text style={styles.text}>Kg Restante:</Text>
      <TextInput style={styles.input} value={kgRestante + "kg"} />

      <View style={styles.button}>
        <Button
          onPress={Crear}
          disabled={
            state.maquina == "" ||
            state.material == "" ||
            state.kgtotal == "" ||
            state.porcentaje == ""
          }
          title="Guardar Informacion"
          color="#00008B"
        />
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
    backgroundColor: "white",
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
    marginTop: 20,
  },
  button: {
    margin: 12,
    backgroundColor: "#00008B",
  },
});

export default Create;
