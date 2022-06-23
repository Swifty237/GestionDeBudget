import React, { useState } from "react"
import { Formik } from "formik"
import { View, ScrollView, StyleSheet, Text } from "react-native"
import Input from "../../components/Input"
import Button from "../../components/Button"
import * as yup from "yup"
import DatePicker from "../../components/DatePicker"
import { Picker } from "@react-native-picker/picker"



const Expenses = () => {

    const validationSchema = yup.object().shape({
        name: yup.string().required("Champ obligatoire"),
        firstName: yup.string().required("Champ obligatoire"),
        amount: yup.number().required("Champ obligatoire"),
        date: yup.date().required("Champ obligatoire"),
        category: yup.string().required("Champ obligatoire"),
        comments: yup.string()
    })

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
            onSubmit={values => console.log(values)}
        >
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
                                    <Picker.Item label="Alimentaires" value="alimentaires" />
                                    <Picker.Item label="Factures" value="factures" />
                                    <Picker.Item label="Transport" value="transport" />
                                    <Picker.Item label="Logement" value="logement" />
                                    <Picker.Item label="Santé" value="sante" />
                                    <Picker.Item label="Divertissement" value="divertissement" />
                                    <Picker.Item label="Vacances" value="vacances" />
                                    <Picker.Item label="Shopping" value="shopping" />
                                    <Picker.Item label="Autres" value="autres" />
                                </Picker>
                            </View>

                        </View>
                        <Input label="Commentaires" placeholder="" value={values.comments} onChangeText={handleChange("comments")} onBlur={() => handleBlur("comments")} error={errors.comments} />
                    </ScrollView>

                    <View style={styles.containerButton}>
                        <View style={styles.register}>
                            <Button label="Enregistrer" textStyle={styles.btnText} onPress={handleSubmit} />
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
        backgroundColor: "#34495e",
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

export default Expenses 