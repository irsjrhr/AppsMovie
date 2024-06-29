import AsyncStorage from '@react-native-async-storage/async-storage';

let DB_favourite = {

    insert_data : async (key, object) => {
        try {
          const jsonValue = JSON.stringify(object);
          await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
          console.error("Gagal menyimpan objek:", e);
        }
    },

  
    get_all_data : async () => {
        // Dikembalikan dalam bentukk array index multidimensi yang isinya object
        try {
          // Mendapatkan semua kunci
          const keys = await AsyncStorage.getAllKeys();
          if (keys.length > 0) {
            // Mendapatkan semua nilai yang terkait dengan kunci-kunci tersebut

            const result = await AsyncStorage.multiGet(keys);
            let data = [];
            for (let index = 0; index < result.length; index++) {
                let row_obj = result[index];
                let row_data = row_obj[1];
                row_data = JSON.parse( row_data );
                data.push(row_data);
            }
        
            console.log(data);
            // Dikembalikan dalam bentukk array index multidimensi yang isinya object
            return data;
          } else {
            console.log("Tidak ada data yang tersimpan.");
            return [];
          }
        } catch (e) {
          console.error("Gagal mengambil semua data:", e);
          return [];
        }
    }
    
}


export default DB_favourite;