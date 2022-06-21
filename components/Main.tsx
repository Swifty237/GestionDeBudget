import "react-native-reanimated"
import "react-native-gesture-handler"
import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/Home"
import AccountScreen from "../screens/Account"
import StatsScreen from "../screens/Stats"


export default function Main() {

    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator initialRouteName="Home" >
            <Screen name="Home" component={HomeScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any
                    iconName = focused ? "home" : "home-outline"

                    return <MaterialCommunityIcons name={iconName} size={35} color={color} />
                },
                tabBarActiveTintColor: "#34495e",
                tabBarInactiveTintColor: "#ecf0f1",
                tabBarInactiveBackgroundColor: "#34495e",
                headerShown: false
            })} />

            <Screen name="Account" component={AccountScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any
                    iconName = focused ? "account-cash" : "account-cash-outline"

                    return <MaterialCommunityIcons name={iconName} size={35} color={color} />
                },
                tabBarActiveTintColor: "#34495e",
                tabBarInactiveTintColor: "#ecf0f1",
                tabBarInactiveBackgroundColor: "#34495e",
                title: "Compte",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#34495e" }
            })} />

            <Screen name="Stats" component={StatsScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any
                    iconName = focused ? "chart-box" : "chart-box-outline";

                    return <MaterialCommunityIcons name={iconName} size={35} color={color} />
                },
                tabBarActiveTintColor: "#34495e",
                tabBarInactiveTintColor: "#ecf0f1",
                tabBarInactiveBackgroundColor: "#34495e",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#34495e" }
            })} />

        </Navigator>
    )
}
