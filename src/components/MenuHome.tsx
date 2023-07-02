import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface MenuItem {
  icon: string;
  text: string;
  route: string;
}

const MenuHome: React.FC<{ navigation: any }> = ({ navigation }) => {
  const data: MenuItem[] = [
    { icon: 'event', text: 'Reserver una cita', route: '' },
    { icon: 'history', text: 'Historial de citas', route: '' },
    { icon: 'credit-card', text: 'Pagos o Cuotas', route: 'PaymentHistory' },
    { icon: 'local-hospital', text: 'Tratamientos', route: 'Treatments' },
    { icon: 'medical-services', text: 'Clinica', route: 'News' },
  ];

  const handleCardPress = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity style={styles.card} key={index} onPress={() => handleCardPress(item.route)}>
          <Icon name={item.icon} size={48} color="white" />
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginHorizontal: 15,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 200,
    backgroundColor: '#61282D',
    borderRadius: 10,
    marginRight: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default MenuHome;
