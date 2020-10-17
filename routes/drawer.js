import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import RegisterScreen from "../screens/PatientsRegisterScreen";
import LoginScreen from "../screens/PatientsLoginScreen";
import AccountProvidersScreen from "../screens/AccountProvidersScreen";
import ProfilePageProvidersScreen from "../screens/ProfilePageProvidersScreen";

import SideBar from "../components/SideBar";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";



const DrawerNavigator = createDrawerNavigator({
    Login: {
        screen: ProfilePageProvidersScreen,
        navigationOptions: {
            title: "Login",
            drawerIcon: ({ tintColor }) => <Feather name="log-in" size={16} color={tintColor} />,

        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home",
            drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            title: "Register",
            drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
        }
    },

},
    {
        contentComponent: props => <SideBar {...props} />,
        contentOptions: {
            inactiveTintColor: "#196ECF",
            activeBackgroundColor: "#DCEEFE",
            activeTintColor: "#196ECF"
        }
    }

)

export default createAppContainer(DrawerNavigator);