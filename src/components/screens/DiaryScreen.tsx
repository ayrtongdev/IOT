import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import CilindricalMenu from '../menu/CilindricalMenu';
import { useNavigation } from '@react-navigation/native'

const VoucherScreen = () => {
  const navigation = useNavigation();
  // Adicione o caminho das suas imagens aqui
  const cupons = [
    require('../../../assets/cupom1.png'),
    require('../../../assets/cupom2.png'),
    require('../../../assets/cupom2.png'),
    require('../../../assets/cupom3.png'),
    require('../../../assets/cupom2.png'),
    require('../../../assets/cupom1.png'),
    require('../../../assets/cupom1.png'),
    require('../../../assets/cupom2.png'),
    require('../../../assets/cupom2.png'),

    
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Suas Recompensas</Text>
      </View>
      <ScrollView contentContainerStyle={styles.cuponsContainer}>
        {cupons.map((cupom, index) => (
          <Image key={index} source={cupom} style={styles.cupomImage} />
        ))}
      </ScrollView>
      <CilindricalMenu navigation={navigation} currentRoute="Diary" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FFE5',
  },
  header: {
    backgroundColor: '#31332A', // Cor escura para o cabeçalho
    padding: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cuponsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  cupomImage: {
    width: 350,
    height: 80,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});

export default VoucherScreen;
