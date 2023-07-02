import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import ScheduleList, { AppointmentSchedule } from "./AppointmentList";

interface AppointmentModalProps {
  visible: boolean;
  onClose: (isVisible: boolean) => void;
  setSelectTime: (time: string) => void;
  date: string;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  visible,
  onClose,
  setSelectTime,
  date,
}) => {
  const schedule: AppointmentSchedule[] = [
    { time: "9:00 AM", isAvailable: true },
    { time: "10:00 AM", isAvailable: false },
    { time: "11:00 AM", isAvailable: true },
    { time: "12:00 PM", isAvailable: true },
    { time: "1:00 PM", isAvailable: false },
    { time: "2:00 PM", isAvailable: true },
    { time: "3:00 PM", isAvailable: true },
    { time: "4:00 PM", isAvailable: true },
    { time: "5:00 PM", isAvailable: true },
    { time: "6:00 PM", isAvailable: true },
    { time: "7:00 PM", isAvailable: true },
    { time: "8:00 PM", isAvailable: true },
    { time: "9:00 PM", isAvailable: true },
  ];

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Horarios disponibles</Text>
          <Text style={styles.titleText}>{date}</Text>
        </View>
        <View style={styles.scheduleContainer}>
          <ScrollView contentContainerStyle={styles.scheduleContent}>
            <ScheduleList schedule={schedule}  />
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity onPress={() => onClose(false)}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

interface ScheduleCardProps extends AppointmentSchedule {
  setSelectTime: (time: string) => void;
  onClose: (isVisible: boolean) => void;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  time,
  isAvailable,
  setSelectTime,
  onClose,
}) => {
  const cardStyle = isAvailable ? styles.availableCard : styles.occupiedCard;
  const textStyle = isAvailable ? styles.availableText : styles.occupiedText;

  return (
    <TouchableOpacity
      style={[styles.card, cardStyle]}
      onPress={() => {
        if (isAvailable) {
          setSelectTime(time);
          onClose(false);
        }
      }}
    >
      <Text style={[styles.cardText, textStyle]}>{time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1, // Para que el botón de cerrar quede por encima del contenido
  },
  closeButtonText: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#333",
  marginTop: 20,
  textAlign: "center",
  },
  titleContainer: {
  height: 50,
  justifyContent: "center",
  alignItems: "center",
  },
  titleText: {
  fontSize: 18,
  fontWeight: "bold",
  },
  scheduleContainer: {
  flex: 1,
  flexDirection: "row",
  paddingTop: 20,
  },
  scheduleContent: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  paddingBottom: 20,
  },
  card: {
  width: "48%",
  aspectRatio: 1,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
  },
  availableCard: {
  backgroundColor: "#6BBE9C",
  },
  occupiedCard: {
  backgroundColor: "#E17055",
  },
  cardText: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#fff",
  },
  availableText: {
  color: "#fff",
  },
  occupiedText: {
  color: "#fff",
  },
  });
  
  export default AppointmentModal;
