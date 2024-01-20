import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabHome from "./Src/Tab/TabHome";


const Stack = createNativeStackNavigator();

const App = () => {
 return(
  <NavigationContainer >
    <Stack.Navigator >
      <Stack.Screen options={{headerShown : false}} name="HomeScreen" component={TabHome}/>
    </Stack.Navigator>
  </NavigationContainer>
 )
}


export default App;
