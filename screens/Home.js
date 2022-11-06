import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

import NewsHeader from "../components/NewsHeader";
import NewsFeed from "../components/NewsFeed";

import { client } from "../sanity";

const Home = () => {
  const [connected, setConnected] = useState(false);

  NetInfo.fetch().then((state) => {
    setConnected(state.isConnected);
  });

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
        {connected ? (
          <View>
            <NewsHeader data={news} />
            <NewsFeed data={news} />
          </View>
        ) : (
          <View className="flex-1 justify-center items-center ">
            <Text className="font-extrabold text-2xl">Internet yo'q</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
