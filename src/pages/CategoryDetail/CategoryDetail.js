import React, { useState, useEffect } from "react"
import { Dimensions, SafeAreaView, FlatList, View, Text, TouchableOpacity, Modal, Alert, ActivityIndicator } from "react-native"
import styles from "./CategoryDetail.style"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from "../../utils/parseContentData"
import { formatDistance, parseISO } from "date-fns"
import { tr } from "date-fns/locale"

const CategoryDetail = (props) => {
    const { id, title } = props.route.params
    const [visible, setVisible] = useState(false)
    const [message, setMessage] = useState("")
    const [messageList, setMessageList] = useState([]);
    const [loading, setLoading] = useState(false)
    // props.route.title="eee"


    useEffect(() => {
        props.navigation.setOptions({ title: title.toUpperCase() })

        //console.log(auth().currentUser.email.split('@')[0])
        /*database()
            .ref('/category')
            .on('value', snapshot => {
                var result = Object.keys(snapshot.val()).map((key) => {
                    return { ...snapshot.val()[key], id: key }
                })
                setCategory(result)
            });*/
        setLoading(true)
        database().ref('/messages').on("value", snapshot => {
            //const contentData = snapshot.val();
            const contentData = snapshot.val()
            const detailMessage = []
            snapshot.forEach(element => {
                if (element.val().categoryId == id) {
                    detailMessage.push(element.val())
                }
            });
            const parsedData = parseContentData(detailMessage || {})
            setMessageList(parsedData)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <SafeAreaView style={styles.container}><ActivityIndicator color="white" /></SafeAreaView>
    }
    function renderItem({ item }) {
        const formattedDate = formatDistance(parseISO(item.date), new Date(), {
            addSuffix: true, locale: tr
        });

        return (
            <View style={styles.message}>
                <View style={styles.inner_item}>
                    <Text style={styles.username}>{item.userName}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
                <Text style={styles.messageText}>{item.message}</Text>
            </View>
        )
    }
    function newCategory() {
        setVisible(!visible)
    }
    function onClose() {
        setVisible(!visible)
    }
    function addCategory() {
        const newReference = database().ref('/messages').push();
        newReference.set({ date: new Date().toISOString(), id: newReference.key, message: message, categoryId: id, userId: auth().currentUser.uid, userName: auth().currentUser.email.split('@')[0] })
        setMessage("")
        setVisible(!visible)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.categoryTitle}>{title} Odası Kuruldu</Text>
            <FlatList data={messageList} renderItem={renderItem} keyExtractor={key => key.id} />
            <Text style={styles.plus} onPress={newCategory}>+</Text>
            <Modal animationType="fade" transparent={true} visible={visible} >
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", backgroundColor: "#00000099" }}>
                    <View style={{ width: Dimensions.get("window").width, backgroundColor: "white", borderRadius: 10, padding: 20 }}>
                        <TouchableOpacity style={styles.close} onPress={onClose} >
                            <Icon name="close-circle" size={30} />
                        </TouchableOpacity>
                        <Input value={message} numberOfLines={4} onChangeText={(e) => setMessage(e)} placeholder="Mesajınız" />
                        <Button title="Kaydet" onPress={addCategory} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default CategoryDetail;