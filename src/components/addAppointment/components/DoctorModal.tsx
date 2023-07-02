import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import DoctorCard from "./CardDoctor";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

interface Doctor {
  name: string;
  specialty: string;
  image: string;
}

interface DoctorModalProps {
  visible: boolean;
  onClose: (closed: boolean) => void;
  setDoctor: (doctor: Doctor) => void;
}

const DoctorModal: React.FC<DoctorModalProps> = ({
  visible,
  onClose,
  setDoctor,
}) => {
  const doctors: Doctor[] = [
    {
      name: "Dr. Alejandro Gómez",
      specialty: "Neurología",
      image: "https://source.unsplash.com/random/800x600/?person",
    },
    {
      name: "Dra. Gabriela Hernández",
      specialty: "Ginecología",
      image: "https://source.unsplash.com/random/800x600/?cat",
    },
    {
      name: "Dr. Antonio Silva",
      specialty: "Oftalmología",
      image: "https://source.unsplash.com/random/800x600/?dog",
    },
    {
      name: "Dra. Ana López",
      specialty: "Oncología",
      image: "https://source.unsplash.com/random/800x600/?cat",
    },
    {
      name: "Dr. Manuel Torres",
      specialty: "Cirugía General",
      image: "https://source.unsplash.com/random/800x600/?person",
    },
    {
      name: "Dra. Lucía Morales",
      specialty: "Psiquiatría",
      image: "https://source.unsplash.com/random/800x600/?dog",
    },
    {
      name: "Dr. Ricardo Mendoza",
      specialty: "Medicina Interna",
      image: "https://source.unsplash.com/random/800x600/?cat",
    },
  ];
  const [searchItem, setSearchItem] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleCloseModal = () => {
    setSearchItem("");
    onClose(false);
  };

  useEffect(() => {
    setFilteredDoctors(
      doctors.filter((doctor) => {
        return doctor.name.toLowerCase().includes(searchItem.toLowerCase());
      })
    );
  }, [searchItem]);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Seleccionar doctor</Text>
          <View style={styles.searchContainer}>
            <FontAwesome
              name="search"
              size={16}
              color="#aaa"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar doctor..."
              value={searchItem}
              onChangeText={setSearchItem}
            />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.doctorsContent}>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.name}
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
                rating={4.5}
                onPress={() => {
                  setDoctor(doctor);
                  handleCloseModal();
                }}
              />
            ))
          ) : (
            <Text style={styles.noResultsText}>
              No se encontraron resultados
            </Text>
          )}
        </ScrollView>
        <View>
          <TouchableOpacity onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 16,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },
  doctorContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#555",
  },
  titleContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  noResultsText: {
    fontSize: 16,
    textAlign: "center",
  },
  doctorsContent: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
    alignContent: "center",
    alignItems: "center",
  },
});

export default DoctorModal;
