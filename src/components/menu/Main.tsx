import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface UserData {
  name: string;
  email: string;
  photo: string;
}

interface MenuProps {
  isOpen: boolean;
  navigation: any; // Replace with the appropriate navigation type
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, navigation, toggleMenu }) => {
  const [cardColor, setCardColor] = useState("#fff");
  const userData: UserData = {
    name: "Michael Carballo",
    email: "micaela@gmail.com",
    photo: "https://source.unsplash.com/random/800x600/?user",
  };

  const handlePress = () => {
    // onPress();
    setCardColor("#f2f2f2");
  };

  const OptionItem: React.FC<{
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    actionIcon: keyof typeof Ionicons.glyphMap;
    onPress?: () => void;
  }> = ({ icon, label, actionIcon, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.optionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name={icon} size={24} color="#333" />
          </View>
          <Text style={styles.optionLabel}>{label}</Text>
          <View style={styles.actionIconContainer}>
            <Ionicons name={actionIcon} size={20} color="#888" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleMenu}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
            <Ionicons name="close" size={30} color="#333" />
          </TouchableOpacity>
          <ScrollView>
            <TouchableOpacity
              style={[styles.card, { backgroundColor: cardColor }]}
              onPress={handlePress}
            >
              <Image
                source={{ uri: userData.photo }}
                style={styles.userPhoto}
              />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{userData.name}</Text>
                <Text style={styles.userEmail}>{userData.email}</Text>
                <TouchableOpacity
                  style={styles.buttonInfo}
                  onPress={() => {
                    navigation.navigate("EditProfile");
                    toggleMenu();
                  }}
                >
                  <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={styles.cardMenu}>
              <Text style={styles.title}>Menú</Text>
              <View style={styles.menuContainer}>
                <OptionItem
                  icon="ios-home"
                  label="Inicio"
                  actionIcon="ios-arrow-forward"
                />
                <OptionItem
                  icon="ios-settings"
                  label="Configuración"
                  actionIcon="ios-arrow-forward"
                />
                <OptionItem
                  icon="ios-calendar"
                  label="Calendario"
                  actionIcon="ios-arrow-forward"
                />
                <OptionItem
                  icon="ios-star"
                  label="Favoritos"
                  actionIcon="ios-arrow-forward"
                />
                <OptionItem
                  icon="ios-person"
                  label="Quienes Somos"
                  actionIcon="ios-arrow-forward"
                  onPress={() => {
                    toggleMenu();
                    navigation.navigate("About");
                  }}
                />
              </View>
            </View>
            <View style={styles.footerModal}>
              <Text style={styles.titleFooter}>
                Centro de Especialidades Odontológicas Velasquez
              </Text>
              <Text style={styles.titleFooter}>Version 1.0.1</Text>
              <Text style={styles.titleFooter}>@ 2023 Velasquez</Text>
              <Text style={styles.titleFooterRed}>
                Políticas de privacidad - Términos de Uso
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#f2f2f2",
  },
  modalContent: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f2f2f2",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 20,
    marginVertical: 75,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 250,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 14,
    color: "#888",
  },
  buttonInfo: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#F9A13C",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  cardMenu: {
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  menuContainer: {
    justifyContent: "space-between",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
  },
  optionLabel: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    padding: 10,
  },
  actionIconContainer: {
    width: 24,
    alignItems: "center",
  },
  footerModal: {
    flex: 1,
    flexDirection: "column",
    height: 100,

    marginHorizontal: 20,
    marginBottom: 20,
  },
  titleFooter: {
    fontSize: 13,
    textAlign: "center",
    color: "#969292",
  },
  titleFooterRed: {
    fontSize: 13,
    textAlign: "center",
    color: "#e97373",
  },
});

export default Menu;
