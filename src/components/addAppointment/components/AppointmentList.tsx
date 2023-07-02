import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface AppointmentSchedule {
  time: string;
  isAvailable: boolean;
}

const ScheduleCard: React.FC<AppointmentSchedule> = ({ time, isAvailable }) => {
  const cardStyle = isAvailable ? styles.availableCard : styles.occupiedCard;
  const textStyle = isAvailable ? styles.availableText : styles.occupiedText;

  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={[styles.cardText, textStyle]}>{time}</Text>
    </View>
  );
};

interface ScheduleListProps {
  schedule: AppointmentSchedule[];
}

const ScheduleList: React.FC<ScheduleListProps> = ({ schedule }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Horarios disponibles</Text>
      </View>
      <View style={styles.scheduleContainer}>
        {schedule.map((item, index) => (
          <ScheduleCard
            key={index}
            time={item.time}
            isAvailable={item.isAvailable}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scheduleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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

export default ScheduleList;
