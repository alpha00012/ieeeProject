import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import colors from "../assets/colors.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

// Exemple de données de produits avec des images
const productsData = [
  { id: 1, name: "Product 1", price: "$10", image: require("../assets/item1.png") },
  { id: 2, name: "Product 2", price: "$20", image: require("../assets/item2.png") },
  { id: 3, name: "Product 3", price: "$15", image: require("../assets/item1.png") },
  // ... Ajoutez d'autres produits avec leurs images selon votre besoin
];

const Shop = ({ navigation }) => {
  const renderProductItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.price}</Text>
      {/* Ajoutez d'autres détails du produit si nécessaire */}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="menu"
          size={32}
          color={colors.white}
          style={{ position: "absolute", top: 10, left: 10 }}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.headerText}>Shop</Text>
        <Feather
          name="shopping-bag"
          size={24}
          color={colors.white}
          style={{ position: "absolute", top: 10, right: 10 }}
          // onPress={() => /* Action à effectuer au clic de l'icône */}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={productsData}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.cards}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  header: {
    height: "20%",
    backgroundColor: colors.secondary,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  headerText: {
    fontSize: 36,
    fontFamily: "Inter-900",
    color: colors.white,
    textAlign: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  cards: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  card: {
    backgroundColor: colors["grey-100"],
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "80%",
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Inter-700",
    color: colors.white,
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 16,
    fontFamily: "Inter-500",
    color: colors.white,
    textAlign: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 10,
  },
  
  
});

export default Shop;
