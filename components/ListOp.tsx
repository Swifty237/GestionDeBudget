import React, { useState } from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native"
import data from "../assets/data.json"
import Moment from "moment"
import { IItemProp, EItemProp, itemProp, MItemProp } from "../components/TypeResource"



let arrayIncomes = data.map(obj => obj.incomes) // renvoie un tableau de tableaux
let arrayExpenses = data.map(obj => obj.expenses) // renvoie un tableau de tableaux

const renameId = (op: Array<any>) => {
    let toto: MItemProp

    let arrayRenamedId = op.map((obj) => {

        return obj.map((entry: any) => {
            toto = {
                id: entry._id_income ? entry._id_income : entry._id_expense,
                date: entry.date,
                comments: entry.comments,
                category: entry.category,
                amount: entry.amount
            }
            return toto
        })
    })

    return arrayRenamedId
}

const mergedArray = renameId(arrayIncomes).concat(renameId(arrayExpenses))

const sortedArray = mergedArray.flat().sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date)
})

const expensesId = arrayExpenses.flat().map(e => e._id_expense)



const ListOp = () => {

    return (
        <View style={styles.container}>
            <View style={styles.operation}>
                <ScrollView>
                    {
                        sortedArray.slice(0, 9).map((obj, index) => (
                            <View key={index} style={{ marginVertical: 10, borderWidth: 2, borderColor: expensesId.includes(obj.id) ? "red" : "#2ecc71", marginHorizontal: 10, backgroundColor: "white" }}>
                                <Text style={{ margin: 7, color: expensesId.includes(obj.id) ? "red" : "#2c3e50", fontSize: 18 }}>{obj.amount + (expensesId.includes(obj.id) ? " -" : "")}</Text>
                                <Text style={{ margin: 7, color: "#2c3e50" }}>{obj.category}</Text>
                                <Text style={{ margin: 7, color: "#bdc3c7", fontWeight: "bold", fontSize: 12 }}>{Moment(obj.date).format("DD/MM/YYYY - h:mm")}</Text>
                            </View>))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    operation: {
        width: "90%",
        height: "90%",
        backgroundColor: "#34495e"
    }
})

export default ListOp