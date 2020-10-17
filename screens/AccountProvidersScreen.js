import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { NavigationContainer, Link } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home!</Text>
//         </View>
//     );
// }

// function SettingsScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Settings!</Text>
//         </View>
//     );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//     );
// }


export default function AccountProvidersScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar></StatusBar>
                <View style={styles.accountName}>
                    <Text style={{ color: "#fff" }}>My Account</Text>
                </View>
                <View style={styles.accountSettings}>
                    <Text style={{ color: "#fff", textTransform: "uppercase", fontSize: 24 }}>Account Settings</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                    <View style={styles.accountSettingsNav}>

                    </View>
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

    }
})
