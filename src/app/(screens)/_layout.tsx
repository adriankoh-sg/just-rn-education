import { Stack } from 'expo-router';

const ScreenRootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" options={{ title: 'Home' }} />
      <Stack.Screen name="login" options={{ title: 'Welcome - Sign In' }} />
      <Stack.Screen name="(tabs)" options={{ title: 'Welcome' }} />
    </Stack>
  );
};

export default ScreenRootLayout;
