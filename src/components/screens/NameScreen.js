import React, { useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Name() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [opacity] = useState(new Animated.Value(1));

  const navigation = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      }),
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />

        <Text style={styles.nomeLogo}>Digite seu nome:</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btnRegister}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.registerText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.submitText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4FEE5',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nomeLogo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#9FC248',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  input: {
    backgroundColor: '#F4FEE5',
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  btnSubmit: {
    backgroundColor: '#9FC248',
    width: '45%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
  btnRegister: {
    backgroundColor: '#F4FEE5',
    width: '45%',
    borderColor: '#9FC248',
    borderWidth: 1,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 10,
  },
  registerText: {
    color: '#9FC248',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
