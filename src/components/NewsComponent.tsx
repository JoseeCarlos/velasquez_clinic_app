import React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";

interface NewsItem {
  id: number;
  title: string;
  image: string;
}

const NewsComponent: React.FC = () => {
  const newsData: NewsItem[] = [
    // News items data here
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {newsData.map((item) => (
        <View style={styles.card} key={item.id}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: 300,
    marginRight: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NewsComponent;
