import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import SantaAnimation from "../components/Santaclass";

export default class WelcomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            emailId: '',
            password: ''
        }
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
            .then(() => {
                return Alert.alert("Successfully Login")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
    }

    userSignUp = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then(() => {
                return Alert.alert("User Added Successfully")
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            });
    }


    render() {
        return (

            <View style={styles.container}>
                
                <View style={styles.profileContainer}>
                <Text style={styles.title}>Book Santa</Text>
                
                </View>
                <Image source={require("../assets/santa.png")}style={styles.image}/>
                <View style={styles.buttonContainer}>
                    <TextInput
                        style={styles.loginBox}
                        placeholder="example@booksanta.com"
                        placeholderTextColor="#ffff"
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.setState({
                                emailId: text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.loginBox}
                        secureTextEntry={true}
                        placeholder="password"
                        placeholderTextColor="#ffff"
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                    />
                    <TouchableOpacity
                        style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                        onPress={() => { this.userLogin(this.state.emailId, this.state.password) }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.userSignUp(this.state.emailId, this.state.password) }}
                    >
                        <Text style={styles.buttonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8ed1c4',
        height: 800

    },


    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        


    },

    image: {
        height: 150,
        width: 150,
       
    },
    title: {
        fontSize: 150,
        fontWeight: '300',
        paddingTop: 20,
        color: '#ff3d00',
        fontFamily: "Comic Sans MS",

    },
    loginBox: {
        width: 300,
        height: 50,
        borderWidth: 2.5,
        borderColor: 'black',
        fontSize: 20,
        margin: 20,
        paddingLeft: 20
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,

    },
    buttonText: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 400,

    }
})