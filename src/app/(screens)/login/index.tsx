import { Link } from "expo-router";
import { View, Text, TouchableHighlight } from "react-native";

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Login Screen</Text>
      <View style={{ paddingTop: 20, flexDirection: "column", gap: 10 }}>
        <Link href="/dashboard" asChild>
          <TouchableHighlight
            style={{ padding: 10, backgroundColor: "#007BFF", borderRadius: 5 }}
          >
            <Text>Go to Dashboard</Text>
          </TouchableHighlight>
        </Link>
      </View>
    </View>
  );
}

export default LoginScreen;