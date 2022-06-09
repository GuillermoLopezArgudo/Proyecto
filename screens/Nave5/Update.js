import { getDoc, setDoc } from "firebase/firestore";
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
import { Picker } from "@react-native-picker/picker";

const Update = (props) => {
  useEffect(() => {}, []);

  const [userDoc, setUserDoc] = useState(null);

  const [text, setText] = useState("");

  const [state, setState] = useState({
    maquina: "",
    eleccion: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const Update = (value, merge) => {
    const myDoc = doc(db, "Nave5", state.maquina);

    setDoc(myDoc, value, { merge: merge })
      .then(() => {
        alert("Actualizacion Realizada!");
        setText("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const Read = () => {
    const myDoc = doc(db, "Nave5", state.maquina);

    getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          setUserDoc(snapshot.data());
          Selecctor();
        } else {
          alert("No encontrado");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  async function Selecctor() {
    if (state.eleccion === "Material") {
      Update(
        {
          material: text,
        },
        true
      );
    } else if (state.eleccion === "Tipo") {
      Update(
        {
          tipo: text,
        },
        true
      );
    } else if (state.eleccion == "KgTotal") {
      Read;
      const KG = (text * userDoc.porcentaje) / 100;
      const kgRestante = text - KG;

      Update(
        {
          kgtotal: text,
          kgRestante: kgRestante,
        },
        true
      );
    } else if (state.eleccion == "Porcentaje") {
      const KG = (userDoc.kgtotal * text) / 100;
      const kgRestante = userDoc.kgtotal - KG;

      Update(
        {
          porcentaje: text,
          kgRestante: kgRestante,
        },
        true
      );
    }
    props.navigation.navigate("Nave 5");
  }

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
      <Picker
        style={styles.picker}
        selectedValue={state.eleccion}
        onValueChange={(value) => handleChangeText("eleccion", value)}
        mode="dropdown"
      >
        <Picker.Item label="Material" value="Material" />
        <Picker.Item label="Tipo" value="Tipo" />
        <Picker.Item label="KgTotal" value="KgTotal" />
        <Picker.Item label="Porcentaje" value="Porcentaje" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Escribe el datos"
        onChangeText={(text) => {
          setText(text);
        }}
        value={text}
      ></TextInput>
      <View style={styles.button}>
        <Button
          title="Actualizar Datos"
          color="#00008B"
          onPress={Read}
          disabled={text == "" || state.maquina == ""}
        ></Button>
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
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  picker: {
    height: 40,
    margin: 12,
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

export default Update;
