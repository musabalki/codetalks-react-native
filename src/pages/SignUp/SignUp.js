import React, { useState } from "react"
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View, Modal } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import styles from "./SignUp.style"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatDistance, parseISO } from "date-fns"
import database from '@react-native-firebase/database';
import { Formik } from "formik"
import { useEffect } from "react"
import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    function onLogin() {
        navigation.goBack()
    }
    const initial = {
        email: "",
        password: "",
        repassword: ""
    }
    useEffect(() => {
        /*database()
            .ref()
            .once('value')
            .then(snapshot => {
                console.log('User data: ', snapshot.val());
            });*/
        //console.log("test")

    }, [])
    function handleFormSubmit(formValues) {
        setLoading(true)
        if(!formValues.email || !formValues.password || !formValues.repassword){
            Alert.alert("Boş alan bırakmayınız")
            setLoading(false)
            return;
        }
        auth()
            .createUserWithEmailAndPassword(formValues.email, formValues.password)
            .then(() => {
                //Alert.alert("Kayıt başarılı")
                setLoading(false)
                navigation.goBack()
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
                setLoading(false)
            });
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <Icon name="forum" color="white" style={styles.icon} />
                <Text style={styles.title}>Codetalks</Text>
            </View>
            <Formik initialValues={initial} onSubmit={handleFormSubmit}>
                {
                    ({ values, handleSubmit, handleChange, }) => (
                        <>
                            <View>
                                <Input onChangeText={handleChange('email')} values={values.email} placeholder="Email" icon="email" />
                                <Input secure={true} onChangeText={handleChange('password')} values={values.password} placeholder="Password" icon="key" />
                                <Input secure={true} onChangeText={handleChange('repassword')} values={values.repassword} placeholder="Password" icon="key" />
                            </View>
                            <View>
                                <Button title="KAYIT OL" onPress={handleSubmit} loading={loading} />
                                <Button title="GERİ" onPress={onLogin} />
                            </View>
                        </>
                    )
                }
            </Formik>
        </SafeAreaView>
    );
}

export default SignUp;