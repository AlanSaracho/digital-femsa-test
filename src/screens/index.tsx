import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { HomeScreen } from "./HomeScreen/HomeScreen"
import { DetailScreen } from "./DetailScreen/DetailScreen"
import { Product } from '../types';

export type AppParams = {
  Home: undefined,
  Detail: {
    product: Product;
  }
};

export type StackNavigationProps = NativeStackNavigationProp<AppParams>;

const Stack = createNativeStackNavigator<AppParams>();
export const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: true, header: () => null }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}