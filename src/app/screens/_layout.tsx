import useAuthStore from '@/src/store/authStore';
import { Stack } from 'expo-router';

const ScreenRootLayout = () => {
  const { isLogin } = useAuthStore();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isLogin}>
        <Stack.Screen name="screens/home/HomeScreen" options={{ title: 'Home' }} />
        <Stack.Screen name="screens/wallet/Wallet" options={{ title: 'My Wallet' }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLogin}>
        <Stack.Screen name="screens/login/Login" options={{ title: 'Welcome - Sign In' }} />
      </Stack.Protected>
    </Stack>
  );
};

export default ScreenRootLayout;
