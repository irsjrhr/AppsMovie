import React,{useState, useEffect}from "react";
import { Image,View, Text, Alert, Touchable, TouchableOpacity, TextInput, TouchableOpacityBase, FlatList, ScrollView } from 'react-native'
import style from "../assets/style"
import Icon from 'react-native-vector-icons/FontAwesome';
import Api_movie from '../Api/Api_movie'

let Home_page = ( {navigation} ) =>{



    let [data_movies_popular, set_movies_popular] = useState([]);
    let [data_movies_nowPlaying, set_movies_nowPlaying] = useState([]);
    let [data_movies_upComing, set_movies_upComing] = useState([]);
    let [data_movies_listGenre, set_movies_listGenre] = useState([]);

    const get_data_all = function() {

        const get_movie_nowPlaying = Api_movie.getMovies_nowPlaying();
        get_movie_nowPlaying.then(function(e) {
            let result = get_movie_nowPlaying._j.results;
            set_movies_nowPlaying(result);
        })
        const get_movie_popular = Api_movie.getMovies_popular();
        get_movie_popular.then(function(e) {
            let result = get_movie_popular._j.results;
            set_movies_popular(result);
            
        })
        const get_movie_upComing = Api_movie.getMovies_upComing();
        get_movie_upComing.then(function(e) {
            let result = get_movie_upComing._j.results;
            set_movies_upComing(result);
        })

        const get_movie_listGenre = Api_movie.getMovies_listGenre();
        get_movie_listGenre.then(function(e) {
            let result = get_movie_listGenre._j.genres;
            set_movies_listGenre(result);
        }).catch(function(error) {
            console.log( error );
            // Alert.alert("s");
        });

    };
  
    // getMovies_popular()
    useEffect(function(e) {
        get_data_all()
    }, [])

    function movies_direct_kategori( row_genre ) {
        // row_genre adalah data row untuk data pada genre yang diambil
        navigation.navigate("Genre_page", { row_genre : row_genre })
    }





    return(
        <View style={ style.container_app }>
            <ScrollView>
            
                {/* Container Banner */}
                <View style={ style.container_banner }>

                    {/* View Header - Melayang */}
                    <View style={ style.container_banner.header_home }>
                        
                        <View style={ style.container_banner.header_home.col_btn_header }>
                            <TouchableOpacity onPress={()=> navigation.navigate("Favourite_page") } style={ [style.container_banner.header_home.btn_header,{left:20}] }>
                                <View>
                                    <Icon style={ style.container_banner.header_home.btn_header.icon} name="bookmark" size={20} color="#900" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={ style.container_banner.header_home.col_btn_header }>
                            <TouchableOpacity onPress={()=> navigation.navigate("Search_page") } style={ style.container_banner.header_home.btn_header }>
                                <View>
                                    <Icon style={ style.container_banner.header_home.btn_header.icon} name="search" size={20} color="#900" />
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>

                    {/* Container slide */}
                    <View style={style.container_banner.container_slide}>

                        {/* Item SLide */}
                        <View style={ {
                            
                            position:"absolute",
                            top: 0,
                            left: 0,
                            // backgroundColor: "green",
                            width: "100%",
                            height: "100%",
                            flexDirection: "column"
                        } }>

                            <View style={{
                                flex: 1,
                                width: "100%",
                                position: "relative"
                            }}>
                                <Image 
                                source={require('../assets/banner.jpg')}
                                style={
        {                           flex: 1,
                                    width: "100%",
                                    resizeMode: "cover",
                                    opacity: 0.9
                                }}
                                >
                                </Image>
                                {/* Melayang */}
                                <View style={{ position:"absolute", bottom:0,left: 0, width:"100%", height:"auto", padding: 20,flexDirection:"column", justifyContent:"left", backgroundColor:"rgba(0,0,0,0.1)"}}>

                                    <Text style={ {
                                        fontSize:25,
                                        fontFamily:"poppins",
                                        color:"white"
                                    } }>
                                        Movie Apps - @irsjrhr
                                    </Text>
                                    {/* <Text style={ {
                                        fontSize:15,
                                        fontFamily:"poppins",
                                        color:"white"
                                    } }>
                                        7.0
                                    </Text> */}


                                    {/* Button Play */}
                                    <View style={{ display:"none",width:"100%", alignContent:"right", height: "auto",padding:10, borderRadius:20, flexDirection:"row", justifyContent:"center", borderWidth: 1, borderColor:"white"}}>

                                        <TouchableOpacity style={{

                                            flexDirection:"row", justifyContent:"center", 

                                        }} >

                                            <Text style={{textAlign:"center", color:"white", fontSize: 20, fontFamily:"poppins", fontWeight:100,marginTop:-2, marginRight:10}}> Details </Text>
                                            {/* <Icon style={ style.container_banner.header_home.btn_header.icon} name="play" size={20} color="#900" /> */}

                                    
                                        </TouchableOpacity>

                                    </View>
                                    {/* Button Play */}


                                </View>
                            </View>
                        </View>
                        {/* End Of Item SLide */}

                        

                    </View>
                    {/* Container slide */}

                            

                </View>
                {/* End Of Container Banner */}
                
                {/* Container Category */}
                <View style={{
                    // backgroundColor: "red",
             
                    padding: 20,
                    marginTop: 10,
                    paddingRight: 0,
                    flexDirection: "row"
                }}>
                    
                    <FlatList
                        horizontal
                        data={data_movies_listGenre}
                        renderItem={({ item }) => 
                            <TouchableOpacity onPress={ () => { movies_direct_kategori( item ) } }>
                                <View style={{
                                    width: 100,
                                    paddingTop: 10,
                                    height: 50,
                                    backgroundColor: "grey",
                                    borderRadius:50,
                                    marginRight: 10,
                                    position: "relative"
                                }}>
                                    <Text style={{textAlign:"center", color: "white", fontFamily:"poppins"

                                    }}> {item.name} </Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item) => item.id}
                        // contentContainerStyle={styles.container}
                    />

                </View>
                {/* Container Category */}


                {/* Container content */}
                <View style={ style.container_content }>
                        <Container_data navigation = {navigation} judul="Now Playing" data={ data_movies_nowPlaying }/> 
                        <Container_data navigation = {navigation} judul="Populer" data={ data_movies_popular }/>
                        <Container_data navigation = {navigation} judul="Upcoming" data={ data_movies_upComing }/>
                </View>
                {/* End Of Container content */}

            
            </ScrollView>



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
                                horizontal
                                data={prop.data}
                                renderItem={({ item }) => <Card_data item={item} navigation={prop.navigation} />}
                                keyExtractor={(item) => item.id}
                                // contentContainerStyle={styles.container}
                            />
    
                        </View>
                        {/* View Row Data */}
    
                    </View>
    )
}



export default Home_page;