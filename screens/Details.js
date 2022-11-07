import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { client, urlFor } from "../sanity";
import moment from "moment/moment";
import { ICONS } from "../assets";
import NewsCard from "../components/NewsCard";

const Details = ({ route, navigation }) => {
  const data = route.params;

  const [news, setNews] = useState([]);
  const [text, setText] = useState(data.body.slice(0, 300));
  const [more, setMore] = useState(false);

  useEffect(() => {
    const query = `*[_type == "news"]`;

    client.fetch(query).then((news) => {
      setNews(news);
    });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 bg-white">
      {/* Details header */}

      <View
        className="flex-row justify-between items-center w-full px-3 h-[65px] "
        style={{ borderBottomColor: "#0E2769", borderBottomWidth: 0.5 }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-[35px] h-[35px] p-2 rounded-lg"
          style={{ borderColor: "#0E2769", borderWidth: 0.5 }}
        >
          <Image
            source={ICONS.back}
            resizeMode="contain"
            className="w-full h-full"
            style={{ tintColor: "#0E2769" }}
          />
        </TouchableOpacity>

        <View className="flex-row justify-around w-[40%]">
          <Text className="text-[#0E2769] text-2xl font-extrabold">Aa</Text>
          <Image
            source={ICONS.bookmark}
            resizeMode="contain"
            className="w-8 h-8"
            style={{ tintColor: "#0E2769" }}
          />
          <Image
            source={ICONS.share}
            resizeMode="contain"
            className="w-8 h-8"
            style={{ tintColor: "#0E2769" }}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-3">
          <Image
            source={{ uri: urlFor(data.image).url() }}
            resizeMode="cover"
            className="w-full h-[270px] rounded-lg my-5"
          />
        </View>
        <Text className="font-extrabold text-xl px-3">{data.title}</Text>

        <View className="flex-row items-center px-3">
          <View className="flex-row items-center">
            <Image
              source={ICONS.calendar}
              resizeMode="contain"
              className="w-4"
              style={{ tintColor: "#999" }}
            />
            <Text className="text-xs font-base text-[#0E2769] ml-1">
              {`${moment(data?._createdAt).format("h:mm")} / ${moment(
                data?._createdAt
              ).format("L")}`}
            </Text>
          </View>

          <View className="flex-row items-center ml-6">
            <Image
              source={ICONS.eye}
              resizeMode="contain"
              className="w-4"
              style={{ tintColor: "#999" }}
            />
            <Text className="text-xs font-base text-[#999] ml-1">
              {data.seen}K
            </Text>
          </View>
        </View>

        <Text className="font-light text-lg px-3">
          {text} {!more && "..."}
          <Text
            className="font-bold"
            onPress={() => {
              if (!more) {
                setText(data.body);
                setMore(true);
              } else {
                setText(data.body.slice(0, 300));
                setMore(false);
              }
            }}
          >
            {more ? "Kamroq ko'rish" : "Batafsil"}
          </Text>
        </Text>

        {/* News */}

        <View className="mb-5 pt-3">
          <View className="bg-gray-200 p-5 w-full flex-row items-center">
            <Image
              source={ICONS.circle}
              resizeMode="contain"
              className="w-4 h-4"
              style={{ tintColor: "#0E2769" }}
            />
            <Text className="font-bold text-base ml-2">Mavzuga oid</Text>
          </View>
          <View className="px-3">
            {news.slice(3, 7).map((item, index) => (
              <NewsCard
                key={index}
                data={item}
                date={item._createdAt}
                image={item.image}
                title={item.title}
                path="Details"
                nested={true}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
