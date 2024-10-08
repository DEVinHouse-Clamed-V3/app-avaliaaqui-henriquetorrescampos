import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface ProductsProps {
  navigation: NavigationProp<any>;
}

export default function Home({ navigation }: ProductsProps) {
  function navigateToProducts() {
    navigation.navigate("Products");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image
          style={styles.images}
          source={require("../assets/headset.png")}
        ></Image>

        <Image
          style={styles.images}
          source={require("../assets/mouse.jpeg")}
        ></Image>

        <Image
          style={styles.images}
          source={require("../assets/teclado.png")}
        ></Image>
      </View>

      <Text style={styles.textAvalie}>Avalie Aqui</Text>
      <Text style={styles.textinfo}>
        Escolha o produto que deseja avaliar e compartilhe sua experiência com
        outros consumidores
      </Text>

      <TouchableOpacity style={styles.button} onPress={navigateToProducts}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imagesContainer: {
    flexDirection: "row",
    gap: 30,
    marginHorizontal: 10,
    marginTop: 50,
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  textAvalie: {
    fontSize: 36,
    marginTop: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  textinfo: {
    marginVertical: 20,
    fontSize: 20,
    color: "#7A7A7A",
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 38,
    paddingVertical: 18,
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    color: "#FFF",
  },
});
