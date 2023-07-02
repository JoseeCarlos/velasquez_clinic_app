import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/es";

interface Payment {
  id: number;
  date: string;
  amount: number;
  treatment: {
    title: string;
    description: string;
    duration: string;
    dentist: string;
  };
  status: string;
}

const PaymentHistoryScreen: React.FC<{ navigation: any }> = ({
  navigation,
}) => {
  useEffect(() => {
    // Establecer el idioma español al cargar el componente
    moment.locale("es");
  }, []);

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [filteredPayments, setFilteredPayments] = useState<Payment[]>([]);

  const paymentHistoryData: Payment[] = [
    {
      id: 1,
      date: "2023-06-01",
      amount: 150,
      treatment: {
        title: "Limpieza Dental",
        description: "Remoción de placa y sarro, pulido dental.",
        duration: "1 hora",
        dentist: "Dr. Juan Pérez",
      },
      status: "Paid",
    },
    {
      id: 2,
      date: "2023-06-05",
      amount: 250,
      treatment: {
        title: "Extracción de Muelas del Juicio",
        description:
          "Extracción quirúrgica de las muelas del juicio impactadas.",
        duration: "2 horas",
        dentist: "Dra. María Gómez",
      },
      status: "Pending",
    },
    {
      id: 3,
      date: "2023-06-10",
      amount: 180,
      treatment: {
        title: "Tratamiento de Conducto",
        description:
          "Remoción de pulpa infectada y sellado del conducto radicular.",
        duration: "1.5 horas",
        dentist: "Dr. Luis Ramírez",
      },
      status: "Paid",
    },
    {
      id: 4,
      date: "2023-06-15",
      amount: 200,
      treatment: {
        title: "Blanqueamiento Dental",
        description: "Procedimiento para aclarar el color de los dientes.",
        duration: "1 hora",
        dentist: "Dra. Ana López",
      },
      status: "Pending",
    },
    {
      id: 5,
      date: "2023-06-20",
      amount: 300,
      treatment: {
        title: "Implante Dental",
        description: "Colocación de un implante dental en el hueso maxilar.",
        duration: "2 horas",
        dentist: "Dr. Carlos Martínez",
      },
      status: "Paid",
    },
    // Agrega más objetos de datos con diferentes tratamientos
  ];

  const filterPayments = () => {
    if (selectedFilter === null) {
      // No se aplica ningún filtro, mostrar todos los pagos
      setFilteredPayments(paymentHistoryData);
    } else if (selectedFilter === "today") {
      // Filtrar los pagos para mostrar solo los pagos de hoy
      const today = moment().format("YYYY-MM-DD");
      const filtered = paymentHistoryData.filter(
        (payment) => payment.date === today
      );
      setFilteredPayments(filtered);
    } else if (selectedFilter === "week") {
      // Filtrar los pagos
      // Filtrar los pagos para mostrar solo los pagos de la semana actual
      const startOfWeek = moment().startOf("week").format("YYYY-MM-DD");
      const endOfWeek = moment().endOf("week").format("YYYY-MM-DD");
      const filtered = paymentHistoryData.filter(
        (payment) => payment.date >= startOfWeek && payment.date <= endOfWeek
      );
      setFilteredPayments(filtered);
    } else if (selectedFilter === "month") {
      // Filtrar los pagos para mostrar solo los pagos del mes actual
      const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
      const endOfMonth = moment().endOf("month").format("YYYY-MM-DD");
      const filtered = paymentHistoryData.filter(
        (payment) => payment.date >= startOfMonth && payment.date <= endOfMonth
      );
      setFilteredPayments(filtered);
    }
  };

  const renderPaymentItem = ({ item }: { item: Payment }) => {
    const cardBorderColor = item.status === "Paid" ? "#fff" : "#fff";
    const formattedDate = moment(item.date).format("LL");

    return (
      <View style={[styles.card, { borderColor: cardBorderColor }]}>
        <View style={styles.cardHeader}>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.amount}>{item.amount}Bs</Text>
        </View>
        <Text style={styles.title}>{item.treatment.title}</Text>
        <Text style={styles.description}>{item.treatment.description}</Text>
        <Text style={styles.duration}>Duración: {item.treatment.duration}</Text>
        <Text style={styles.dentist}>Dentista: {item.treatment.dentist}</Text>
        <Text
          style={[
            styles.status,
            item.status === "Paid" ? styles.statusPaid : styles.statusPending,
          ]}
        >
          {item.status === "Paid" ? "Pagado" : "Pendiente"}
        </Text>
      </View>
    );
  };
  const handleFilterSelection = (filter: string | null) => {
    setSelectedFilter(filter);
    // Aquí puedes aplicar la lógica para filtrar los pagos según la fecha seleccionada
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pagos y Cuotas</Text>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === null && styles.filterButtonSelected,
          ]}
          onPress={() => handleFilterSelection(null)}
        >
          <Text
            style={
              selectedFilter === null
                ? styles.filterButtonTextSelected
                : styles.filterButtonText
            }
          >
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === "today" && styles.filterButtonSelected,
          ]}
          onPress={() => handleFilterSelection("today")}
        >
          <Text
            style={
              selectedFilter === "today"
                ? styles.filterButtonTextSelected
                : styles.filterButtonText
            }
          >
            Hoy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === "week" && styles.filterButtonSelected,
          ]}
          onPress={() => handleFilterSelection("week")}
        >
          <Text
            style={
              selectedFilter === "week"
                ? styles.filterButtonTextSelected
                : styles.filterButtonText
            }
          >
            Semana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === "month" && styles.filterButtonSelected,
          ]}
          onPress={() => handleFilterSelection("month")}
        >
          <Text
            style={
              selectedFilter === "month"
                ? styles.filterButtonTextSelected
                : styles.filterButtonText
            }
          >
            Mes
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {paymentHistoryData.length > 0 ? (
          <FlatList
            data={paymentHistoryData}
            renderItem={renderPaymentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.paymentList}
          />
        ) : (
          <Text>No hay pagos en el historial</Text>
        )}
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
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  filterButton: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#e7e3e3",
  },
  filterButtonSelected: {
    backgroundColor: "#61282d",
  },
  filterButtonText: {
    color: "#6e6b6b",
  },
  filterButtonTextSelected: {
    color: "white",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#757575",
  },
  treatment: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 4,
    borderRadius: 4,
    color: "#fff",
    marginTop: 8,
  },
  statusPaid: {
    backgroundColor: "#00C853",
  },
  statusPending: {
    backgroundColor: "#FF5722",
  },
  paymentList: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dentist: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#757575",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#757575",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#757575",
  },
  duration: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#757575",
  },
});

export default PaymentHistoryScreen;
