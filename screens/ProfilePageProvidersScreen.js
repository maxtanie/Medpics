import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, Image } from 'react-native';
// import ImagePicker from "react-native-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ProfilePageProvidersScreen() {

    // function handleChoosePhoto() {
    //     const options = {};
    //     ImagePicker.launchImageLibrary(options, response => {
    //         console.log("response", response);
    //     })
    // }
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar></StatusBar>
                <View style={styles.accountName}>
                    <Text style={{ color: "#fff" }}>My Profile Page</Text>
                </View>
                <View style={styles.accountSettings}>
                    <Text style={{ color: "#fff", textTransform: "uppercase", fontSize: 24 }}>My Profile</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                    <View style={styles.contentProfile}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: "#1565C0", marginTop: -25, borderWidth: 3, borderStyle: "solid", borderColor: "#DCEEFE", }}>
                                <FontAwesome5 name="camera" size={20} color="#fff" style={{ textAlign: "center", lineHeight: 45 }} />
                            </View>
                            <View style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: "#fff", borderWidth: 3, borderStyle: "solid", borderColor: "#1565C0", marginTop: -50 }}></View>
                            <View style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: "#1565C0", marginTop: -25, borderWidth: 3, borderStyle: "solid", borderColor: "#DCEEFE", }}>
                                <FontAwesome5 name="user" size={20} color="#fff" style={{ textAlign: "center", lineHeight: 45 }} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 15 }}>
                    <Text style={{ textAlign: "center", marginTop: 15, marginBottom: 35, fontSize: 23, color: "#4F9FEA", fontWeight: "bold" }}>Personal Information</Text>
                    <TextInput placeholder="First name*" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 0 }} />
                    <TextInput placeholder="Last name*" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 0, marginTop: 15 }} />
                    <TextInput placeholder="Email adress" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 0, marginTop: 15 }} />
                    <TextInput onChangeText={(value) => console.log(value)} placeholder="New password" placeholderTextColor="#4F9FEA" secureTextEntry={true} style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 0, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />
                    <TextInput onChangeText={(value) => console.log(value)} placeholder="Retype password" placeholderTextColor="#4F9FEA" secureTextEntry={true} style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 0, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />
                </View>

                <View style={{ padding: 15 }}>
                    <Text 
                    style={{ 
                        textAlign: "center", 
                        marginTop: 15, 
                        marginBottom: 35, 
                        fontSize: 23, 
                        color: "#4F9FEA", 
                        fontWeight: "bold" 
                        }}>Contact Details</Text>
                    <TextInput placeholder="Adress" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 0 }} />
                    <TextInput placeholder="Zipcode" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 0, marginTop: 15 }} />
                    <TextInput placeholder="Choose a country*" placeholderTextColor="#4F9FEA" style={{ backgroundColor: "#F1F8FE", padding: 10, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", borderRadius: 0, marginTop: 15 }} />
                    <TextInput onChangeText={(value) => console.log(value)} placeholder="State" placeholderTextColor="#4F9FEA" secureTextEntry={true} style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 0, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />
                    <TextInput onChangeText={(value) => console.log(value)} placeholder="Town" placeholderTextColor="#4F9FEA" secureTextEntry={true} style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 0, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />
                    <TextInput onChangeText={(value) => console.log(value)} placeholder="Phone" placeholderTextColor="#4F9FEA" secureTextEntry={true} style={{ backgroundColor: "#F1F8FE", padding: 10, borderRadius: 0, paddingLeft: 25, paddingRight: 25, color: "#4F9FEA", outline: "none", marginTop: 15 }} />
                </View>



                {/* <NavigationContainer>
                    <MyTabs />
                </NavigationContainer> */}
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
        paddingLeft: 31,
        backgroundColor: "#1565C0",
    },
    accountSettings: {

        paddingTop: 40,
        paddingLeft: 31,
        height: 144,
        backgroundColor: "#1565C0",
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50
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

