import { View, Text, ScrollView } from "react-native";
import NewsCard from "./NewsCard";

const NewsFeed = ({ data }) => {
  return (
    <View className="justify-center items-center p-4">
      {data.map((item) => (
        <NewsCard
          key={item._id}
          data={item}
          image={item?.image}
          title={item.title}
          date={item._createdAt}
        />
      ))}
    </View>
  );
};

export default NewsFeed;
