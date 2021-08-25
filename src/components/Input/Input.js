import React from "react"
import {TextInput,View} from "react-native"
import styles from "./Input.style"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({icon,placeholder,value,onChangeText,secure=false,numberOfLines=1}) => {
    return (
       <View style={styles.container}>
            <TextInput  numberOfLines={numberOfLines} secureTextEntry={secure} value={value} onChangeText={onChangeText} style={styles.input} placeholder={placeholder} placeholderTextColor={styles.placeholder.color} />
            <Icon name={icon} style={styles.icon} />
       </View>
    );
}

export default Input;