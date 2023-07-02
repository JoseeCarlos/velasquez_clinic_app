import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import "moment/locale/es";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Doctor {
  name: string;
  photo: string;
}

interface Appointment {
  id: string;
  doctor: Doctor;
  date: string;
  time: string;
  status: string;
}

interface Props {
  navigation: any;
}

const AppointmentScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    // Establecer el idioma español al cargar el componente
    moment.locale("es");
  }, []);

  const appointmentsData: Appointment[] = [
    {
      id: "1",
      doctor: {
        name: "Dr. Juan Pérez",
        photo: "https://source.unsplash.com/random/800x600/?cat",
      },
      date: "2023-06-15",
      time: "10:00 AM",
      status: "attended",
    },
    {
      id: "2",
      doctor: {
        name: "Dr. María Gómez",
        photo: "https://source.unsplash.com/random/800x600/?flappy",
      },
      date: "2023-06-16",
      time: "02:30 PM",
      status: "missed",
    },
    {
      id: "3",
      doctor: {
        name: "Dr. Juan Pérez",
        photo: "https://source.unsplash.com/random/800x600/?user",
      },
      date: "2023-06-15",
      time: "10:00 AM",
      status: "suspended",
    },
    {
      id: "4",
      doctor: {
        name: "Dr. María Gómez",
        photo: "https://source.unsplash.com/random/800x600/?person",
      },
      date: "2023-06-16",
      time: "02:30 PM",
      status: "missed",
    },
    {
      id: "5",
      doctor: {
        name: "Dr. Juan Pérez",
        photo: "https://source.unsplash.com/random/800x600/?city",
      },
      date: "2023-06-15",
      time: "10:00 AM",
      status: "attended",
    },
    {
      id: "6",
      doctor: {
        name: "Dr. María Gómez",
        photo: "https://source.unsplash.com/random/800x600/?rose",
      },
      date: "2023-06-16",
      time: "02:30 PM",
      status: "suspended",
    },
    // Agrega más citas según sea necesario
  ];

  const handleCardPress = (item: Appointment) => {
    navigation.navigate("AppointmentDetails");
  };

  const renderAppointmentItem = ({ item }: { item: Appointment }) => {
    const formattedDate = moment(item.date).format("LL");
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              source={{ uri: item.doctor.photo }}
              style={styles.doctorPhoto}
            />
            <View style={styles.headerText}>
              <Text style={styles.doctorName}>{item.doctor.name}</Text>
              <Text style={styles.status}>Pendiente</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.date}>
              {" "}
              <Icon name="event" /> {formattedDate}
            </Text>
            <Text style={styles.date}>
              {" "}
              <Icon name="access-time" /> {item.time}
            </Text>
          </View>
          <View style={styles.contentButton}>
            <TouchableOpacity style={[styles.button, styles.buttonCancel]}>
              <Text style={styles.textButtonCancel}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonReschedule]}
              onPress={() => handleCardPress(item)}
            >
              <Text style={styles.textButtonReschedule}>Reprogramar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {appointmentsData.length > 0 ? (
        <FlatList
          data={appointmentsData}
          renderItem={renderAppointmentItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No hay citas pendientes</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 5,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  doctorPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#f7f7fb",
    borderRadius: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
  contentButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  buttonCancel: {
    borderWidth: 1,
    borderColor: "#61282D",
  },
  buttonReschedule: {
    backgroundColor: "#F9A13C",
  },
  textButtonCancel: {
    color: "#61282D",
    fontWeight: "bold",
    fontSize: 15,
  },
  textButtonReschedule: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default AppointmentScreen;
