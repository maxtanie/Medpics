import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Sidebar extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.backgroudFont}>
                    <View style={{ width: 120, height: 120, borderRadius: 100, backgroundColor: "#fff", borderWidth: 5, borderStyle: "solid", borderColor: "#DCEEFE" }}>
                        <FontAwesome5 name="lock" size={60} color="#196ECF" style={{ textAlign: "center", lineHeight: 110 }} />
                    </View>
                </View>

                <View style={styles.container}>
                    <DrawerNavigatorItems {...this.props} />
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        marginBottom: 25
    },
    backgroudFont: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: 50,
        backgroundColor: "#196ECF",

    }
})