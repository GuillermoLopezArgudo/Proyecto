import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../utils/firebase';
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";


const User = () => {

    const navigation = useNavigation();

    const handleSingOut = () => {

        signOut(auth)
        .then(() => {
            navigation.replace('Account')
        })
        .catch(error => alert(error.message))
    }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity 
      onPress={handleSingOut}
      style={styles.button}
      >
          <Text style={styles.buttonText}> Sing out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonText: {
        color:'white',
        fontWeight: '700',
        fontSize: 16,
      },

})