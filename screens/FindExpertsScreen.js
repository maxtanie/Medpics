import React from 'react'
import { StyleSheet, Button, Text, View, StatusBar, ScrollView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import ImagePicker from "react-native-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import fond from "../assets/find-experts/fond.png";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Aort')}
            />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function FindExpertsScreen() {

    // function handleChoosePhoto() {
    //     const options = {};
    //     ImagePicker.launchImageLibrary(options, response => {
    //         console.log("response", response);
    //     })
    // }

    const linkName = ["Doctors", "Specialits", "All"];
    const specialistsName = [
        {
            name: "Abdomen",
            icon: ""
        },
        {
            name: "Aorta",
            icon: ""
        },
        {
            name: "Elbow",
            icon: ""
        },
        {
            name: "Foot & Ankle",
            icon: ""
        },
        {
            name: "Back pain",
            icon: ""
        },
        {
            name: "Others",
            icon: ""
        },

    ]

    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar></StatusBar>
                <View style={styles.accountName}>
                    <Text style={{ color: "#fff" }}>Find Experts</Text>
                </View>
                <View style={styles.accountSettings}>
                    <Image source={fond} style={{ width: "63%", height: 140, marginTop: -55 }} />
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                    <View style={{ width: "70%", height: 50, backgroundColor: "#fff", borderRadius: 50, marginTop: -25, textAlign: "center" }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", fontSize: 25 }}>
                            {linkName.map((link, index) => {
                                return (
                                    <Text key={index} style={{ lineHeight: 50, color: "#1665C1", fontSize: 15 }}>{link}</Text>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <View>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Abdomen">
                            <Stack.Screen name="Abdomen" component={HomeScreen} />
                            <Stack.Screen name="Aort" component={DetailsScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
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
        paddingBottom: 40,
        paddingLeft: 31,
        backgroundColor: "#1565C0",
    },
    accountSettings: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 40,
        paddingLeft: 31,
        height: 134,
        backgroundColor: "#1565C0",
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20
    },
    accountSettingsNav: {
        width: "83%",
        minHeight: 421,
        padding: 40,
        marginTop: -39,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#FEFEFE",
        borderRadius: 12,
        shadowColor: "#f9f9f9",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1,
        elevation: 5,

    },
    contentProfile: {
        width: "70%",

    }
})

