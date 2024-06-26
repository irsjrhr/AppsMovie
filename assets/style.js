
import { StyleSheet } from "react-native";

let fontFamily = "poppins"
let theme_color = "darkcyan"

let style = StyleSheet.create({

    container_app :{
        // padding: 20,
        backgroundColor:"black"
    },

    container_banner:{
        width: "100%",
        backgroundColor:"red",
        height: 300,
        flexDirection: "row",
        header_home:{
            marginTop:30,
            paddingBottom:30,
            flexDirection:"row",
            position: "absolute",
            width: "100%",
            top: 30,
            left:0,
            // marginLeft: 20,
            marginRight: 10,
            zIndex: 99,
            // backgroundColor:"red",
            img_profile : {
                display: "none",
                width: 50,
                height: 50,
                borderRadius: 70
            },
            col_btn_header:{
                // display:"none",
                flex:1, 
                justifyContent:"right", 
                textAlign: "right", 
                // backgroundColor:"red"
            },  
            btn_header :{
                width: 50,
                height:50,
                borderRadius:100,
                backgroundColor: "grey",
                paddingTop:10,
                icon :{
                    textAlign:"center",
                    color: "white"
                },
                position: "absolute",
                right: 30,
    
            },
        },
        container_slide : {
            flex : 1,
            backgroundColor: "red",
            position: "relative"
        },
        position: "relative"
    },

    container_content: {
        padding: 10,
        paddingLeft: 20,
        
    },
    container_data : {
        marginTop: 20,
        marginBottom: 20,
        text: {
            fontSize: 18,
            fontFamily: "poppins",
            color: "white"
        },  
        header:{
            flexDirection: "row",
            col: {
                flex: 1
            }
        }

    },
    row_data :{
        marginTop: 10,
        flexDirection:"row",
        card_data:{
            width: 100,
            height: 140,
            marginRight: 15,
            flexDirection: "row",
            img:{
                flex: 1,
                height: "100%",
                borderRadius: 10,
                resizeMode: "cover"
            }
        }

    },





})



export default style;