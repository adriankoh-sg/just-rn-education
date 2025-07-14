import useAuthStore from '@/src/store/authStore';
import { Link } from 'expo-router';
import { Text, TouchableHighlight, View } from 'react-native';

const LoginScreen = () => {
  const { login } = useAuthStore();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Login Screen</Text>
      <View style={{ paddingTop: 20, flexDirection: 'column', gap: 10 }}>
        <Link href="/(tabs)" asChild>
          <TouchableHighlight style={{ padding: 10, backgroundColor: '#007BFF', borderRadius: 5 }}
            onPress={() => login({ name: 'Admin', email: 'admin@example.com', id: '1', role: 'admin' })}>
            <Text>Go to Dashboard</Text>
          </TouchableHighlight>
        </Link>
      </View>
    </View>
  );
};

export default LoginScreen;
