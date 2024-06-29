import React,{useState, useEffect}from "react";
import { Image,View, Text, Alert, Touchable, TouchableOpacity, TextInput, TouchableOpacityBase, FlatList, ScrollView } from 'react-native'
import style from "../assets/style"
import Icon from 'react-native-vector-icons/FontAwesome';
import Api_movie from '../Api/Api_movie'

let Search_page = ( {navigation} ) =>{

    let [data_search, set_search] = useState([]);
    let [query, setQuery] = useState("");
    let [display_offset, setDisplayOffset] = useState("block");


    function handleSearch() {
        const get_dataSearch = Api_movie.getMovies_search( query );
        get_dataSearch.then(function(e) {
            let result = get_dataSearch._j.results;
            set_search(result);
            if( data_search.length < 1 ){
                setDisplayOffset( "none" );

            }else{
                setDisplayOffset( "block" );
            }
            
        })
    }


    return(
        <View style={ [style.container_app] }>
        
            
                {/* Container Banner */}
                <View style={ [style.container_banner, {backgroundColor:"black", height:100}] }>

                    {/* View Header - Melayang */}
                    <View style={ [style.container_banner.header_home, {paddingLeft: 20,paddingRight:20}] }>
                        

                        <TextInput
                            style={{
                                flex : 4,
                                // backgroundColor: "#fff",
                                borderWidth: 1,
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                color: "white",
                                borderRadius: 20,
                                backgroundColor: "rgba(255,255,255,0.4)"

                            }}
                            placeholder="Search movies..."
                            value={query}
                            onChangeText={setQuery}
                        />
                        <View style={ [style.container_banner.header_home.col_btn_header, {flex:1, marginLeft:20}] }>
                            <TouchableOpacity onPress={()=>handleSearch()} style={ style.container_banner.header_home.btn_header }>
                                <View>
                                    <Icon style={ style.container_banner.header_home.btn_header.icon} name="search" size={20} color="#900" />
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>

            

                </View>
                {/* End Of Container Banner */}

                {/* Container content */}
                <View style={ style.container_content }>
                        <Container_data navigation = {navigation} judul="" data={ data_search }/> 
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



export default Search_page;