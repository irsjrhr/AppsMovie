
let Api_movie = {

    API_KEY : '923801b73e0466baf937e587a5d05a19',
    BASE_URL : 'https://api.themoviedb.org/3',
    BASE_IMG : "https://image.tmdb.org/t/p/w500",

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
    get_img : function( url_img_data ) {
        return this.BASE_IMG + url_img_data;
    }

    


}

export default Api_movie 