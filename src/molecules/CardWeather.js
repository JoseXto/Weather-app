import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CardWeather = ({
  country,
  city,
  region,
  temperature,
  iconUrl,
  conditionText,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.country}>{country}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.region}>{region}</Text>
      </View>
      <Text style={styles.temperature}>{temperature} C°</Text>
      <View style={styles.border}>
        <Image style={styles.icon} source={{ uri: iconUrl }} />
        <Text style={styles.condition}>{conditionText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  country: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  city: {
    fontSize: 16,
    marginRight: 5,
  },
  region: {
    fontSize: 16,
  },
  temperature: {
    fontSize: 18,
    marginBottom: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  condition: {
    fontSize: 16,
  },
  border: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    marginBottom: 5,
    marginTop: 5,
    paddingVertical: 8,
  },
});

export default CardWeather;
