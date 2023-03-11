import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AppLoginForm from '../components/AppLoginForm';
import NewUser from '../components/NewUser';

const Stack = createStackNavigator();

export default function AuthScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={AppLoginForm} options={{ headerShown: false }}/>
        <Stack.Screen name="Registrar" component={NewUser} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})