import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";

const OnboardingScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Validation Error", "Please fill out both fields.");
      return;
    }
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Header Section */}
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

        {/* Form Section */}
        <View style={styles.form}>
          <Text style={styles.label}>Name *</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor="#888"
            autoCapitalize="none"
          />

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Submit
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#495E57",
  },
  buttonContent: {
    paddingVertical: 10,
  },
});

export default OnboardingScreen;
