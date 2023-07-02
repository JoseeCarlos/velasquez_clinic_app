import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';

interface Appointment {
  id: string;
  doctor: {
    name: string;
    photo: string;
  };
  date: string;
  time: string;
  status: 'attended' | 'missed';
}

const AppointmentHistoryScreen: React.FC = () => {
  useEffect(() => {
    // Establecer el idioma español al cargar el componente
    moment.locale('es');
  }, []);

  const historyData: Appointment[] = [
    {
      id: '1',
      doctor: {
        name: 'Dr. Juan Pérez',
        photo: 'https://source.unsplash.com/random/800x600/?cat',
      },
      date: '2023-06-15',
      time: '10:00 AM',
      status: 'attended',
    },
    {
      id: '2',
      doctor: {
        name: 'Dr. María Gómez',
        photo: 'https://source.unsplash.com/random/800x600/?flappy',
      },
      date: '2023-06-16',
      time: '02:30 PM',
      status: 'missed',
    },
    // ... otros datos de historial ...
  ];

  const renderHistoryItem = ({ item }: { item: Appointment }) => {
    const statusColor = item.status === 'attended' ? 'green' : 'red';
    const formattedDate = moment(item.date).format('LL'); // Formatear la fecha en formato "15 de junio de 2023"
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.doctor.photo }} style={styles.doctorPhoto} />
        <View style={styles.detailsContainer}>
          <Text style={styles.doctorName}>{item.doctor.name}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={[styles.status, { color: statusColor }]}>
            {item.status === 'attended' ? 'Atendido' : 'No atendido'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {historyData.length > 0 ? (
        <FlatList
          data={historyData}
          renderItem={renderHistoryItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No hay citas en el historial</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,

  },
  doctorPhoto: {
    width: 110,
    height: 110,
    borderRadius: 4,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    marginBottom: 4,
  },
  time: {
    fontSize: 16,
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default AppointmentHistoryScreen;
