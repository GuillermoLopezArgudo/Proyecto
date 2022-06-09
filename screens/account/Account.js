import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React,{useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

import {auth} from '../../utils/firebase'
const Account = () => {
  //const auth = getAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();

  const handleSingUp = () => {
   
    createUserWithEmailAndPassword(auth,email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with: ',user.email);
    })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    console.log(email, password)
    signInWithEmailAndPassword(auth,email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with: ', user.email);
      navigation.replace('TabNavigator')
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputCointainer}>
        <TextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={handleLogin} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={handleSingUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputCointainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal : 15,
    paddingVertical : 10,
    borderRadius: 10,
    marginTop: 5,

  },
  buttonContainer: {
    width: '60%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color:'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color:'#0782F9',
    fontWeight: '700',
    fontSize: 16
  },
});
