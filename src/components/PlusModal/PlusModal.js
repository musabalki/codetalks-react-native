import React from "react"
import { SafeAreaView } from "react-native";
import styles from "./PlusModal.style"

const PlusModal = ({ onPressText,onPressAddButton,onClose,text,onChangeText }) => {
    return (
        <View>
            <Text style={styles.plus} onPress={onPressText}>+</Text>
            <Modal animationType="fade" transparent={true} visible={visible} >
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", backgroundColor: "#00000099" }}>
                    <View style={{ width: Dimensions.get("window").width, backgroundColor: "white", borderRadius: 10, padding: 20 }}>
                        <TouchableOpacity style={styles.close} onPress={onClose} >
                            <Icon name="close-circle" size={30} />
                        </TouchableOpacity>
                        <Input value={text} onChangeText={(e) => onChangeText(e)} placeholder="Oda adı giriniz" />
                        <Button title="Kaydet" onPress={onPressAddButton} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default PlusModal;