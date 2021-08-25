import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#121725",
        padding:10,
    },
    plus: {
        position: "absolute",
        bottom: 10, right: 10,
        backgroundColor: "#00bcd4",
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "white",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: 65,
        color: "white",
        fontSize: 40,
        fontWeight: "bold"
    },
    close: {
        textAlign: "right",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "absolute", right: 0, top: 0
    },
    message:{
        flex:1,
        backgroundColor:"white",
        marginTop:10,
        marginBottom:10,
        padding:15,
        borderRadius:10
    },
    messageText:{
        flex:1,
    },
    categoryTitle:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
    date:{
        color:"gray"
    },
    inner_item:{
        flexDirection:"row", 
        justifyContent:"space-between"
    },
    username:{
        fontWeight:"bold"
    }
})

export default styles