import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { urlFor } from "../sanity";

const Details = ({ route, navigation }) => {
  const data = route.params;

  console.log(urlFor(data.image).url());

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Image
        source={{ uri: urlFor(data.image).url() }}
        resizeMode="cover"
        className="w-full h-[300px]"
      />
      <Text className="font-extrabold text-xl">{data.title}</Text>
      <Text>{data.body}</Text>
    </View>
  );
};

export default Details;
