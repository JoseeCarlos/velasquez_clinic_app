import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../header/main";
import AppointmentHistoryScreen from "./components/AppointmentHistory";
import { StackNavigationProp } from "@react-navigation/stack";



const AppointmentHistoryPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Historial de atenciones" navigation={navigation} notificationCount={3} />
      <View style={styles.content}>
        <AppointmentHistoryScreen  />
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
    backgroundColor: "#6BBE9C",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
});

export default AppointmentHistoryPage;
