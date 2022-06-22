import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Button from "../components/Button"
import ListOp from "../components/ListOp"
import data from "../assets/data.json"
import { MItemProp, IItemProp, itemProp, EItemProp } from "../components/TypeResource"


let arrayIncomes = data.map(obj => obj.incomes) // <= renvoie un tableau de tableaux d'objet
let arrayExpenses = data.map(obj => obj.expenses) // <= renvoie un tableau de tableaux d'objet

const IAmount = arrayIncomes.flat().map(obj => parseFloat(obj.amount.substring(1).split(",").join("")))
const EAmount = arrayExpenses.flat().map(obj => parseFloat(obj.amount.substring(1).split(",").join("")))


let ITotal = 0
for (let i = 0; i < IAmount.length; i++) {
    ITotal += IAmount[i]
}


let ETotal = 0
for (let i = 0; i < EAmount.length; i++) {
    ETotal += EAmount[i]
}

// Ecran principal
const HomeScreen = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonsBox}>
                <View style={styles.incomeBtn}>
                    <Button label="Ajouter un revenu" textStyle={styles.incomeTxt} onPress={() => navigation.navigate("Incomes")} />
                </View>
                <View style={styles.expenseBtn}>
                    <Button label="Ajouter une dépense" textStyle={styles.expenseTxt} onPress={() => navigation.navigate("Expenses")} />
                </View>

            </View>
            <View style={styles.lastOpBox}>
                <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 20, fontWeight: "bold" }}>Dernières opérations</Text>
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
        backgroundColor: "#34495e"
    },

    buttonsBox: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10
    },

    incomeBtn: {
        height: 55,
        padding: 15,
        borderColor: "#34495e",
        borderWidth: 2,
        backgroundColor: "#ecf0f1"
    },

    expenseBtn: {
        backgroundColor: "#34495e",
        height: 55,
        padding: 15,
        borderWidth: 2,
        borderColor: "#ecf0f1"
    },

    incomeTxt: {
        color: "#34495e",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },

    expenseTxt: {
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
        backgroundColor: "#34495e",
        width: "90%",
        alignItems: "flex-end",
        justifyContent: "center",
        marginEnd: 50
    },

    soldText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10
    },

    debit: {
        fontWeight: "bold"
    },

    credit: {
        fontWeight: "bold"
    }
})

export default HomeScreen