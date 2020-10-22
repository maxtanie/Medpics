import React from 'react'
import { StyleSheet, Button, Text, View, StatusBar, ScrollView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import ImagePicker from "react-native-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import fond from "../assets/find-experts/fond.png";

function AppointmentScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Appointment Screen</Text>
            <Button
                title="Go to Consult"
                onPress={() => navigation.navigate('Consult')}
            />
        </View>
    );
}

function ConsultScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Consult Screen</Text>
            <Button
                title="Go to Favorites"
                onPress={() => navigation.navigate('Favorites')}
            />
        </View>
    );
}

function FavoritesScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Favorites Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Appointement"
                onPress={() => navigation.navigate('Appointement')}
            />
            
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
            icon: "user"
        },
        {
            name: "Aorta",
            icon: "user"
        },
        {
            name: "Elbow",
            icon: "user"
        },
        {
            name: "Foot & Ankle",
            icon: "user"
        },
        {
            name: "Back pain",
            icon: "user"
        },
        {
            name: "Others",
            icon: "user"
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
                    <View style={styles.nav}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", fontSize: 25 }}>
                            {linkName.map((link, index) => {
                                return (
                                    <Text key={index} style={{ lineHeight: 50, color: "#1665C1", fontSize: 15 }}>{link}</Text>
                                )
                            })}
                        </View>
                    </View>
                </View>
                

                <View  style={{flex: 1, flexDirection: "row", flexWrap: "wrap", textAlign: "center", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                    {specialistsName.map((name, index) => {
                        return (
                   
                                <View>
                                    <View style={{backgroundColor: "#0F4D94", width: 50, height: 50, borderRadius: 50,  marginRight: 25}}> 
                                        <FontAwesome5 name={name.icon} size={15} style={{textAlign: "center", lineHeight: 50, color: "#fff"}}/>
                                    </View >

                                    <View style={{marginBottom: 25, textAlign: "center"}} >
                                    <Text style={{textAlign:"center", color: "#0F4D94",  marginTop: 8, marginRight: 25}}>{name.name}</Text>
                                    </View>
                                </View>
                        
                        )
                    })}
                </View>

                <View style={styles.findExperts}>
                    <View style={{flex: 1, flexDirection: "row",alignItems: "center"}}>
                        <View>
                            <View>
                                <Image source={require("../assets/find-experts/fond.png")}  style={{width: 85, height: 85, marginRight: 15, borderRadius: 50}} />
                            </View>
                            <View style={{marginTop: 10, backgroundColor: "#32CF19", borderRadius: 15, padding: 5,}}>
                                <Text style={{color: "#fff", fontSize: 13, textAlign: "center"}}>
                                    Verified expert
                                </Text>
                            </View>
                        </View>

                        <View style={{minHeight: 55,  marginTop: -43,}}>
                            <View style={{flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                <Text style={{fontWeight: "bold", color: "#1665C1"}}>Roland Talanow - </Text>
                                <Text style={{color: "#1665C1"}}>Cayman Islands</Text>
                            </View>
                            
                            <View>
                            <Text style={{fontWeight: "bold", color: "#1665C1"}}>Radiology</Text>
                            </View>
                            

                            
                        </View>
                    </View>

                    <View>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Appointment">
                            <Stack.Screen name="Appointment" component={AppointmentScreen}/>
                            <Stack.Screen name="Consult" component={ConsultScreen} />
                            <Stack.Screen name="Favorites" component={FavoritesScreen} />
                            <Stack.Screen name="Profile" component={ProfileScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
        
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0
    },
    nav : {
        width: "70%", 
        height: 50, 
        backgroundColor: "#fff", 
        borderRadius: 50, 
        marginTop: -25, 
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    findExperts: {
        backgroundColor: "white",
        padding: 10,
         paddingTop: 20,
          paddingBottom: 20, 
          marginLeft: 15,
           marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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

