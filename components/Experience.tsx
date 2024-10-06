import { Text, TouchableHighlight, StyleSheet, View } from "react-native";

export default function Experience() {
  return (
    <View style={styles.containerButton}>
      <TouchableHighlight>
        <Text style={styles.buttonText}>Feliz</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.buttonText}>Feliz</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.buttonText}>Feliz</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.buttonText}>Feliz</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 14,
  },
});
