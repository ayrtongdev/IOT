import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();


  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

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
      })
    ]).start();



  }, []);



  return (
    <KeyboardAvoidingView style={styles.background}>

      <Text style={styles.nomeLogo}>Recicla App</Text>

      <Animated.View style={[
        styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY: offset.y }
          ]
        }
      ]}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => navigation.navigate('Name')}
        >
          <Text style={styles.submitText}>Login</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Registre-se</Text>
        </TouchableOpacity >

        <Text style={styles.nomeOu}>━━━━━━━━━━━━━ OU ━━━━━━━━━━━━━</Text>

        <TouchableOpacity style={styles.btnGoogle} onPress={() => console.log('Botão Google pressionado')}>
          <View style={styles.buttonContent}>
            <Image style={styles.btnImage} source={require('../../../assets/google.png')} />
            <Text style={styles.btnText}>Continue com o Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnApple} onPress={() => console.log('Botão Apple pressionado')}>
          <View style={styles.buttonContent}>
            <Image style={styles.btnImageap} source={require('../../../assets/apple.png')} />
            <Text style={styles.BtnText}>Continue com o Apple</Text>
          </View>
        </TouchableOpacity>

      </Animated.View>
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
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',

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
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
    backgroundColor: '#F4FEE5',
    width: '80%',
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
  },
  registerText: {
    color: 'black'
  },
  nomeLogo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#9FC248',
    marginTop: 100,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  nomeOu: {
    fontSize: 11,
    marginTop: 30,
    color: '#939988',
  },
  btnGoogle: {
    marginTop: 40,
    backgroundColor: '#F4FEE5',
    width: '80%',
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
  },
  btnImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  btnImageap: {
    width: 26.891,
    height: 32,
    marginRight: 12,
  },
  btnApple: {
    marginTop: 10,
    backgroundColor: '#F4FEE5',
    width: '80%',
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
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

});
