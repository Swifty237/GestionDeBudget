import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native"
import data from "../assets/data.json"
import Moment from "moment"
import { MItemProp, IItemProp, itemProp, EItemProp } from "../components/TypeResource"
import { Picker } from "@react-native-picker/picker"



let arrayIncomes = data.map(obj => obj.incomes)
let arrayExpenses = data.map(obj => obj.expenses)

//Cette fonction me permet de transformer _id_incomes et _id_expenses en id pour la fusion
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

const mergedArray = renameId(arrayIncomes).concat(renameId(arrayExpenses)) // <= Fusion


const sortedArray = mergedArray.flat().sort((a, b) => { // <= Tri par date croissante
    return Date.parse(b.date) - Date.parse(a.date)
})

const expensesId = arrayExpenses.flat().map(e => e._id_expense)



// Ecran de compte
const AccountScreen = () => {
    const [selectedItem, setSelectedItem] = useState()


    const findUser = (entry: string) => {
        data.forEach((item, i) => {
            if (item.incomes.map(e => e._id_income).includes(entry) || item.expenses.map(e => e._id_expense).includes(entry)) {
                return data[i].user
            }
        })
    }

    return (
        <View>
            <View style={styles.pickerBox}>
                <Picker
                    dropdownIconColor="#ecf0f1"
                    style={styles.picker}
                    selectedValue={selectedItem}
                    onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}>
                    <Picker.Item label="Toutes les opérations" value="Total" />
                    {
                        data.map((e, i) => e.user ? <Picker.Item key={i} label={e.user} value={e._id} /> : null)
                    }
                </Picker>
            </View>
            <ScrollView>
                {
                    sortedArray.map((obj, index) => (console.log(findUser(obj.id)),
                        <View key={index} style={{ marginVertical: 10, backgroundColor: index % 2 != 0 ? "#bdc3c7" : "" }}>
                            <Text style={{ margin: 7, color: expensesId.includes(obj.id) ? "red" : "black", fontSize: 20 }}>{obj.amount + (expensesId.includes(obj.id) ? " -" : "")}</Text>
                            <Text style={{ margin: 7, color: "black", fontWeight: "bold", fontSize: 16 }}>Mon user</Text>
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
    },

    pickerBox: {
        backgroundColor: "#34495e"
    },

    picker: {

    }
})

export default AccountScreen