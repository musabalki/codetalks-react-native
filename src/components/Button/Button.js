import React from "react"
import { TouchableOpacity,Text, ActivityIndicator } from "react-native";
import styles from "./Button.style"

const Button = ({title,onPress,theme="first",loading=false}) => {

    return (
        <TouchableOpacity disabled={loading} style={styles.button_container} onPress={onPress}>
           {
               loading ? <ActivityIndicator color="white"/> :  <Text style={styles.button_text}>{title}</Text>
           }
        </TouchableOpacity>
    );
}

export default Button;