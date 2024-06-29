import React,{useState, useEffect}from "react";
import { Image,View, Text, Alert, Touchable, TouchableOpacity, TextInput, TouchableOpacityBase, FlatList, ScrollView } from 'react-native'
import style from "../assets/style"
import Icon from 'react-native-vector-icons/FontAwesome';
import Base_model from "../Base_model";

let Card_data = ( { item, navigation, param_del = false } ) => {
        // item itu adalah row data dari data API Movie yang berbentuk object

        // console.log(prop.data);
        function movie_detail_page( item ){
            //row ddata result
            // console.log(  item.id );
            navigation.navigate("Detail_page", {id_movie:item.id});
            
        }
        return (
            <TouchableOpacity style={{marginBottom:20}} onPress={()=> { 
                movie_detail_page( item ) 
                } }>
                <View style={ style.row_data.card_data }>

                    <Image style={ style.row_data.card_data.img }
                        source={{ uri: Base_model.get_img_movie( item ) }}
                    >
        
                    </Image>
                    {/* Melayang */}
                    <View style={{
                        position: "absolute",
                        bottom:0,
                        left:0,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        width: "100%",
                        height: "auto",
                        padding: 20,
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 5
                    }}>
                        <Icon name="star" 
                        style={{
                            fontSize: 15,
                            color: "gold",
                            marginTop: 2
                        }}
                        > </Icon> 
                        <Text style={{

                            fontFamily: "poppins",
                            color: "white",
                            fontWeight: 900

                        }}> { item.vote_average } </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    export default Card_data;

