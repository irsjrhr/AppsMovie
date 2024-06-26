import React,{useState, useEffect} from "react";
import { Image,View, Text, Alert, Touchable, TouchableOpacity, TextInput, TouchableOpacityBase, FlatList, ScrollView } from 'react-native'
import style from "../assets/style"
import Icon from 'react-native-vector-icons/FontAwesome';
import Api_movie from "../Api/Api_movie";



let Detail_page = ({ route,navigation }) =>{

    const { row_data } = route.params;




    let tinggi_awal = 400;
    let icon_awal = "arrow-up";
    
    let [ event_box_detail, set_event_box_detail ] = useState( false );
    let [ height_box_detail, set_height_box_detail ] = useState( tinggi_awal );
    let [ icon_indicator, set_icon_indicator ] = useState(icon_awal);


    function trigerBoxDetail(){
        if( event_box_detail == false ){
            // Jika belum ada event terjadi pada box detail, maka jalankan 
            set_event_box_detail(true); 
            set_height_box_detail("80%");
            set_icon_indicator("arrow-down");
        }else{
            // Jika sudah ada event terjadi pada box detail, maka kembalikan 
            set_event_box_detail(false); 
            set_height_box_detail(tinggi_awal);
            set_icon_indicator( icon_awal );
        }

    }


    return(
            <View style={ [style.container_app, {flexDirection:"row", position:"relative", height:"100%"}] }>
                

                <Image
                source={{uri:Api_movie.get_img(row_data.backdrop_path)}}
                style={{
                    position: "absolute",
                    top: 0,
                    left :0,
                    width: "100%",
                    height: "100%",
                    resizeMode: "stretch"
                }}
                />

                {/* Box Detail */}
                <View 
                    style={{
                        position:"absolute",
                        bottom:0,
                        left: 0,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        borderTopLeftRadius:40,
                        borderTopRightRadius:40,
                        padding: 20,
                        paddingTop:30,
                        paddingBottom:30,
                        width: "100%",
                        height: height_box_detail,
                        zIndex: 99,
                        flexDirection: "column",
                        justifyContent:'center',
                    }}
                    >

                    {/* Btn Play */}
                    
                        <View style={{
                            height: "auto",
                            // backgroundColor: "darkcyan",
                            // borderRadius: 100,
                            marginBottom: 10,
                            flexDirection: "row",
                            justifyContent:"center",
                            position:'relative'
                            
                        }}>

                            {/* Arrow Button */}
                            <TouchableOpacity onPress={()=>{ trigerBoxDetail() }} style={{ position: "absolute",
                                    right: 0,}}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius:100,
                                    // backgroundColor: "none",
                                    marginTop:-50,
                                    paddingTop:15,
                                    textAlign:"center",
                                    borderWidth:1,
                                    borderColor:"white",

                                }}>

                                    <Icon name={icon_indicator} style={{ textAlign:"center",fontSize:30, color:"white" }}></Icon>
                                </View>
                            </TouchableOpacity>

                            {/* Play Button */}
                            <TouchableOpacity>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius:100,
                                    backgroundColor: "darkcyan",
                                    marginTop:-50,
                                    paddingTop:15,
                                    textAlign:"center"
                                }}>

                                    <Icon name="bookmark" color="white" style={{ textAlign:"center",fontSize:30 }}></Icon>
                                </View>

                            </TouchableOpacity>

                        </View>
       
                    {/* Btn Play */}

                    {/* Durasi */}
                        
                    <View style={{
                            height: "auto",
                            // backgroundColor: "darkcyan",
                            // borderRadius: 100,
                            marginBottom: 30,
                            flexDirection: "row",
                            justifyContent:"center"
                            
                        }}>
                            <Text style={{
                                flex: 1,
                                textAlign:"center",
                                color: "white",
                                fontFamily: "poppins"
                            }}>
                                22 Hours 2 Mins 2 Sec
                            </Text>

                    </View>
                    {/* Durasi */}


                    
    

                    <ScrollView style={ { flexDirection:"column" } }>

                        {/* Judul */}
                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={
                            {
                                textAlign:"center",
                                fontFamily:"poppins",
                                color: "white",
                                fontSize: 30, 

                            }
                            }> 
                            { row_data.title }
                            </Text>

                            
                            
                            <Text style={
                            {
                                display:"none",
                                textAlign:"center",
                                fontFamily:"poppins",
                                color: "#f5f5f5",
                                fontSize: 20, 
                                lineHeight: 30

                            }
                            }> 
                            Barry Jenkis 
                            </Text>
                        </View>
                        {/* End Of Judul */}

                        {/* Detail */}
                        <View style={{
                            flex: 1,
                            marginTop: 30,
                            flexDirection: "row"
                        }}>
                            
                            <View_details judul="Penonton" nilai={row_data.popularity}/>
                            <View_details judul="Negara" nilai={row_data.original_language}/>
                            <View_details judul="Rilis" nilai={row_data.release_date}/>
                
                            
                        </View>
                        {/* Detail */}

                        {/* Story Line */}
                        <View style={{
                            flex: 1,
                            marginTop: 30,
                            flexDirection: "column"
                        }}>
                            

                            {/* Title Section */}
                            <View style={{
                                flex:1,
                                justifyContent:"center",
                                textAlign:"center",
                                
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    color:"#fff",
                                    fontFamily:"poppins", 
                                    textAlign:"left"
                                }}>
                                    Storyline
                                </Text>

                            </View>
                            {/* Title Section */}
                            
                            {/* Content Section */}
                            <View style={{
                                flex:1,
                                justifyContent:"center",
                                textAlign:"center",
                                marginTop:5
                                
                            }}>
                                <Text style={{
                                    fontSize: 17,
                                    color:"#fff",
                                    fontFamily:"poppins", 
                                    textAlign:"left"
                                }}>
                                    {row_data.overview}
                                </Text>

                            </View>
                            {/* Content Section */}

                    
                            
                        </View>
                        {/* Story Line */}



                    </ScrollView>


                    

                </View> 
                {/* End Of Box Detail */}
            



            </View>
        

    )
}


let View_details = ( prop ) =>{

    return(

        <View style={{
            flex:1,
            justifyContent:"center",
            textAlign:"center",
            
        }}>
            <Text style={{
                fontSize: 14,
                color:"#fff",
                fontFamily:"poppins", 
                textAlign:"center"
            }}>
                {prop.judul}
            </Text>
            <Text style={{
                fontSize: 17,
                color:"#fff",
                fontFamily:"poppins", 
                textAlign:"center"
            }}>
                {prop.nilai}
            </Text>
        </View>

    )
}

export default Detail_page;