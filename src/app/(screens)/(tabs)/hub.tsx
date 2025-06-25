import { ScrollView, View } from "react-native";

const Hub = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'blue', margin: 16, height: 200 }}></View>
      <View style={{ flex: 1, backgroundColor: 'gray', margin: 16, height: 200 }}></View>
      <View style={{ flex: 1, backgroundColor: 'red', margin: 16, height: 200 }}></View>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 16, height: 200 }}></View>
    </ScrollView>
  );
}

export default Hub;