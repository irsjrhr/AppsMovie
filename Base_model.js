import Api_movie from "./Api/Api_movie";

let Base_model = {

    BASE_IMG : "https://image.tmdb.org/t/p/w500",
    get_img_movie : function( row_data ) {
        let url_img_data = "false";
        if ( row_data.poster_path != null ) {
            url_img_data = row_data.poster_path;
        }else if(row_data.backdrop_path != null ){
            url_img_data = row_data.backdrop_path;
        }else{
            url_img_data = "https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png"
            return url_img_data;
        }
        return this.BASE_IMG + url_img_data;
    },


}

export default Base_model;