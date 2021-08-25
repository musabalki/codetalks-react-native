import {Dimensions, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"white",
        flex:1,
        position:"relative"
    },
    category:{
        flex:1,
        height:200,
        backgroundColor:"#121725",
        margin:10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:30
    },
    plus:{
        position:"absolute",
        bottom:10,right:10,
        backgroundColor:"#00bcd4",
        width:70,
        height:70,
        borderRadius:50,
        borderWidth:1,
        borderColor:"white",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        lineHeight:65,
        color:"white",
        fontSize:40,
        fontWeight:"bold"
    },
    close:{
        textAlign:"right",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        position:"absolute",right:0,top:0
    }
})

export default styles