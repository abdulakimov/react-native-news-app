import { View, Text, Image, TouchableOpacity } from "react-native";
import moment from "moment/moment";
import { urlFor } from "../sanity";
import { ICONS } from "../assets";
import { useNavigation } from "@react-navigation/native";

const NewsHeader = ({ data }) => {
  const navigation = useNavigation();

  const bannerDate = `${moment(data[8]?._createdAt).format("h:mm")} / ${moment(
    data[8]?._createdAt
  ).format("L")} `;
  return (
    <View className="w-full h-[370px]">
      {/* Header Banner */}

      <View className="w-full h-[250px]">
        <Image
          source={{
            uri: urlFor(data[8]?.image).url(),
          }}
          resizeMode="cover"
          className="w-full h-full"
        />
        <TouchableOpacity
          className="p-4 "
          onPress={() => navigation.navigate("Details", data[8])}
        >
          <Text className=" text-xl font-extrabold">{data[8]?.title}</Text>
          <View className="flex-row pt-2 items-center">
            <Image
              source={ICONS.calendar}
              resizeMode="contain"
              className="w-4 h-4"
              style={{ tintColor: "#999" }}
            />
            <Text className="text-sm font-medium text-[#999] ml-2">
              {bannerDate}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsHeader;
