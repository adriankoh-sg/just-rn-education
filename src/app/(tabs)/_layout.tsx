import useAuthStore from '@/src/store/authStore';
import { CONTACTS, NAVIGATION } from '@constants/appConfig';
import Colors from '@constants/Colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { router, Tabs } from 'expo-router';
import React from 'react';
import { Linking, Pressable, useColorScheme } from 'react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

const CreateTabBarButton = (url: string) => {
  const TabBarButtonComponent = (props: any) => (
    <Pressable
      {...props}
      onPress={() => {
        Linking.openURL(url);
      }}
    />
  );
  TabBarButtonComponent.displayName = `TabBarButton(${url})`;
  return TabBarButtonComponent;
};

const WalletButton = () => {
  const WalletTabBarButton = (props: any) => (
    <Pressable {...props} onPress={() => router.navigate('/screens/wallet/WalletScreen')}></Pressable>
  );
  WalletTabBarButton.displayName = 'WalletTabBarButton';
  return WalletTabBarButton;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isLogin } = useAuthStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Protected guard={isLogin}>
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: NAVIGATION.HOME.title,
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="walletTab"
          options={{
            headerTitle: NAVIGATION.WALLET.title,
            tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color} />,
            tabBarButton: WalletButton(),
          }}
        />
        <Tabs.Screen
          name="call"
          options={{
            headerTitle: NAVIGATION.CALL.title,
            tabBarIcon: ({ color }) => <TabBarIcon name="call" color={color} />,
            tabBarButton: CreateTabBarButton(CONTACTS.TEL),
          }}
        />
        <Tabs.Screen
          name="sms"
          options={{
            headerTitle: NAVIGATION.SMS.title,
            tabBarIcon: ({ color }) => <TabBarIcon name="sms" color={color} />,
            tabBarButton: CreateTabBarButton(CONTACTS.SMS),
          }}
        />
        <Tabs.Screen
          name="hub"
          options={{
            headerTitle: NAVIGATION.HUB.title,
            tabBarIcon: ({ color }) => <TabBarIcon name="more" color={color} />,
          }}
        />
      </Tabs.Protected>
    </Tabs>
  );
}
