import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Appbar, Avatar } from "react-native-paper";

const SuperHeader = ({ navigation, avatarSource }) => {
  return (
    <Appbar.Header style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("E:/LittleLemonProject/assets/back-arrow.png")}
          style={styles.backButton}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require("E:/LittleLemonProject/assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <Avatar.Image source={avatarSource} size={40} style={styles.avatar} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 50,
  },
  lemon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  titleContainer: {
    marginLeft: 10,
  },
  title: {
    width: 100,
    height: 30,
  },
  avatar: {
    marginLeft: 20,
  },
});

export default SuperHeader;
