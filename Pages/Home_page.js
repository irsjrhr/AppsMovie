import React,{useState, useEffect}from "react";
import { Image,View, Text, Alert, Touchable, TouchableOpacity, TextInput, TouchableOpacityBase, FlatList, ScrollView } from 'react-native'
import style from "../assets/style"
import Icon from 'react-native-vector-icons/FontAwesome';
import Api_movie from '../Api/Api_movie'

let Home_page = ( {navigation} ) =>{

    let data =[];


    let [data_movies_popular, set_movies_popular] = useState([]);
    let [data_movies_nowPlaying, set_movies_nowPlaying] = useState([]);
    let [data_movies_upComing, set_movies_upComing] = useState([]);
    const get_data_all = async function() {
        const movie_popular = await Api_movie.getMovies_popular();
        const movie_nowPlaying = await Api_movie.getMovies_nowPlaying();
        const movie_upComing = await Api_movie.getMovies_upComing();

        set_movies_popular(movie_popular.results);
        set_movies_nowPlaying(movie_nowPlaying.results);
        set_movies_upComing(movie_upComing.results);

        // console.log( movie_nowPlaying )
    };
  
    // getMovies_popular()
    useEffect(function(e) {
        get_data_all()
    }, [])



    return(
        <View style={ style.container_app }>
            <ScrollView>
            
                {/* Container Banner */}
                <View style={ style.container_banner }>

                    {/* View Header - Melayang */}
                    <View style={ style.container_banner.header_home }>
                        
                        <Image
                            source={require('../assets/user.jpg')}
                            style={style.container_banner.header_home.img_profile}
                        />
                        <View style={ style.container_banner.header_home.col_btn_header }>
                            <TouchableOpacity onPress={()=>Alert.alert("Test")} style={ style.container_banner.header_home.btn_header }>
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


let Container_data = ( prop ) => {

    // console.log(prop.data);
    function movie_detail_page( row_data ){
        //row ddata result
        prop.navigation.navigate("Detail_page", {row_data:row_data});
        
    }

    let Card_data = ( { item } ) => {
        return (
            <TouchableOpacity onPress={()=> { 
                movie_detail_page( item ) 
                } }>
                <View style={ style.row_data.card_data }>
                    <Image style={ style.row_data.card_data.img }
                    source={{ uri: Api_movie.get_img( item.poster_path ) }}
                    >
    
                    </Image>
                </View>
            </TouchableOpacity>
        )
    }
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
                                renderItem={Card_data}
                                keyExtractor={(item) => item.id}
                                // contentContainerStyle={styles.container}
                            />
    
                        </View>
                        {/* View Row Data */}
    
                    </View>
    )
}



export default Home_page;