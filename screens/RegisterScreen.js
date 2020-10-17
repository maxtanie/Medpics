import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import styled from "styled-components/native";
import Screen from "./Screen"


export default function RegisterScreen({ navigation }) {
    return (
        <Container>
            <ScrollView>
                <Screen navigation={navigation} />
                <StatusBar></StatusBar>
                <Text>Hello</Text>
            </ScrollView>
        </Container>

    )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;