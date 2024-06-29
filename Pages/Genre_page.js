import React,{useState, useEffect}from "react";
import { Image,View, Text, Alert, Touchable, TouchableOpacity, TextInput, TouchableOpacityBase, FlatList, ScrollView } from 'react-native'
import style from "../assets/style"
import Icon from 'react-native-vector-icons/FontAwesome';
import Api_movie from "../Api/Api_movie";



let Genre_page = ( {route, navigation} ) =>{

    // Menampilkan data movies berdasarkan genre
    let { row_genre } = route.params;

    let [data_moviesByGenre, set_data_moviesByGenre] = useState([]);
    let [display_offset, setDisplayOffset] = useState("none");

    
    useEffect(function(e) {
        let data_moviesByGenre_api = Api_movie.getMovies_byGenre( row_genre.id );
        data_moviesByGenre_api.then( function(e) {

            console.log(data_moviesByGenre_api);
            data_moviesByGenre_api = data_moviesByGenre_api._j.results;
            set_data_moviesByGenre( data_moviesByGenre_api );
            
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

                            }}> {row_genre.name} </Text>
                        </View>

                    </View>

            

                </View>
                {/* End Of Container Banner */}

                {/* Container content */}
                <View style={ style.container_content }>
                        <Container_data navigation = {navigation} judul="" data={ data_moviesByGenre }/> 
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



export default Genre_page;