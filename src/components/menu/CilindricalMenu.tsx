import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface CilindricalMenuProps {
  navigation: any;
  currentRoute: string;
}

const CilindricalMenu: React.FC<CilindricalMenuProps> = ({ navigation, currentRoute }) => {
  const createAnimatedStyle = (routeName: string) => {
    const isActive = currentRoute === routeName;
    const scale = isActive ? 1 : 0.7;
    const borderWidth = isActive ? 2 : 0;
    const backgroundColor = isActive ? 'rgba(159, 194, 72, 0.7)' : 'rgba(240, 240, 240, 1.0)';
    const glassEffect = isActive ? {} : styles.glassEffect;

    return useAnimatedStyle(() => ({
      transform: [{ scale: withTiming(scale, { duration: 200 }) }],
      borderWidth: withTiming(borderWidth, { duration: 200 }),
      backgroundColor: withTiming(backgroundColor, { duration: 200 }),
      ...glassEffect,
    }));
  };

  return (
    <View style={styles.menuContainer}>
      
      <Animated.View style={[styles.iconCircle, createAnimatedStyle('Diary'), styles.glassEffect]}>
        <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
          <Image
            source={currentRoute === 'Diary' ? require('../../../assets/box.png') : require('../../../assets/box1.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.iconCircle, createAnimatedStyle('Home'), styles.glassEffect]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={currentRoute === 'Home' ? require('../../../assets/house.png') : require('../../../assets/house1.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.iconCircle, createAnimatedStyle('Appointments'), styles.glassEffect]}>
        <TouchableOpacity onPress={() => navigation.navigate('Appointments')}>
          <Image
            source={currentRoute === 'Appointments' ? require('../../../assets/gear.png') : require('../../../assets/gear1.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  glassEffect: {
    backgroundColor: 'rgba(159, 194, 72, 0.9)',
    overflow: 'hidden',
    borderRadius:15,
    padding: 10,
  },

  iconCircle: {
    borderRadius: 15,
    padding: 10,
    borderColor: '#E0E0E0',
    width: 57, // Ajuste conforme necessário
    height: 57,
    justifyContent: 'center',
    alignItems: 'center', 

  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    backgroundColor: 'rgba(159, 194, 72, 0.9)',
    borderRadius: 20,
    height: 60,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20, 
    overflow: 'hidden',
  },
});

export default CilindricalMenu;
