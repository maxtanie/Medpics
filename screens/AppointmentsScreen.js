import React from 'react'
import { StyleSheet, Button, Text, View, StatusBar, ScrollView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import fond from "../assets/appointments/doctor.png";

export default function AppointmentsScreen() {
    return (
        <View style={styles.container}>
        <ScrollView>
            <StatusBar></StatusBar>
            <View style={styles.accountName}>
                <Text style={{ color: "#fff" }}>Appointments</Text>
            </View>
            <View style={styles.blockImage}>
                <Image source={fond}/>
            </View>

            <View style={styles.content}>

            </View>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0
    },
    accountName: {
        padding: 20,
        paddingBottom: 20,
        paddingLeft: 31,
        backgroundColor: "#1565C0",
        
    },
    blockImage: {
        width: "100%",
        height: 226,
        backgroundColor: "#1565C0",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"

    },
    contentProfile: {
        width: "70%",

    },
    content: {
        width: "100%",
        backgroundColor: "#fff",
        height: 500,
        marginTop: -55,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    }
})
