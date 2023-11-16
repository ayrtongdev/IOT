import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type SplashScreenProps = {
  navigation: StackNavigationProp<any>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4FEE5' }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../../assets/logo.png')} style={{ width: 150, height: 150 }} />
      </View>
    </View>
  );
};

export default SplashScreen;
