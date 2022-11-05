import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import NewsHeader from "../components/NewsHeader";
import NewsFeed from "../components/NewsFeed";

import { client } from "../sanity";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [news, setNews] = useState([]);

  useEffect(() => {
    const query = `*[_type == "news"]`;

    client.fetch(query).then((data) => {
      setNews(data);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#0E2769" />
      {/* Header Title */}

      <View className="w-full justify-center items-center p-4 flex-row">
        <Text className="font-extrabold text-[#0E2769] text-md">TODAY.</Text>
        <View className="bg-[#0E2769] rounded-full">
          <Text className="text-white text-md font-extrabold p-[3px]">UZ</Text>
        </View>
      </View>
      <ScrollView>
        <NewsHeader data={news} />
        <NewsFeed data={news} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
