import { View, Text, Image, TouchableOpacity } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ICONS } from "../assets";

const NewsCard = ({ image, date, title, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", data)}
      activeOpacity={0.5}
      className="flex-row items-center w-full h-[100px] mt-3  "
      style={{ borderBottomColor: "#eee", borderBottomWidth: 1 }}
    >
      <Image
        source={{ uri: urlFor(image).url() }}
        resizeMode="cover"
        className="w-[120px] h-[80px] rounded-lg"
      />
      <View className=" w-[60%] h-[75%]">
        <View className="flex-row ml-2">
          <Image
            source={ICONS.calendar}
            resizeMode="contain"
            className="w-3 h-4"
            style={{ tintColor: "#999" }}
          />
          <Text className="text-xs text- font-medium text-[#999] ml-2">{`${moment(
            date
          ).format("h:mm")} / ${moment(date).format("L")} `}</Text>
        </View>
        <Text className="text-xs font-bold pt-1 ml-2">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
