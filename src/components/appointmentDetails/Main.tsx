import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

interface Doctor {
  name: string;
  photo: string;
}

const AppointmentDetails: React.FC<{ navigation: any }> = ({ navigation }) => {
  const doctor: Doctor = {
    name: 'Dr. John Doe',
    photo: 'https://example.com/doctor_photo.jpg',
  };
  const date = 'June 30, 2023';
  const time = '10:00 AM';
  const duration = 30;
  const cost = '$100';
  const attentionType = 'Check-up';
  const complaints = 'Toothache';
  const procedures = ['Dental cleaning', 'X-rays'];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: doctor.photo }} style={styles.doctorPhoto} resizeMode="cover" />
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.dateTime}>{date}</Text>
        <Text style={styles.dateTime}>{time}</Text>
        <Text style={styles.duration}>Duración: {duration} minutos</Text>
        <Text style={styles.cost}>Costo: {cost}</Text>

        <Text style={styles.sectionTitle}>Detalles de la Atención:</Text>
        <Text style={styles.attentionType}>Tipo de Atención: {attentionType}</Text>
        <Text style={styles.complaints}>Quejas: {complaints}</Text>

        <Text style={styles.sectionTitle}>Procedimientos Realizados:</Text>
        <FlatList
          data={procedures}
          renderItem={({ item }) => <Text style={styles.procedure}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
          style={styles.procedureList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  doctorPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateTime: {
    fontSize: 16,
    marginBottom: 5,
  },
  duration: {
    fontSize: 16,
    marginBottom: 5,
  },
  cost: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  attentionType: {
    fontSize: 16,
    marginBottom: 5,
  },
  complaints: {
    fontSize: 16,
    marginBottom: 10,
  },
  procedureList: {
    marginTop: 10,
  },
  procedure: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AppointmentDetails;
