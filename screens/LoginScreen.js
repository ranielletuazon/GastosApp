import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Touchable} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const LoginScreen = () => {
    const navigation = useNavigation()
    const [secureEntry, setSecureEntry] = useState(true);
    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Ionicons name="arrow-back-outline" color="#1e280e" size={25}/>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hey,</Text>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.headingText}>Back!</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={25} color="#d9e2c7"/>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your email'
                        placeholderTextColor="#d9e2c7"
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name="lock" size={25} color="#d9e2c7" />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your password"
                        placeholderTextColor="#d9e2c7"
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() => {
                        setSecureEntry(prev => !prev);
                    }}>
                        <SimpleLineIcons name={"eye"} size={25} color="#d9e2c7" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>Don't have an account?</Text>
                    <Text style={styles.signupText}>Sign-up</Text>
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        padding: 30,
    },
    backButtonWrapper:{
        height: 40,
        width: 40,
        backgroundColor: "#d9e2c7",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer:{
        marginVertical: 20,
    },
    headingText:{
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 5,
    },
    formContainer:{
        marginTop: 10,
    },
    inputContainer:{
        borderWidth: 1,
        borderColor:"#d9e2c7",
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 10
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 20
    },
    forgotPasswordText:{
        textAlign: "right",
        color: "#4c661e",
        fontWeight: "bold",
        marginVertical: 10,
    },
    loginButtonWrapper:{
        backgroundColor: "#4c661e",
        borderRadius: 100,
        marginTop: 20

    },
    loginText:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 16
    },
    footerContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 4, 
    },
    accountText:{
        color: "#4c661e",
    },
    signupText:{
        color: "#4c661e",
        fontWeight: "bold",
    }
});

export default LoginScreen;