import React, { useState } from "react"
import { Formik } from "formik"
import { View, ScrollView, StyleSheet } from "react-native"
import Input from "../../components/Input"
import Btn from "../../components/Button"
import * as yup from "yup"
import uuid from "react-native-uuid"
import Realm from "realm"
import Moment from "moment"




const validationSchema = yup.object().shape({
    name: yup.string().required("Champ obligatoire"),
    firstName: yup.string().required("Champ obligatoire")
})


const mainSchema = {
    name: "Main",
    properties: {
        _id: "string",
        name: "string",
        firstName: "string",
        date: "string"
    },
    primaryKey: "_id"
}

const addUser = (values: any) => {
    console.log("in")

    Realm.open({
        path: "default.realm",
        schema: [mainSchema],
        deleteRealmIfMigrationNeeded: true

    }).then(realm => {
        console.log(values)

        realm.write(() => realm.create("Main", {
            _id: uuid.v4(),
            name: values.name,
            firstName: values.firstName,
            date: Moment(Date.now()).format("DD/MM/YYYY")
        }))

        console.log(realm)
        realm.close()

    }).catch(error => { console.error(error) })

    console.log("out")
}

const Users: React.FC = () => {

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                name: "",
                firstName: ""
            }}
            onSubmit={addUser} >

            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                <View style={styles.container}>
                    <ScrollView>
                        <Input label="Nom" placeholder="" value={values.name} onChangeText={handleChange("name")} onBlur={() => handleBlur("name")} error={errors.name} />
                        <Input label="Prénom" placeholder="" value={values.firstName} onChangeText={handleChange("firstName")} onBlur={() => handleBlur("firstName")} error={errors.firstName} />
                    </ScrollView>

                    <View style={styles.containerButton}>
                        <View style={styles.register}>
                            <Btn label="Enregistrer" textStyle={styles.btnText} onPress={handleSubmit} />
                        </View>
                    </View>
                </View>
            )}
        </Formik >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    containerButton: {
        marginVertical: 15,
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

})

export default Users