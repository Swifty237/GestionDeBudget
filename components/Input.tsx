import React, { useState } from "react"
import { Text, View, TextInput, StyleSheet } from "react-native"


type onChangeType = (entry: string) => any
type onBlurType = () => any

export type inputType = {
    placeholder: string
    value: any
    label: string
    error: string | undefined
    onChangeText: onChangeType
    onBlur: onBlurType
    keyBoardNumeric?: boolean
}

export default function Input({ label, placeholder, value, onChangeText, error, onBlur, keyBoardNumeric }: inputType) {

    return (
        <View style={styles.container}>
            <View style={styles.labelBox}>
                <Text style={styles.labelStyle}>{label}</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                keyboardType={keyBoardNumeric ? "numeric" : "default"} />

            <Text style={styles.text}>{error}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10
    },

    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        width: 300,
        height: 45,
        color: "black"
    },

    text: {
        color: "red",
        fontSize: 10,
        marginTop: 3,
        paddingLeft: 10,
        width: 300
    },

    labelBox: {

    },

    labelStyle: {
        color: "black",
        marginStart: 10,
        marginBottom: 5
    }
})