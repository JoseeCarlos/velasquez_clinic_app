import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Header from "../header/main";
import Menu from "../menu/Main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import PendingAppointments from "../quotes/Main";
import AddAppointment from "../addAppointment/Main";
import AppointmentHistoryPage from "../appointmentHistory/Main";
import MenuHome from "../MenuHome";
import NewsComponent from "../NewsComponent";

interface Doctor {
  photo: string;
  name: string;
  specialty: string;
}

interface Appointment {
  date: string;
  time: string;
}

function HomeScreen({ navigation }: { navigation: any }) {
  const username = "Juan";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const doctor: Doctor = {
    photo: "https://source.unsplash.com/random/800x600/?person",
    name: "Dr. Juan Pérez",
    specialty: "Cardiología",
  };

  const appointment: Appointment = {
    date: "22 de junio de 2023",
    time: "10:00 AM",
  };

  return (
    <View style={styles.container}>
      <Header
        leftAction={toggleMenu}
        navigation={navigation}
        notificationCount={3}
      />

      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.greeting}>Hola, Luis Gonzales!</Text>
          <Text style={styles.question}>¿Qué tienes planeado para hoy?</Text>
        </View>

        <View style={styles.cardInfo}>
          <View style={styles.doctorInfo}>
            <Image source={{ uri: doctor.photo }} style={styles.doctorPhoto} />
            <View>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.appointmentInfo}>
            <Text style={styles.appointmentTitle}>Tu próxima cita:</Text>
            <Text style={styles.appointmentDate}>{appointment.date}</Text>
            <Text style={styles.appointmentTime}>{appointment.time}</Text>
          </View>
        </View>

        <Text style={styles.text}>Insights </Text>

        <MenuHome navigation={navigation} />

        <Text style={styles.text}>Noticias</Text>
        <NewsComponent />
      </ScrollView>

      <Menu
        isOpen={isMenuOpen}
        navigation={navigation}
        toggleMenu={toggleMenu}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const SettingsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Configuración"
        navigation={navigation}
        notificationCount={3}
      />
      <View style={styles.content}>
        <Text style={styles.text}>¡Pantalla de configuración!</Text>
      </View>
    </View>
  );
};

const MainScreen = ({ navigation }: { navigation: any }) => {
  const iconMapping: { [key: string]: keyof typeof Ionicons.glyphMap } = {
    Inicio: "home",
    Citas: "person",
    Pagos: "card",
    "Nueva Cita": "add-circle",
    Historial: "time",
  };

  return (
    <Tab.Navigator
    screenOptions={({ route }): BottomTabNavigationOptions => ({
      tabBarIcon: ({ focused, color, size }) => {
        // Obtener el nombre del icono según route.name
        const iconName = iconMapping[route.name] || "default-icon-name";

        return (
          <Ionicons
            name={iconName}
            size={size}
            color={color}
          />
        );
      },
        tabBarActiveTintColor: "#F9A13C",
        tabBarInactiveTintColor: "#61282D",
        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 1,
          borderTopColor: "#DDD",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
      })}
    >
      {/* Tab Screens */}
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Citas"
        component={PendingAppointments}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Nueva Cita"
        component={AddAppointment}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Pagos"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Historial"
        component={AppointmentHistoryPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#F9A13C",
    height: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",

    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  question: {
    fontSize: 14,
    color: "#a19c9c",
  },

  cardInfo: {
    backgroundColor: "#F9A13C",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  doctorPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  doctorSpecialty: {
    fontSize: 16,
    color: "white",
  },
  line: {
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 16,
  },
  appointmentInfo: {
    marginLeft: 76,
    color: "white",
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  appointmentDate: {
    fontSize: 16,
    color: "white",
  },
  appointmentTime: {
    fontSize: 16,
    color: "white",
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
});

export default MainScreen;
