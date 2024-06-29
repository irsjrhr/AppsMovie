import  React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert, Button, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Home_page from './Pages/Home_page';
import Detail_page from './Pages/Detail_page';
import Search_page from './Pages/Search_page';
import Favourite_page from './Pages/Favourite_page';
import Genre_page from './Pages/Genre_page';



const Stack = createStackNavigator();


function App() {
  

  let [fontsLoaded] = Font.useFonts({
    'poppins': require('./assets/poppins.ttf'),
  });

  if (!fontsLoaded) {
      console.log('Font tidak terload');
  }


  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions={{
          headerShown: false, // Menghilangkan header secara default
          gestureEnabled: true, // Mengaktifkan gesture untuk kembali
          gestureDirection: 'horizontal', // Arah gesture untuk kembali
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateX: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1000, 0],
                  }),
                },
              ],
            },
          }),
        }}>
        <Stack.Screen name="Home_page" component={Home_page} />
        <Stack.Screen name="Search_page" component={Search_page} />
        <Stack.Screen name="Favourite_page" component={Favourite_page} />
        {/* Yang perlu parameter */}
        <Stack.Screen name="Genre_page" component={Genre_page} />
        <Stack.Screen name="Detail_page" component={Detail_page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;