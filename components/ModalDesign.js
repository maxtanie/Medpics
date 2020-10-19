
import React from 'react'
import { StyleSheet, Button, Text, View, StatusBar, ScrollView, TextInput, Image } from 'react-native';

function ModalDesign() {
    return (
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Forgot Password</Text>
            <View style={{paddingLeft: 15, paddingRight: 15}}>
                <View>
                    <Text style={{color: "#4F9FEA"}} >Enter your email address to reset your password.</Text>
                </View>
                <View style={{marginTop: 20 }}>
                    <TextInput placeholder="Email" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 50, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 0 }} />
                </View>

                <Button title="Send" buttonStyle={{ marginTop: 20, marginBottom: 0, backgroundColor: "#1976D2", padding: 15, borderRadius: 0 }} />

                    <TouchableHighlight
                        style={{ ...styles.openButton, marginTop: 25 }}
                        onPress={() => { setModalForgotPasswordVisible(!modalForgotPassword);}}>    

                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableHighlight>
                </View>
        </View>
    )
}