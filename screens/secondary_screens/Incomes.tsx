import React, { useState } from "react"
import { Formik } from "formik"
import { View, ScrollView, StyleSheet, Text } from "react-native"
import Input from "../../components/Input"
import Btn from "../../components/Button"
import * as yup from "yup"
import DatePicker from "../../components/DatePicker"
import { Picker } from "@react-native-picker/picker"
import uuid from "react-native-uuid"
import Realm from "realm"




const validationSchema = yup.object().shape({
    name: yup.string().required("Champ obligatoire"),
    firstName: yup.string().required("Champ obligatoire"),
    amount: yup.number().required("Champ obligatoire"),
    date: yup.date().required("Champ obligatoire"),
    category: yup.string().required("Champ obligatoire"),
    comments: yup.string()
})



const incomesSchema = {
    name: "Income",
    properties: {
        _id: "string",
        category: "string",
        amount: "string",
        comments: "string",
        date: "string"
    },
    primaryKey: '_id'
}

export const mainSchema = {
    name: "Main",
    properties: {
        _id: "string",
        user: "string",
        incomes: "Income"
    },
}


const Incomes = () => {

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                name: "",
                firstName: "",
                amount: "",
                date: "",
                category: "",
                comments: ""
            }}
            onSubmit={values => {

                Realm.open({
                    path: "default.realm",
                    schema: [mainSchema, incomesSchema],
                    deleteRealmIfMigrationNeeded: true,
                }).then(realm =>
                    realm.write(() =>
                        realm.create("Main", {
                            _id: "1",
                            user: values.name,
                            incomes: {
                                _id: uuid.v4(),
                                category: values.category,
                                amount: values.amount,
                                comments: values.comments,
                                date: values.date
                            }
                        })
                    ))

                let realmDb = new Realm({ path: "default.realm" })
                console.log(realmDb.objects("Main"))
                console.log("tata")
            }
            } >

            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                <View style={styles.container}>

                    <ScrollView>
                        <Input label="Nom" placeholder="" value={values.name} onChangeText={handleChange("name")} onBlur={() => handleBlur("name")} error={errors.name} />
                        <Input label="Prénom" placeholder="" value={values.firstName} onChangeText={handleChange("firstName")} onBlur={() => handleBlur("firstName")} error={errors.firstName} />
                        <Input label="Montant" placeholder="" value={values.amount} onChangeText={handleChange("amount")} onBlur={() => handleBlur("amount")} keyBoardNumeric={true} error={errors.amount} />
                        <DatePicker label="Date" date={values.date} onChangeDate={handleChange("date")} error={errors.date} />

                        <View style={styles.pickerContainer}>
                            <View style={styles.labelBox}>
                                <Text style={styles.labelStyle}>Catégorie</Text>
                            </View>

                            <View style={styles.pickerBox}>
                                <Picker
                                    dropdownIconColor="black"
                                    style={styles.picker}
                                    selectedValue={values.category}
                                    onValueChange={handleChange("category")}>
                                    <Picker.Item style={{ color: "grey" }} label="Choisissez une catégorie" value=" " />
                                    <Picker.Item label="Salaire et assimilé" value="salaire et assimilé" />
                                    <Picker.Item label="Revenu financier" value="Revenu Financier" />
                                    <Picker.Item label="Rente" value="rente" />
                                    <Picker.Item label="Pension alimentaire" value="Pension Alimentaire" />
                                    <Picker.Item label="Allocation chômage" value="Allocation Chomage" />
                                    <Picker.Item label="Prestations sociales" value="Prestations Sociales" />
                                    <Picker.Item label="Revenu foncier" value="Revenu Foncier" />
                                    <Picker.Item label="Revenu exceptionnel" value="Revenu Exceptionnel" />
                                    <Picker.Item label="Autre revenu" value="Autre revenu" />
                                </Picker>
                            </View>
                        </View>

                        <Input label="Commentaires" placeholder="" value={values.comments} onChangeText={handleChange("comments")} onBlur={() => handleBlur("comments")} error={errors.comments} />
                    </ScrollView>

                    <View style={styles.containerButton}>
                        <View style={styles.register}>
                            <Btn label="Enregistrer" textStyle={styles.btnText} onPress={() => handleSubmit()} />
                        </View>
                    </View>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    containerButton: {
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 15
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },

    register: {
        backgroundColor: "#2c3e50",
        marginEnd: 5,
        height: 50,
        padding: 15,
        borderRadius: 5
    },

    close: {
        backgroundColor: "black",
        marginStart: 5,
        height: 50,
        padding: 15,
        borderRadius: 5
    },

    pickerContainer: {
        flex: 1,
        marginVertical: 30
    },

    pickerBox: {
        flex: 1,
        borderWidth: 1,
        borderBottomColor: "grey",
        borderRadius: 5,
        width: 300,
        height: 45,
    },

    picker: {
        color: "black",
    },

    labelBox: {

    },

    labelStyle: {
        color: "black",
        marginStart: 10,
        marginBottom: 5
    }
})

export default Incomes