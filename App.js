import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { useState, useEffect } from "react";
import { client } from "./sanity";

export default function App() {
  const [news, setNews] = useState(second);

  useEffect(() => {
    const query = `*[_type == "news"]`;

    client.fetch(query).then((news) => {
      setNews(news);
    });
  }, []);

  console.log(news);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
