import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const handleDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gastos</Text>
      <Image source={require("../assets/img/gastoslogo.png")} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Hello! Let me be your guide to your finance.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper, { backgroundColor: "#1e280e" }]} onPress={handleLogin}>
          <Text style={[styles.loginButtonText, { color: "white" }]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleSignup}>
          <Text style={[styles.loginButtonText, { color: "#1e280e" }]}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleDashboard}>
        <Text>Continue as Guest</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 35, 
    fontWeight: 'bold', 
    color: '#748062',
    marginVertical: "20%",
  },
  logo: {
    marginTop: -20,
    width: '80%', 
    height: 250, 
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    width: '80%',
    textAlign: 'center',
    color: '#748062',
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: "20%",
    borderWidth: 2,
    borderColor: '#1e280e',
    width: "80%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 100,
  },
  loginButtonText: {
    fontWeight: 'bold',
  }
});

export default HomeScreen;
