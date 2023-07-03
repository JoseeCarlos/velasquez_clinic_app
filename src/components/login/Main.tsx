import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import Input from "../input/main";

import ResetPasswordModal from "../resetPassword/Main";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "../../presenters/authenticationSlice";
import { RootState } from "../../store/rootReducer";

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPasswordModalVisible, setResetPasswordModalVisible] =
    useState(false);

  const dispatch: ThunkDispatch<RootState, null, any> = useDispatch();
  

  const isLoading = useSelector(
    (state: RootState) => state.authentication.loading
  );
  const isLoggedIn = useSelector(
    (state: RootState) => state.authentication.loggedIn
  );
  const error = useSelector((state: RootState) => state.authentication.error);

  const handleEmailChange = (text: string) => setEmail(text);
  const handlePasswordChange = (text: string) => setPassword(text);
  const handleLoginPress = () => alert(`Email: ${email} Password: ${password}`);
  const handleGoogleLogin = () => alert("Iniciar sesión con Google");
  const handleFacebookLogin = () => alert("Iniciar sesión con Facebook");
  const handleSignUpPress = () => {
    // navigation.navigate("Signup");
  };
  const handleResetPassword = () => {
    setResetPasswordModalVisible(true);
  };

  const handleLogin = () => {
    console.log('Holaaaa'+email+password);
    dispatch(signInWithEmailAndPassword({ email, password }));
    
  };

  if (isLoggedIn) {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/login-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Iniciar sesión</Text>
      <Input
        style={styles.input}
        placeholder="Ingrese su correo"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <Input
        style={styles.input}
        placeholder="Ingrese su contraseña"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Text style={styles.error}>{error?.length ?? ''}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPasswordLink}
        onPress={handleResetPassword}
      >
        <Text style={styles.bottomLinksText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <View style={styles.separator}>
        <View style={styles.separatorLine}></View>
        <Text style={styles.separatorText}>O</Text>
        <View style={styles.separatorLine}></View>
      </View>
      <TouchableOpacity
        style={styles.socialButton}
        onPress={handleFacebookLogin}
      >
        <View style={styles.socialButtonIcon}>
          <Image
            source={require("../../../assets/google-logo.png")}
            style={styles.socialButtonIconImage}
          />
        </View>
        <Text style={styles.socialButtonText}>Iniciar sesión con google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpLink} onPress={handleSignUpPress}>
        <Text style={styles.bottomLinksTextRegister}>
          ¿No tienes cuenta?{" "}
          <Text style={styles.TextButtonRegister}>Regístrate</Text>{" "}
        </Text>
      </TouchableOpacity>

      <ResetPasswordModal
        visible={resetPasswordModalVisible}
        onClose={() => setResetPasswordModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 250,
    height: 160,
    marginBottom: 32,
  },
  title: {
    fontSize: 27,
    fontWeight: "900",
    marginBottom: 32,
  },
  input: {
    width: "80%",
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    width: "80%",
    height: 48,
    backgroundColor: "#F9A13C",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  separatorText: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
  },
  socialButtonIcon: {
    // backgroundColor: 'tr',
    padding: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: "#fff",
  },
  socialButtonIconImage: {
    width: 35,
    height: 35,
  },
  socialButtonText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
  },
  forgotPasswordLink: {
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  bottomLinksText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  TextButtonRegister: {
    color: "#F9A13C",
    fontWeight: "bold",
  },
  bottomLinksTextRegister: {
    fontSize: 16,
  },
  signUpLink: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 16,
  },
  error: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
