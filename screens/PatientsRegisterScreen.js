import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar, TextInput, CheckBox, Linking } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import styled from "styled-components/native";
import Screen from "./Screen"



export default function PatientsRegisterScreen({ navigation }) {

    const [isSelected, setSelection] = useState(false);

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
                        <Text style={{ fontSize: 25, color: "#1976D2", fontWeight: "bold", textAlign: "center" }}>Patient Register</Text>
                    </ProfileTitle>

                    <View style={{ flex: 1, padding: 20, marginTop: 10 }}>
                        <TextInput placeholder="Email" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 50, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 50 }} />
                        <TextInput placeholder="Confirm Email" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 50, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />
                        <TextInput onChangeText={(value) => console.log(value)} placeholder="Password" placeholderTextColor="#4F9FEA" secureTextEntry={true} style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 50, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />
                        <TextInput onChangeText={(value) => console.log(value)} placeholder="Repeat Password" placeholderTextColor="#4F9FEA" secureTextEntry={true} style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 50, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />

                        <View style={styles.containers}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>I agree with the <Text style={{ fontWeight: "bold", color: "#1976D2" }}>Terms and conditions.</Text></Text>
                            </View>
                        </View>

                        <Button title="Register" buttonStyle={{ marginTop: 0, marginBottom: 0, backgroundColor: "#1976D2", padding: 15, borderRadius: 50, paddingLeft: 25, paddingRight: 25, }} />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </Container>

    )
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        borderColor: "red"
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color: "#4F9FEA"
    },
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