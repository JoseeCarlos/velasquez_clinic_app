import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/es";

interface Notification {
  id: string;
  type: "success" | "info" | "warning" | "error";
  message: string;
  patientName: string;
  date: string;
}

const NotificationItem: React.FC<Notification> = ({
  type,
  message,
  patientName,
  date,
}) => {
  let iconName: string;
  let iconColor: string;

  switch (type) {
    case "success":
      iconName = "checkmark-circle-outline";
      iconColor = "#4CAF50";
      break;
    case "info":
      iconName = "information-circle-outline";
      iconColor = "#2196F3";
      break;
    case "warning":
      iconName = "warning-outline";
      iconColor = "#FFC107";
      break;
    case "error":
      iconName = "alert-circle-outline";
      iconColor = "#FF0000";
      break;
    default:
      iconName = "notifications-outline";
      iconColor = "#888";
  }

  return (
    <View style={styles.notification}>
      <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
        <Icon name={iconName} size={24} color="#FFF" />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.patientName}>{patientName}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.date}>{moment(date).format("LL")}</Text>
      </View>
    </View>
  );
};

const notificationsData: Notification[] = [
  {
    id: "1",
    type: "success",
    message: "¡Su cita ha sido confirmada!",
    patientName: "Juan López",
    date: "2023-06-15",
  },
  {
    id: "2",
    type: "info",
    message: "Recordatorio: Su consulta es mañana",
    patientName: "María González",
    date: "2023-06-16",
  },
  {
    id: "3",
    type: "warning",
    message: "Urgente: Cambio de horario de su cita",
    patientName: "Carlos Ramírez",
    date: "2023-06-18",
  },
  {
    id: "4",
    type: "error",
    message: "¡Se ha cancelado su cita!",
    patientName: "Laura Torres",
    date: "2023-06-20",
  },
  {
    id: "5",
    type: "success",
    message: "Su análisis clínico está listo",
    patientName: "Alejandro Fernández",
    date: "2023-06-22",
  },
  {
    id: "6",
    type: "info",
    message: "Recordatorio: Su consulta de seguimiento es hoy",
    patientName: "Sofía Rodríguez",
    date: "2023-06-23",
  },
  {
    id: "7",
    type: "warning",
    message: "Importante: Actualización de información médica requerida",
    patientName: "Gabriel Silva",
    date: "2023-06-25",
  },
  {
    id: "8",
    type: "error",
    message: "Su cirugía ha sido pospuesta",
    patientName: "Ana Vargas",
    date: "2023-06-27",
  },
];

const Notification: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificaciones</Text>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        {notificationsData.map((notification) => (
          <NotificationItem
            id={notification.id}
            key={notification.id}
            type={notification.type}
            message={notification.message}
            patientName={notification.patientName}
            date={notification.date}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: "#F5F5F5",
  },
  header: {
    position: "relative",
    top: 0,
    backgroundColor: "#F9A13C",
    height: 85,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    padding: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: -150,
    padding: 10,
  },
  headerButton: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,

    marginBottom: 10,
    elevation: 2,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  messageContainer: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: "#333",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
});

export default Notification;
