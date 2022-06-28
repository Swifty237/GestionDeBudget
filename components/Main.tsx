import "react-native-reanimated"
import "react-native-gesture-handler"
import React from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/Home"
import AccountScreen from "../screens/Account"
import StatsScreen from "../screens/Stats"


export type MainTabsType = {
    Home: undefined
    Account: undefined
    Stats: undefined
}


const Main = () => {

    const { Navigator, Screen } = createBottomTabNavigator<MainTabsType>()

    return (
        <Navigator initialRouteName="Home" >
            <Screen name="Home" component={HomeScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string
                    iconName = focused ? "home" : "home-outline"

                    return <MaterialCommunityIcons name={iconName} size={30} color={color} />
                },
                tabBarActiveTintColor: "#2c3e50",
                tabBarInactiveTintColor: "#ecf0f1",
                tabBarInactiveBackgroundColor: "#2c3e50",
                headerShown: false
            })} />

            <Screen name="Account" component={AccountScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string
                    iconName = focused ? "ios-card" : "ios-card-outline"

                    return <Icon name={iconName} size={30} color={color} />
                },
                tabBarActiveTintColor: "#2c3e50",
                tabBarInactiveTintColor: "#ecf0f1",
                tabBarInactiveBackgroundColor: "#2c3e50",
                title: "Compte",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#2c3e50" }
            })} />

            <Screen name="Stats" component={StatsScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string
                    iconName = focused ? "chart-box" : "chart-box-outline"

                    return <MaterialCommunityIcons name={iconName} size={30} color={color} />
                },
                tabBarActiveTintColor: "#2c3e50",
                tabBarInactiveTintColor: "#ecf0f1",
                tabBarInactiveBackgroundColor: "#2c3e50",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#2c3e50" }
            })} />

        </Navigator>
    )
}

export default Main