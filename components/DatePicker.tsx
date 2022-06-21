/**
 * Composant permettant de faire un DatePicker avec un textInput et un Presseable
 */

import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native"
import Moment from "moment"
import DateTimePicker from "@react-native-community/datetimepicker"
import Icon from "react-native-vector-icons/Entypo"


type Props = {
    label: string,
    date: string,
    onChangeDate: (date: string) => void,
    error?: string,
}

const DatePicker = ({ label, date, onChangeDate, error }: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const onsubmit = (date: Date) => {
        setShow(false)
        onChangeDate(Moment(date).format("YYYY-MM-DD"))
    }
    return (
        <View style={styles.container}>
            <View style={styles.labelBox}>
                <Text style={styles.labelStyle}>{label}</Text>
            </View>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} value={date} editable={false} />
                <TouchableOpacity onPress={() => setShow(true)} style={styles.icon}>
                    <Icon name="calendar" size={35} color="#00a3e1" />
                </TouchableOpacity>
            </View>

            {show && <DateTimePicker
                mode="date"
                value={new Date()}
                onChange={(event, date) => {
                    if (date != undefined) {
                        onsubmit(date)
                    }
                }}
                dateFormat="day month year"
            />}
            {/* Nous permet d'afficher la modal de date */}
            {error != undefined && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputBox: {
        flex: 1,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        width: 300,
        height: 45,
        color: "black"
    },

    input: {
        color: "black",
        textAlign: "center"
    },

    icon: {
        position: "absolute",
        right: 10,
        top: 5,
    },
    text: {
        color: "white",
        textAlign: "center",
    },
    error: {
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
export default DatePicker