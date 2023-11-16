import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CilindricalMenu from '../menu/CilindricalMenu';
import { useNavigation } from '@react-navigation/native';

const AppointmentsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Consultas médicas</Text>
      <CilindricalMenu navigation={navigation} currentRoute="Appointments" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default AppointmentsScreen;
