import { TextInput } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const AppTextInput = ({ placeholder, secureTextEntry }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={Colors.darkText}
            secureTextEntry={secureTextEntry}
            style={{
                fontSize: FontSize.small,
                padding: Spacing * 2,
                backgroundColor: Colors.lightPrimary,
                borderRadius: Spacing,
                marginVertical: Spacing,
            }}
        />
    )
}

export default AppTextInput;