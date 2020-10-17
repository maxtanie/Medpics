import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar, TextInput, Modal, TouchableHighlight, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import styled from "styled-components/native";
import Screen from "./Screen"



export default function PatientsLoginScreen({ navigation }) {

    const [modalForgotPassword, setModalForgotPasswordVisible] = useState(false);
    const [modalActivationLink, setModalActivationLinkVisible] = useState(false);

    return (
        <Container>
            <ScrollView>
                <Screen navigation={navigation} />
                <StatusBar></StatusBar>
                <SafeAreaView style={{ textAlign: "center" }}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                        <ProfileIcon>
                            <FontAwesome5 name="user-injured" size={50} color="#fff" style={{ lineHeight: 80, textAlign: "center" }} />
                        </ProfileIcon>
                    </View>
                    <ProfileTitle>
                        <Text style={{ fontSize: 25, color: "#1976D2", fontWeight: "bold", textAlign: "center" }}>Patient Login</Text>
                    </ProfileTitle>

                    <View style={{ flex: 1, padding: 20, marginTop: 10 }}>
                        <TextInput placeholder="Email" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 50, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 50 }} />

                        <TextInput onChangeText={(value) => console.log(value)} placeholder="Password" placeholderTextColor="#4F9FEA" secureTextEntry={true} style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 50, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />


                        <Button title="Login" buttonStyle={{ marginTop: 30, marginBottom: 0, backgroundColor: "#1976D2", padding: 15, borderRadius: 0 }} />
                    </View>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="none"
                            transparent={true}
                            visible={modalForgotPassword}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Hello World!</Text>

                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            setModalForgotPasswordVisible(!modalForgotPassword);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                            <TouchableHighlight
                                onPress={() => {
                                    setModalForgotPasswordVisible(true);
                                }}
                            >
                                <Text style={{ color: "#1976D2" }}>Forgot password ? /</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                onPress={() => {
                                    setModalActivationLinkVisible(true);
                                }}
                            >
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                                    <Text style={{ color: "#1976D2" }}> Resend activiation link</Text>
                                </View>

                            </TouchableHighlight>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </Container>

    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;


const ProfileIcon = styled.View`
    width: 90px;
    height: 90px;
    border-radius: 100px;
    background-color: #1565C0;
    margin-top: 62px;
    border-width: 3px;
    border-style: solid;
    border-color: #6FADE5;
`

const ProfileTitle = styled.View`
    margin-top: 14px;
`