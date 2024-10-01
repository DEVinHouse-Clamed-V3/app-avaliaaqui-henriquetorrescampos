import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("192.168.31.86/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <FlatList></FlatList>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
