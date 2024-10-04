import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Products({ navigation }) {
  const [products, setProducts] = useState([]);
  // const [productId, setproductId] = useState("");

  useEffect(() => {
    axios
      .get(process.env.EXPO_PUBLIC_API_URL + "/products")
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data);

        // const productId = response.data.map((product) => product.id);
        // setproductId(productId);
        // console.log(productId);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  //recebe o id como argumento para passar para o outro component
  function navigateToFeedback(id) {
    navigation.navigate("Feedback", { id });
  }

  const renderProducts = ({ item: product, index }) => {
    return (
      <View style={styles.containerProduct}>
        <Image
          source={{ uri: product.image }}
          style={styles.productImage}
        ></Image>

        <View style={styles.containerTextInside}>
          <Text style={styles.titleText}>{product.name}</Text>

          <Text style={styles.containerProductText}>{product.brand}</Text>

          <Text style={styles.containerProductText}>{product.description}</Text>

          <Text style={styles.productPrice}>{product.price}</Text>

          <TouchableOpacity
            style={styles.buttonImage}
            // cria funcao anonima que passa o product.id especifico do item clicado
            onPress={() => navigateToFeedback(product.id)}
          >
            <Text style={styles.textButton}>Avaliar</Text>
          </TouchableOpacity>

          {/* quando o indice da array for igual ao tamanho dela significa que chegou no final da array,
          entao nao deve mostar a linha  */}

          {index < products.length - 1 && (
            <View style={styles.horizontalLine}></View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={renderProducts}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 10,
    justifyContent: "flex-start",
  },
  containerProduct: {
    marginTop: 30,
    flexDirection: "row",
  },
  containerProductText: {
    flexWrap: "wrap",
    width: 200,
    fontSize: 16,
    color: "#929292",
  },
  containerTextInside: {
    gap: 10,
    marginLeft: 15,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    flexWrap: "wrap",
    width: 250,
  },
  text: {
    flexWrap: "wrap",
  },
  productImage: {
    width: 100,
    height: 125,
    marginLeft: 10,
    borderRadius: 12,
  },
  productPrice: {
    color: "red",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonImage: {
    borderRadius: 8,
    width: 80,
    height: 45,
    backgroundColor: "#E60022",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 20,
    color: "#FFF",
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 5,
  },
});
