import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Feather";

interface NewsData {
  id: string;
  title: string;
  description: string;
  fecha: string;
  likes: number;
  dislikes: number;
  type: "news" | "promotion";
  image: string;
}

interface NewsProps {
  navigation: any;
}

const News: React.FC<NewsProps> = ({ navigation }) => {
  const [filter, setFilter] = useState<"all" | "news" | "promotion">("all");
  const [searchText, setSearchText] = useState("");

  const newsData: NewsData[] = [
    {
      id: "1",
      title: "¡Última semana para presentar tu candidatura a los Premios...",
      description: "Descripción de la noticia 1",
      fecha: "13/06/2023",
      likes: 10,
      dislikes: 2,
      type: "news",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Ivoclar-escaner-PrograScan-PS7.png?alt=media&token=9d33ab3e-9a20-4b58-8485-c626aa188306",
    },
    {
      id: "2",
      title: "10 consejos para preparar y mantener la salud bucal...",
      description: "Descripción de la noticia 2",
      fecha: "13/06/2023",
      likes: 5,
      dislikes: 1,
      type: "promotion",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Dentistas_deteccion_cancer-oral.jpg?alt=media&token=4ada8136-952d-42e0-a67d-005dc52fd25a",
    },
    {
      id: "3",
      title: "10 consejos para preparar y mantener la salud bucal...",
      description: "Descripción de la noticia 2",
      fecha: "13/06/2023",
      likes: 5,
      dislikes: 1,
      type: "news",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Numero-dentistas-Espana.jpg?alt=media&token=b230cd1d-0abf-48fd-903c-5aadaf2157a6",
    },
    {
      id: "4",
      title: "10 consejos para preparar y mantener la salud bucal...",
      description: "Descripción de la noticia 2",
      fecha: "13/06/2023",
      likes: 5,
      dislikes: 1,
      type: "promotion",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Tecnologia_Odontologia_SEPA-Sevilla23.jpg?alt=media&token=f66deb30-92ba-4b80-bdbb-f25e295ea150",
    },
    // Agrega más noticias según sea necesario
  ];

  const handleLike = (id: string) => {
    // Lógica para manejar el evento de "like" de la noticia con el ID proporcionado
    console.log("Like clicked for news ${id}");
  };

  const handleDislike = (id: string) => {
    // Lógica para manejar el evento de "dislike" de la noticia con el ID proporcionado
    console.log("Dislike clicked for news ${id}");
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleFilter = (filterType: "all" | "news" | "promotion") => {
    setFilter(filterType);
  };

  const renderNewsItem = ({ item }: { item: NewsData }) => {
    return (
      <View style={styles.newsItem}>
        <Image source={{ uri: item.image }} style={styles.newsImage} />
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleLike(item.id)}>
            <Icon name="thumbs-up" size={24} color="#61282d" />
          </TouchableOpacity>
          <Text style={styles.likeCount}>{item.likes}</Text>
          <TouchableOpacity onPress={() => handleDislike(item.id)}>
            <Icon name="thumbs-down" size={24} color="#61282d" />
          </TouchableOpacity>
          <Text style={styles.dislikeCount}>{item.dislikes}</Text>
        </View>
      </View>
    );
  };

  const filteredNewsData = newsData.filter((news) => {
    if (filter === "all") {
      return true;
    } else {
      return news.type === filter;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Noticias y Promociones</Text>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>
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
            filter === "news" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilter("news")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filter === "news" && styles.activeFilterButtonText,
            ]}
          >
            Noticias
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "promotion" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilter("promotion")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filter === "promotion" && styles.activeFilterButtonText,
            ]}
          >
            Promociones
          </Text>
        </TouchableOpacity>
      </View>
      {filteredNewsData.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={filteredNewsData}
            renderItem={renderNewsItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <Text style={styles.noNewsText}>No hay noticias disponibles</Text>
      )}
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
  marginLeft: -90,
  padding: 10,
  },
  headerButton: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "bold",
  },
  filterContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  },
  filterButton: {
  marginRight: 10,
  paddingVertical: 8,
  paddingHorizontal: 16,
  marginHorizontal: 15,
  marginVertical: 15,
  borderRadius: 20,
  backgroundColor: "#dbd4d4",
  },
  activeFilterButton: {
  backgroundColor: "#61282D",
  },
  filterButtonText: {
  color: "#7c7979",
  },
  activeFilterButtonText: {
  color: "#fff",
  },
  newsItem: {
  marginBottom: 20,
  backgroundColor: "#fff",
  borderRadius: 10,
  elevation: 5,
  shadowColor: "#000",
  shadowOffset: {
  width: 0,
  height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  marginHorizontal: 15,
  },
  newsImage: {
  width: "100%",
  height: 200,
  resizeMode: "cover",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  },
  newsTitle: {
  fontSize: 18,
  fontWeight: "bold",
  marginTop: 10,
  marginHorizontal: 10,
  },
  newsDescription: {
  fontSize: 14,
  marginTop: 5,
  marginHorizontal: 10,
  },
  iconContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 10,
  marginHorizontal: 10,
  },
  likeCount: {
  marginLeft: 5,
  marginRight: 15,
  },
  dislikeCount: {
  marginLeft: 5,
  },
  listContainer: {
  flex: 1,
  marginHorizontal: 10,
  },
  noNewsText: {
  textAlign: "center",
  marginTop: 20,
  fontSize: 16,
  color: "#7c7979",
  },
  });
  
  export default News;
