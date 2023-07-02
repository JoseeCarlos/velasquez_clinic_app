import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


interface TreatmentData {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Treatment: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("all");

  const treatmentsData = [
    {
      id: "1",
      title: "Implantes Dentales",
      description: "Descripción del tratamiento 1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/implan.jpg?alt=media&token=0ea8e172-87be-41ea-956e-61d3da685552",
    },
    {
      id: "2",
      title: "Limpieza Dental",
      description: "Descripción del tratamiento 2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/ort.jpg?alt=media&token=2562c552-073e-4b1d-b2aa-8df9282bc9d0",
    },
    {
      id: "3",
      title: "Blanqueamiento Dental",
      description: "Descripción del tratamiento 2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/son.jpg?alt=media&token=6e76623c-6b4c-4894-a48e-db98e2483481",
    },
    {
      id: "4",
      title: "Ortodoncia",
      description: "Descripción del tratamiento 2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/pedi.jpg?alt=media&token=02fced34-a46e-42fc-9580-435bda94232d",
    },
    {
      id: "5",
      title: "Endodoncia",
      description: "Descripción del tratamiento 2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/son.jpg?alt=media&token=6e76623c-6b4c-4894-a48e-db98e2483481",
    },
    {
      id: "6",
      title: "Endodoncia",
      description: "Descripción del tratamiento 2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/peri.jpg?alt=media&token=7dd6d2b1-c0f7-4c77-b3b9-9320cdaa12c8",
    },
    // Agrega más tratamientos según sea necesario
  ];

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleFilter = (filterType: string) => {
    setFilter(filterType);
  };

  const renderTreatmentCard = ({ item }: { item: TreatmentData }) => {
    return (
      <TouchableOpacity style={styles.treatmentCard}>
        <Image source={{ uri: item.image }} style={styles.treatmentImage} />
        <View style={styles.textContainer}>
          <Text style={styles.treatmentTitle}>{item.title}</Text>
          <Text style={styles.treatmentDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const filteredTreatments = treatmentsData.filter((treatment) => {
    if (filter === "all") {
      return true;
    } else {
      return treatment.title === filter;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tratamientos</Text>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar tratamientos..."
          onChangeText={handleSearch}
          value={searchText}
        />
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "all" && styles.activeFilterButton,
            ]}
            onPress={() => handleFilter("all")}
          >
            <Text
              style={[
                styles.filterButtonText,
                filter === "all" && styles.activeFilterButtonText,
              ]}
            >
              Todos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "Endodoncia" && styles.activeFilterButton,
            ]}
            onPress={() => handleFilter("Endodoncia")}
          >
            <Text
              style={[
                styles.filterButtonText,
                filter === "Endodoncia" && styles.activeFilterButtonText,
              ]}
            >
             Endodoncia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "Prótesis Dental" && styles.activeFilterButton,
            ]}
            onPress={() => handleFilter("Prótesis Dental")}
          >
            <Text
              style={[
                styles.filterButtonText,
                filter === "Prótesis Dental" && styles.activeFilterButtonText,
              ]}
            >
              Prótesis Dental
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {filteredTreatments.length > 0 ? (
        <FlatList
          data={filteredTreatments}
          renderItem={renderTreatmentCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.treatmentList}
        />
      ) : (
        <View style={styles.emptyContainer} >
          <Text>No se encontraron tratamientos</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: -190,
    padding: 10,
  },
  headerButton: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  searchContainer: {
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  filterButton: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#dbd4d4",
  },
  activeFilterButton: {
    backgroundColor: "#61282D",
  },
  filterButtonText: {
    color: "#6e6b6b",
    
  },
  activeFilterButtonText: {
    color: "#fff",
  },
  treatmentList: {
    flexGrow: 1,
    marginHorizontal: 10,
    marginVertical: 1,
  },
  treatmentCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    
    margin: 8,
   
    alignItems: "center",
    width: 300,
    height:200,
    overflow: 'hidden',

  },
  treatmentImage: {
    width: '100%',
    height: '100%',
    
  },
  treatmentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  treatmentDescription: {
    fontSize: 12,
    textAlign: "center",
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    
    padding: 10,
  },
    emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
});

export default Treatment;
