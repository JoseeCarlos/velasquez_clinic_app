import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Input from '../input/main';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SignupScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignup = () => {
      navigation.navigate('Login');
    };
  
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/login-logo.png')} style={styles.logo} />
        <Text style={styles.title}>Crear Cuenta</Text>
        <Input
          placeholder="Nombre"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          placeholder="Apellidos"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          
        />
        <Input
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          
        />
        <Input
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Input
          placeholder="Repita contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Crear Cuenta</Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signInLink}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>O</Text>
          <View style={styles.separatorLine} />
        </View>
        <TouchableOpacity
          style={styles.socialButton}
          // onPress={handleFacebookLogin}
        >
          <View style={styles.socialButtonIcon}>
            <Image source={require('../../../assets/google-logo.png')} style={styles.socialButtonIconImage} />
          </View>
          <Text style={styles.socialButtonText}>Regístrate con Google</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 16
    },
    logo: {
        width: 250,
        height: 160,
        marginBottom: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12
    },
    signupButton: {
        width: '100%',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9A13C',
        marginTop: 16
    },
    signupButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    signInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24
    },
    signInText: {
        fontSize: 16
    },
    signInLink: {
        fontSize: 16,
        color: '#F9A13C',
        fontWeight: 'bold'
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc'
    },
    separatorText: {
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555'
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 60,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 16
      },
      socialButtonIcon: {
      // backgroundColor: 'tr',
        padding: 12,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 1,
        borderRightColor: '#fff'
      },
      socialButtonIconImage: {
        width: 35,
        height: 35
      },
      socialButtonText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#555'
      },
    });
    
export default SignupScreen;
   