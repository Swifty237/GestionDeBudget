import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Button from "../components/Button"
import ListOp from "../components/ListOp"
import data from "../assets/data.json"
import { IncomeProp, ExpenseProp } from "../components/TypeResource"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"


type HomeProp = {
    Incomes: undefined
    Expenses: undefined
    Users: undefined
}

type NavigationType = {
    navigation: NativeStackNavigationProp<HomeProp>
}


const arrayIncomes: IncomeProp[][] = data.map(obj => obj.incomes) // <= renvoie un tableau de tableaux d'objet
const arrayExpenses: ExpenseProp[][] = data.map(obj => obj.expenses) // <= renvoie un tableau de tableaux d'objet

const IAmount: number[] = arrayIncomes.flat().map(obj => parseFloat(obj.amount.substring(1).split(",").join("")))
const EAmount: number[] = arrayExpenses.flat().map(obj => parseFloat(obj.amount.substring(1).split(",").join("")))


let ITotal = 0
for (let i = 0; i < IAmount.length; i++) {
    ITotal += IAmount[i]
}


let ETotal = 0
for (let i = 0; i < EAmount.length; i++) {
    ETotal += EAmount[i]
}

// Ecran principal
const HomeScreen = ({ navigation }: NavigationType) => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonsBox}>
                <View style={styles.incomeBtn}>
                    <Button label="Revenu" textStyle={styles.incomeTxt} onPress={() => navigation.navigate("Incomes")} />
                </View>
                <View style={styles.userBtn}>
                    <Button label="Utilisateur" textStyle={styles.userTxt} onPress={() => navigation.navigate("Users")} />
                </View>
                <View style={styles.expenseBtn}>
                    <Button label="Dépense" textStyle={styles.expenseTxt} onPress={() => navigation.navigate("Expenses")} />
                </View>
            </View>
            <View style={styles.lastOpBox}>
                <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 20, fontWeight: "bold", color: "white" }}>Dernières opérations</Text>
                <ListOp />
            </View>
            <View style={styles.soldBox}>
                <Text style={styles.debit}>Total débit:{" -" + ETotal.toFixed(2) + " €"}</Text>
                <Text style={styles.credit}>Total crédit:{" " + ITotal.toFixed(2) + " €"}</Text>
                <Text style={styles.soldText}>SOLDE:{" " + (ITotal - ETotal).toFixed(2) + " €"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50"
    },

    buttonsBox: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10
    },

    incomeBtn: {
        flex: 1,
        height: 55,
        padding: 15,
        borderColor: "#2c3e50",
        borderWidth: 2,
        backgroundColor: "#ecf0f1"
    },

    expenseBtn: {
        flex: 1,
        height: 55,
        padding: 15,
        borderColor: "#2c3e50",
        borderWidth: 2,
        backgroundColor: "#ecf0f1"
    },

    userBtn: {
        flex: 1,
        backgroundColor: "#2c3e50",
        height: 55,
        padding: 15,
        borderWidth: 2,
        borderColor: "#ecf0f1"
    },

    incomeTxt: {
        color: "#2c3e50",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },

    expenseTxt: {
        color: "#2c3e50",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },

    userTxt: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },

    lastOpBox: {
        flex: 3,
        width: "100%"
    },

    soldBox: {
        flex: 1,
        backgroundColor: "#2c3e50",
        width: "90%",
        alignItems: "center",
        justifyContent: "center"
    },

    soldText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10
    },

    debit: {
        fontWeight: "bold",
        color: "white"
    },

    credit: {
        fontWeight: "bold",
        color: "white"
    }
})

export default HomeScreen