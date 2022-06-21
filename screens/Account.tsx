import React from "react";
import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native"
import data from "../assets/data.json"
import Moment from "moment"
import { MItemProp, IItemProp, itemProp, EItemProp } from "../components/TypeResource"

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
    return Date.parse(a.date) - Date.parse(b.date)
})

const expensesId = arrayExpenses.flat().map(e => e._id_expense)

const AccountScreen = () => {

    return (
        <View>
            <ScrollView>
                {
                    sortedArray.map((obj, index) => (
                        <View key={index} style={{ marginVertical: 10, backgroundColor: index % 2 != 0 ? "#bdc3c7" : "" }}>
                            <Text style={{ margin: 7, color: expensesId.includes(obj.id) ? "red" : "black", fontSize: 20 }}>{obj.amount + (expensesId.includes(obj.id) ? " -" : "")}</Text>
                            <Text style={{ margin: 7, color: "black", fontWeight: "bold", fontSize: 16 }}>{obj.category}</Text>
                            <Text style={{ margin: 7, color: "black" }}>{obj.comments}</Text>
                            <Text style={{ margin: 7, color: "grey", fontWeight: "bold" }}>{Moment(obj.date).format("DD/MM/YYYY - h:mm")}</Text>
                        </View>))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        borderWidth: 10,
        borderColor: "#black",
        marginVertical: 10
    },

    incomeSeparator: {
        borderWidth: 2,
        borderColor: "#1abc9c",
        marginVertical: 10
    }
})

export default AccountScreen