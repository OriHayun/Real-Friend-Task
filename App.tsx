import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/homeScreen';
import PropertyScreen from './src/screens/propertyScreen';
import FavoritesScreen from './src/screens/favoritesScreen';
import { RootStackParamList } from './src/models/types/navigation';
import { APP_NAME } from './src/models/conststanst/appName';

const App: React.FC<{}> = () => {

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: APP_NAME,
          }}
        />
        <Stack.Screen
          name="Property"
          component={PropertyScreen}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}


export default App;