
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screen/HomeScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import FinderScreen from "./screen/FinderScreen";
import ConcenteurScreen from "./screen/ConcenteurScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Concenteur" component={ConcenteurScreen}   />
              <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />

              <Stack.Screen name="Finder" component={FinderScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

