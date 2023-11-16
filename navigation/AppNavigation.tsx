import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SplashScreen from '../src/components/screens/SplashScreen';
import AppointmentsScreen from '../src/components/screens/AppointmentsScreen';
import DiaryScreen from '../src/components/screens/DiaryScreen';
import HomeScreen from '../src/components/screens/HomeScreen';
import LoginScreen from '../src/components/screens/LoginScreen';
import NameScreen from '../src/components/screens/NameScreen';
const Stack = createStackNavigator();

const noTransition = () => {
  return {
    cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
  };
};


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={noTransition} />
        <Stack.Screen name="Appointments" component={AppointmentsScreen} options={noTransition} />
        <Stack.Screen name="Diary" component={DiaryScreen} options={noTransition} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
