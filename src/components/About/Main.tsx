import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

const AboutScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Acerca de </Text>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.infoContainer}>
          <Image
            source={require("../../../assets/login-logo.png")}
            style={styles.image}
          />
          {/* <Text style={styles.title}>Información de la clínica</Text> */}
          {/* Datos de la clínica */}
        </View>
        <View style={styles.line} />
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Misión</Text>
          <View style={styles.sectionContent}>
            <Image
              source={require("../../../assets/mision.png")}
              style={[styles.sectionImage, { flex: 1 }]}
              resizeMode="contain"
            />
            <Text style={styles.sectionText}>
              “Característica de la persona que desempeña un trabajo con pericia,
              aplicación, seriedad, honradez y eficacia, o del trabajo así
              desempeñado.”
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Responsabilidad</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              “Establecer la magnitud de las acciones y de cómo afrontarlas de la
              manera más positiva e integral para ayudar en un futuro”
            </Text>
            <Image
              source={require("../../../assets/responsabilidad.png")}
              style={[styles.sectionImage, { flex: 1 }]}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Calidad</Text>
          <View style={styles.sectionContent}>
            <Image
              source={require("../../../assets/calidad.png")}
              style={[styles.sectionImage, { flex: 1 }]}
              resizeMode="contain"
            />
            <Text style={styles.sectionText}>
              “Característica de servicio que satisface al cliente dando solución
              pronta y eficaz frente a los problemas que se presenten.”
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Pasión</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              “Amamos lo que hacemos y nos esforzamos por ser cada vez mejores”
            </Text>
            <Image
              source={require("../../../assets/pasion.png")}
              style={[styles.sectionImage, { flex: 1 }]}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
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
  infoContainer: {
    flexDirection: 'column',
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  sectionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionText: {
    flex: 1,
    marginRight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  sectionImage: {
    height: 100,
    borderRadius: 10,
  },
  line: {
    height: 0.5,
    backgroundColor: "#ccc",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containerMaps: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default AboutScreen;

