import React from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"
import data from "../assets/data.json"
import { LineChart, BarChart, PieChart } from "react-native-chart-kit"
import { ScrollView } from "react-native-gesture-handler"


let arrayIncomes = data.map(obj => obj.incomes) // renvoie un tableau de tableaux
let arrayExpenses = data.map(obj => obj.expenses) // renvoie un tableau de tableaux
const screenWidth = Dimensions.get("window").width
const chartConfig = {
    backgroundGradientFrom: "#34495e",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#34495e",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
}

const pieData = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "New York",
        population: 8538000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
]

const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43]
        }
    ]
}

const graphStyle = "transparent"

// Ecran de stats
const StatsScreen = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.bezier}>
                    <Text style={{ color: "black", textAlign: "center", marginTop: 5 }}>Line chart Bezier</Text>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={screenWidth} // from react-native
                        height={200}
                        yAxisLabel="€"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={chartConfig}
                        bezier
                    />
                </View>
                <View style={styles.pieCh}>
                    <Text style={{ color: "black", textAlign: "center", marginTop: 5, borderBottomWidth: 5, borderColor: "#34495e" }}>Pie chart</Text>
                    <PieChart
                        data={pieData}
                        width={screenWidth}
                        height={200}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"none"}
                        paddingLeft={"0"}
                        center={[5, 5]}
                    />
                </View>
                <View style={styles.barCh}>
                    <Text style={{ color: "black", textAlign: "center", marginTop: 5 }}>Bar chart</Text>
                    <BarChart
                        style={undefined}
                        data={barData}
                        width={screenWidth}
                        height={200}
                        yAxisLabel="€"
                        yAxisSuffix=""
                        chartConfig={chartConfig}
                        verticalLabelRotation={0}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
    },

    bezier: {
        flex: 1
    },

    barCh: {
        flex: 1
    },

    pieCh: {
        flex: 1,
        borderBottomWidth: 5,
        borderColor: "#34495e"
    }
})

export default StatsScreen