import axios from "axios";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Switch, TextInput } from "react-native-gesture-handler";
import uuid from "react-native-uuid";

export default function Feedback({ id }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  // const [exp, setExp] = useState("");
  const [recommend, setRecommend] = useState(false);

  const handleFeedback = async () => {
    const newFeedback = {
      id,
      productId,
      name: nome,
      email: email,
      feedback: feedback,
      // exp: exp,
      recommend: recommend,
    };

    try {
      const response = await axios.post(
        process.env.EXPO_PUBLIC_API_URL + "/evaluations",
        newFeedback
      );
      Alert.alert("Feedback enviado");
    } catch (error) {
      Alert.alert("Ocorreu um erro ao enviar o feedback");
    }
  };

  // "id": 1,
  // "productId": 1,
  // "name": "João Silva",
  // "email": "joao.silva@example.com",
  // "feedback": "Ótimo filme, cheio de ação!",
  // "experience": "Feliz",
  // "recommend": true

  return (
    <SafeAreaView style={styles.containerSafe}>
      <Text style={styles.titleFeedback}>Nos dê seu Feedback</Text>

      <Text style={styles.descriptionFeedback}>
        Sua opinião é importante para nós
      </Text>

      <View style={styles.textInput}>
        <TextInput
          value={nome}
          onChangeText={setNome}
          style={styles.nameEmailInput}
          placeholder="Seu nome"
        ></TextInput>

        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.nameEmailInput}
          placeholder="Seu e-mail"
        ></TextInput>

        <TextInput
          value={feedback}
          onChangeText={setFeedback}
          style={styles.input}
          placeholder="Descreva sua experiência..."
        ></TextInput>

        <Text style={styles.exp}>Compartihe sua experiência</Text>

        <View style={styles.recommend}>
          <Switch value={recommend} onValueChange={setRecommend}></Switch>
          <Text style={styles.recommendText}>
            Recomendaria para outras pessoas ?
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleFeedback}>
          <Text style={styles.buttonText}>Enviar Feedback</Text>
        </TouchableOpacity>
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
    // width: "100%",
  },
  nameEmailInput: {
    borderWidth: 0.3,
    borderRadius: 10,
    width: 300,
    height: 40,
    paddingLeft: 10,
  },
  input: {
    borderWidth: 0.3,
    borderRadius: 10,
    width: 300,
    height: 90,
    paddingLeft: 10,
  },
  exp: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#1C90FF",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
  recommend: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  recommendText: {
    marginLeft: 5,
    fontSize: 14,
  },
});
