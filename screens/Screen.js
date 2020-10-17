import React from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Screen(props) {
    return (
        <View >
            <SafeAreaView style={{ flex: 1 }}>
                <MenuBar>
                    <TouchableOpacity onPress={props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Logos>MedPics</Logos>
                </MenuBar>
            </SafeAreaView>
        </View>
    )
}


const MenuBar = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 64px;
  background-color: #1565C0;
`

const Logos = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 30px;
  color: #fff;
`