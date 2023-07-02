import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Modal,
  Pressable,
  Image,
} from "react-native";
import Header from "../header/main";
// import DateTimePicker from "@react-native-community/datetimepicker";
import AppointmentModal from "./components/AppointmentModal";
import DoctorModal from "./components/DoctorModal";
import moment from "moment";
import "moment/locale/es";
import { FontAwesome } from "@expo/vector-icons";
import SuccessScreen from "./components/SuccessScreen";

const AddAppointment: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [dateS, setDateS] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [showDoctor, setShowDoctor] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<null | any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({
    name: "Michael Carballo",
    photo:
      "https://source.unsplash.com/random/800x600/?user",
  });

  const [doctor, setDoctor] = useState({});

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const onChange = ({ type }: any, selectedDate: any) => {
    if (type == "set") {
      setShow(false);
      setDate(selectedDate);
      setDateS(selectedDate.toString().substr(4, 12));
    } else {
      setShow(false);
    }
  };

  moment.locale("es");

  const showDatepicker = () => {
    setShow(true);
    setMode("date");
    console.log("nasdjsd");
  };

  const handleSelectDoctor = (doctor: any) => {
    setSelectedDoctor(doctor);
    setShowDoctor(false);
  };

  const handleClearDoctor = () => {
    setSelectedDoctor(null);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        title="Nueva cita"
        navigation={navigation}
        notificationCount={3}
      />
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.label}>Nombre</Text>
          <View style={styles.card}>
            <Image source={{ uri: user.photo }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{user.name}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.label}>Seleccionar doctor</Text>
        <Pressable onPress={() => setShowDoctor(true)}>
          <View style={styles.card}>
            {selectedDoctor ? (
              <>
                <Image
                  source={{ uri: selectedDoctor.image }}
                  style={styles.image}
                />
                <View style={styles.content}>
                  <Text style={styles.title}>{selectedDoctor.name}</Text>
                  <TouchableOpacity
                    style={styles.clearButton}
                    onPress={handleClearDoctor}
                  >
                    <Text style={styles.clearButtonText}>Limpiar</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <Text style={styles.noDoctorMessage}>Seleccione un doctor</Text>
              )}
            </View>
          </Pressable>
          <DoctorModal
            visible={showDoctor}
            onClose={setShowDoctor}
            setDoctor={setSelectedDoctor}
          />
            <Text style={styles.label}>Fecha</Text>
    <Pressable onPress={showDatepicker}>
      <View style={styles.card}>
        <FontAwesome
          name="calendar"
          size={24}
          color="#777"
          style={styles.icon}
        />
        {dateS ? (
          <TextInput
            style={styles.input}
            value={dateS}
            placeholderTextColor="#777"
            editable={false}
          />
        ) : (
          <Text style={styles.placeholderText}>Seleccione una fecha</Text>
        )}
      </View>
    </Pressable>

    <Text style={styles.label}>Horario</Text>
    <Pressable onPress={() => setShowModal(true)}>
      <View style={styles.card}>
        <FontAwesome
          name="clock-o"
          size={24}
          color="#777"
          style={styles.icon}
        />
        {selectTime ? (
          <TextInput
            style={styles.input}
            value={selectTime}
            placeholderTextColor="#777"
            editable={false}
          />
        ) : (
          <Text style={styles.placeholderText}>Seleccione un horario</Text>
        )}
      </View>
    </Pressable>
    <Text style={styles.label}>Tipo de cita</Text>

    <TouchableOpacity style={styles.buttonAdd} onPress={handleOpenModal}>
      <Text style={styles.textButton}>Reservar Cita</Text>
    </TouchableOpacity>

    <Modal visible={modalVisible} animationType="slide" transparent>
      <SuccessScreen visible={modalVisible} onClose={handleCloseModal} />
    </Modal>
    <AppointmentModal
      visible={showModal}
      onClose={setShowModal}
      setSelectTime={setSelectTime}
      date={dateS}
    />

    {show && (<></>
      // <DateTimePicker
      //   value={date}
        
      //   is24Hour={true}
      //   onChange={onChange}
      //   display="spinner"
      //   minimumDate={new Date()}
      //   maximumDate={
      //     new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
      //   }
      // />
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  dateInput: {
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#6BBE9C",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#61282D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonAdd: {
    backgroundColor: "#61282D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },

  placeholderText: {
    flex: 1,
    fontSize: 16,
    color: "#777",
    alignSelf: "center",
  },
  datePicker: {
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  clearButton : {
    backgroundColor: "#61282D",
    paddingVertical: 10,
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  noDoctorMessage: {
    fontSize: 16,
    color: "#777", 
    alignSelf: "center",
    marginBottom: 20,
  },


});

export default AddAppointment;