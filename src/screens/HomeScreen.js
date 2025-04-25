import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-paper";
import SuperHeader from "../components/SuperHeader"; // Adjust path if needed

const menuItems = [
  {
    id: "1",
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago...",
    price: "$12.99",
    category: "Starter",
    image: require("E:/LittleLemonProject/assets/GreekSalad.png"),
  },
  {
    id: "2",
    name: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic...",
    price: "$7.99",
    category: "Starter",
    image: require("E:/LittleLemonProject/assets/bruschetta.png"),
  },
  {
    id: "3",
    name: "Grilled Fish",
    description:
      "Barbequed catch of the day. with red onion, crisp capers, chive creme fraiche,",
    price: "$20.00",
    category: "Main",
    image: require("E:/LittleLemonProject/assets/grilled-fish.png"),
  },
  {
    id: "4",
    name: "Pasta",
    description:
      "Penne with fried aubergines, tomato sauce, fresh chilli, garlic, basil & salted...",
    price: "$18.99",
    category: "Main",
    image: require("E:/LittleLemonProject/assets/pasta.png"),
  },
  {
    id: "5",
    name: "Lemon Dessert",
    description:
      "Light and fluffy traditional homemade Italian Lemon and ricotta cake",
    price: "$10.00",
    category: "Dessert",
    image: require("E:/LittleLemonProject/assets/lemon-dessert.png"),
  },
];

const categories = ["Starters", "Mains", "Desserts", "Drinks"];

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("Starters");

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory.slice(0, -1) // "Starters" → "Starter"
  );

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.menuTitle}>{item.name}</Text>
        <Text style={styles.menuDescription}>{item.description}</Text>
        <Text style={styles.menuPrice}>{item.price}</Text>
      </View>
      <Image source={item.image} style={styles.menuImage} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <SuperHeader
        navigation={navigation}
        avatarSource={require("E:/LittleLemonProject/assets/avatar.png")}
      />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.textSection}>
            <Text style={styles.title}>Little Lemon</Text>
            <Text style={styles.subtitle}>Chicago</Text>
            <Text style={styles.description}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <Image
            source={require("E:/LittleLemonProject/assets/food.png")}
            style={styles.heroImage}
          />
        </View>

        {/* Navigation Button */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Profile")}
          style={styles.button}
        >
          Go to Profile
        </Button>

        {/* Categories */}
        <Text style={styles.sectionTitle}>ORDER FOR DELIVERY!</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              style={[
                styles.categoryButton,
                selectedCategory === cat && styles.activeCategoryButton,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.activeCategoryText,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu List */}
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={renderMenuItem}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#495E57",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSection: {
    flex: 2,
    paddingRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F4CE14",
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    color: "#EEE9DA",
  },
  heroImage: {
    flex: 1,
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: "cover",
  },
  button: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#EDEFEE",
  },
  activeCategoryButton: {
    backgroundColor: "#495E57",
  },
  categoryText: {
    color: "#333",
    fontWeight: "600",
  },
  activeCategoryText: {
    color: "#fff",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  menuPrice: {
    fontSize: 14,
    fontWeight: "600",
  },
  menuImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginLeft: 10,
  },
});

export default HomeScreen;
