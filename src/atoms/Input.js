import { TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = ({ placeholder, value, onChangeText, placeholderTextColor }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "white",
  },
});

export default Input;
