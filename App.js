import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "./src/atoms/Input";
import CustomButton from "./src/atoms/CustomButton";
import CardWeather from "./src/molecules/CardWeather";
import config from "./config.json";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = config.API_KEY;

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como esta el clima hoy?</Text>
      <Input
        placeholder="Buscar ciudad ..."
        value={city}
        onChangeText={setCity}
        placeholderTextColor="white"
      />
      <CustomButton onPress={fetchWeatherData} title="Consultar el clima" />
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherData && (
        <CardWeather
          country={weatherData.location.country}
          city={weatherData.location.name}
          region={weatherData.location.region}
          temperature={weatherData.current.temp_c}
          iconUrl={`https:${weatherData.current.condition.icon}`}
          conditionText={weatherData.current.condition.text}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
  error: {
    fontSize: 18,
    color: "red",
    marginTop: 20,
  },
});
