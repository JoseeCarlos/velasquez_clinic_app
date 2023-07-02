import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

interface SuccessScreenProps {
  visible: boolean;
  onClose: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ visible, onClose }) => {
  const handleButtonPress = () => {
    console.log("¡Botón presionado!");
    onClose(); 
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.messageContainer}>
          <Image source={require('../../../../assets/check.png')} style={styles.icon} />
          <Text style={styles.message}>Cita reservada con éxito</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>¡Hecho!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#F9A13C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    backgroundColor: '#61282D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SuccessScreen;
