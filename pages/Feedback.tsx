import { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Feedback() {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <Text style={styles.titleFeedback}>Nos dê seu Feedback</Text>

      <Text style={styles.descriptionFeedback}>
        Sua opinião é importante para nós
      </Text>

      <View style={styles.textInput}>
        <TextInput style={styles.input} placeholder="Seu nome"></TextInput>

        <TextInput style={styles.input} placeholder="Seu e-mail"></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Descreva sua experiência..."
        ></TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  titleFeedback: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
  },
  descriptionFeedback: {
    color: "#787878",
    marginTop: 10,
  },
  textInput: {
    marginTop: 40,
    gap: 30,
  },
  input: {
    backgroundColor: "#CCC",
    borderRadius: 10,
    width: 300,
    height: 100,
  },
});
