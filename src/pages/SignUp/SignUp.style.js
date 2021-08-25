import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        paddingRight:30,
        paddingLeft:30,
        flex:1,
        backgroundColor:"#121725",
        justifyContent:"center"
    },
    icon:{
        fontSize:50
    },
    inner_container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:50
    },
    title:{
        color:"white",
        fontSize:50,
        paddingLeft:10,
        fontWeight:"bold"
    }
})

export default styles