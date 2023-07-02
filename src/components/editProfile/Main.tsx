import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Input from "../input/main";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/FontAwesome";


interface ImagePickerResult {
  cancelled: boolean;
  uri: string;
}

const EditProfile: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState("Juan Perez");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("Cochabamba");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // handle submit logic here
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePasswordChange = () => {
    // handle password change logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar perfil</Text>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.headerButton}>Guardar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://source.unsplash.com/random/800x600/?user' }}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.cameraIconContainer}
            onPress={pickImage}
          >
            <Ionicons name="camera-reverse-outline" size={32} color="#F9A13C" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formContainer}>
        <ScrollView style={styles.formContent}>
          <Text style={styles.inputLabel}>Nombre</Text>
          <Input style={styles.input}
            placeholder="Ingrese su nombre"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.inputLabel}>Apellido</Text>
          <Input style={styles.input}
            placeholder="Ingrese su apellido"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.inputLabel}>Ubicación</Text>
          <Input style={styles.input}
            placeholder="Ingrese su ubicación"
            value={location}
            onChangeText={setLocation}
          />
          <Text style={styles.inputLabel}>Contraseña</Text>
          <Input style={styles.input}
            placeholder="Ingrese su contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.inputLabel}>Repita su contraseña</Text>
          <Input style={styles.input}
            placeholder="Repita su contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePasswordChange}
          >
            <Text style={styles.buttonText}>Cambiar contraseña</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    },
    header: {
    position: 'relative',
    top: 0,
    backgroundColor: '#F9A13C',
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    padding: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
    },
    headerTitle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: -90,
    },
    headerButton: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    },
    content: {
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 10,
    },
    profileImageContainer: {
    position: "relative",
    alignSelf: "center",
    marginTop: -60,
    marginBottom: 20,
    },
    profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
    },
    cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },
    formContainer: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 20,
    },
    formContent: {
    },
    inputLabel: {
    color: "#566264",
    fontSize: 16,
    marginBottom: 5,
    },
    input: {
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#A7A7A7",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
    color: "#000",
    },
    bioInput: {
    height: 80,
    textAlignVertical: "top",
    },
    buttonContainer: {
    backgroundColor: "#F9A13C",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
    },
    buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    },
    });
    
    export default EditProfile;
 
