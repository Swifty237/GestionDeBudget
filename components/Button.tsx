import React from "react";
import { TouchableOpacity, Text } from "react-native"

type buttonType = {
    label: string
    textStyle: {}
    onPress: () => any
}

export default function Button({ label, textStyle, onPress }: buttonType) {
    return (
        <TouchableOpacity onPress={onPress} >
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    )
}

