import React, { useState } from "react"
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View, Modal } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import styles from "./Login.style"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import { Formik } from "formik"

const Login = ({ navigation }) => {
    const [loading,setLoading] = useState(false)
    const initial = {
        email: "",
        password: "",
    }
    function onLogin(formValues) {
        setLoading(true)
        const {email,password} = formValues;
        if(!email || !password){
            Alert.alert("Boş alan bırakmayınız");
            setLoading(false)
            return;
        }
        auth().signInWithEmailAndPassword(email, password).then(res => {
            setLoading(false)
            navigation.navigate("CategoryPage")
            //Alert.alert("Giriş başarılı")
        }).catch(res => {
            setLoading(false)
            Alert.alert("Kullanıcı bilgileri yanlış.")
        })
    }
    function onSignUp() {
        navigation.navigate("SignUpPage")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <Icon name="forum" color="white" style={styles.icon} />
                <Text style={styles.title}>Codetalks</Text>
            </View>
            <Formik initialValues={initial} onSubmit={onLogin}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <View>
                            <Input onChangeText={handleChange('email')} values={values.email} placeholder="Email" icon="email" />
                            <Input secure={true} onChangeText={handleChange('password')} values={values.password} placeholder="Password" icon="key" />
                        </View>
                        <View>
                            <Button loading={loading} title="GİRİŞ YAP" onPress={handleSubmit} />
                            <Button title="KAYIT OL" onPress={onSignUp} />
                        </View>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login
