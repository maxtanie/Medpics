import React from 'react'
import { StyleSheet, Button, Text, View, StatusBar, ScrollView, TextInput, Image } from 'react-native';

export default function ConsultsScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar></StatusBar>
                <View style={styles.accountName}>
                    <Text style={{ color: "#fff" }}>Consults</Text>
                </View>
                <View style={styles.blockImage}>

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
        backgroundColor: "#1565C0"

    },
    contentProfile: {
        width: "70%",

    }
})
