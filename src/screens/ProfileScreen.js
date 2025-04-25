import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";
import { Button } from "react-native-paper";
import SuperHeader from "../components/SuperHeader"; // Adjust path if needed

const ProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("Tilly");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("tillydoe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("(217) 555-0113");
  const [orderStatuses, setOrderStatuses] = useState(true);
  const [passwordChanges, setPasswordChanges] = useState(true);
  const [specialOffers, setSpecialOffers] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  const handleLogout = () => {
    navigation.navigate("Onboarding");
  };

  return (
    <View style={styles.container}>
      <SuperHeader
        navigation={navigation}
        avatarSource={require("E:/LittleLemonProject/assets/avatar.png")}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.sectionTitle}>Profile Information</Text>

        <View style={styles.avatarSection}>
          <Image
            source={require("E:/LittleLemonProject/assets/avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.avatarButtons}>
            <Button mode="contained" style={styles.button}>
              Change
            </Button>
            <Button mode="outlined" style={styles.button}>
              Remove
            </Button>
          </View>
        </View>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.sectionTitle}>Email Notifications</Text>

        <View style={styles.notificationItem}>
          <Text>Order Statuses</Text>
          <Switch value={orderStatuses} onValueChange={setOrderStatuses} />
        </View>
        <View style={styles.notificationItem}>
          <Text>Password Changes</Text>
          <Switch value={passwordChanges} onValueChange={setPasswordChanges} />
        </View>
        <View style={styles.notificationItem}>
          <Text>Special Offers</Text>
          <Switch value={specialOffers} onValueChange={setSpecialOffers} />
        </View>
        <View style={styles.notificationItem}>
          <Text>Newsletter</Text>
          <Switch value={newsletter} onValueChange={setNewsletter} />
        </View>

        <View style={styles.buttonGroup}>
          <Button mode="contained" onPress={handleLogout} style={styles.button}>
            Log Out
          </Button>
          <Button mode="outlined" style={styles.button}>
            Discard Changes
          </Button>
          <Button mode="contained" style={styles.button}>
            Save Changes
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#333",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  avatarSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  avatarButtons: {
    flexDirection: "column",
    gap: 5,
  },
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonGroup: {
    marginTop: 30,
  },
  button: {
    marginVertical: 5,
  },
});

export default ProfileScreen;
