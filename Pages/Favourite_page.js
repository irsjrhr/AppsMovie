import React,{useState, useEffect}from "react";
import { Image,View, Text, Alert, Touchable, TouchableOpacity, TextInput, TouchableOpacityBase, FlatList, ScrollView } from 'react-native'
import style from "../assets/style"
import Icon from 'react-native-vector-icons/FontAwesome';
import DB_favourite from "../DB/DB_favorite";
import Api_movie from "../Api/Api_movie";



let Favourite_page = ( {route, navigation} ) =>{

    let [data_favourite, set_data_favourite] = useState([]);
    let [display_offset, setDisplayOffset] = useState("block");


    useEffect(function(e) {
        let data_favourite_db = DB_favourite.get_all_data();
        data_favourite_db.then( function(e) {

            console.log(data_favourite_db);
            data_favourite_db = data_favourite_db._j;
            set_data_favourite( data_favourite_db );
            
        } );
    }, []);

    return(
        <View style={ [style.container_app] }>
        
            
                {/* Container Banner */}
                <View style={ [style.container_banner, {backgroundColor:"black", height:100}] }>

                    {/* View Header - Melayang */}
                    <View style={ [style.container_banner.header_home, {paddingLeft: 20,paddingRight:20}] }>
                        


                        <View style={ [style.container_banner.header_home.col_btn_header,{
                            
                            position: "absolute",
                            top: 0,
                            right: 0,
                            zIndex: 999
                            

                        }] }>
                            <TouchableOpacity onPress={()=> navigation.navigate('Home_page') } style={ [style.container_banner.header_home.btn_header, {paddingTop: 15} ] }>
                                <View>
                                    <Icon style={ style.container_banner.header_home.btn_header.icon} name="chevron-left" size={20} color="#900" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={
                            { flex: 1}
                        }>
                            <Text style={{

                                color : "#fff",
                                fontSize: 30,
                                fontFamily: 'poppins',
                                paddingTop: 5

                            }}> Favourite Kamu </Text>
                        </View>


                    </View>

            

                </View>
                {/* End Of Container Banner */}

                {/* Container content */}
                <View style={ style.container_content }>
                        <Container_data navigation = {navigation} judul="" data={ data_favourite }/> 
                </View>
                {/* End Of Container content */}

            
            <View style={
                {

                    height: 2000,
                    display : display_offset
                }

            }>

            </View>

        </View>
    
    )
}



import Card_data from "../Component/Card_data";
let Container_data = ( prop ) => {


    return (

                <View style={ style.container_data }>
                        {/* Header */}
                        <View style={ style.container_data.header } >
                            <View style={ style.container_data.header.col }>  
                                <Text style={ style.container_data.text }>
                                    { prop.judul }
                                </Text>
                            </View>
                            <View style={ [style.container_data.header.col, {display:"none"}] }>
                                <TouchableOpacity
                                onPress={ () => Alert.alert("See All") } >
                                    <Text style={[{ textAlign:"right", marginRight:10 },style.container_data.text]}>
                                        See All
                                    </Text>
                                </TouchableOpacity>
    
                            </View>
                        </View> 
                        {/* Header */}
    
    
                        {/* View Row Data */}
                        <View style={ style.row_data }>
    
                            <FlatList
                                numColumns={3}
                                data={prop.data}
                                renderItem={({ item }) => <Card_data item={item} navigation={prop.navigation} />}
                                keyExtractor={(item, index) => index.toString()}
                                // contentContainerStyle={styles.container}
                            />
    
                        </View>
                        {/* View Row Data */}
    
                    </View>
    )
}



export default Favourite_page;