
// Semua method terkait operasi API Disini jika berhasil akan mengembalikan object Promise karena merupakan proses asynchronous

import AsyncStorage from "@react-native-async-storage/async-storage";

let Api_movie = {

    
    API_KEY : '923801b73e0466baf937e587a5d05a19',
    BASE_URL : 'https://api.themoviedb.org/3',


    getMovies_byId : async function( id ) {
        try {
            const response = await fetch(`${this.BASE_URL}/movie/${id}?api_key=${this.API_KEY}`);
            const data = await response.json();
            // console.log(data)
            return data;
        } catch (error) {
            console.error(error);
        }
    },
    getMovies_popular : async function() {
        try {
            const response = await fetch(`${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}`);
            const data = await response.json();
            // console.log(data)
            // console.log("debug model");
            return data;
            
        } catch (error) {
            console.error(error);
        }
    },
    getMovies_nowPlaying : async function() {
        try {
            const response = await fetch(`${this.BASE_URL}/movie/now_playing?api_key=${this.API_KEY}`);
            const data = await response.json();
            // console.log(data)
            // console.log("debug model");
            return data;
            
        } catch (error) {
            console.error(error);
        }
    },
    getMovies_upComing : async function() {
        try {
            const response = await fetch(`${this.BASE_URL}/movie/upcoming?api_key=${this.API_KEY}`);
            const data = await response.json();
            // console.log(data)
            // console.log("debug model");
            return data;
            
        } catch (error) {
            console.error(error);
        }
    },
    getMovies_search : async function( query ) {
        try {
            const response = await fetch(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`);
            const data = await response.json();
            // console.log(data)
            return data;
        } catch (error) {
            console.error(error);
        }
    },
    
    // ${BASE_URL}/movie/${category}?api_key=${API_KEY}
    // https://api.themoviedb.org/3/genre/movie/list?api_key=923801b73e0466baf937e587a5d05a19


    getMovies_listGenre : async function() {
        try {
            const response = await fetch(`${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}`);
            const data = await response.json();
            // console.log(response);
            // console.log(data)
            return data;
        } catch (error) {
            console.error(error);
        }
    },

    getMovies_byGenre : async function( genreId ) {
        try {
            const response = await fetch(`${this.BASE_URL}/discover/movie?api_key=${this.API_KEY}&with_genres=${genreId}`);
            // console.log(response);
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            console.error(error);
        }
    },




}

export default Api_movie 