import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Link, router, Tabs } from "expo-router";
import { Linking, Pressable } from "react-native";

import Colors from "@constants/Colors";
import { useColorScheme } from "react-native";
import { CONTACTS, NAVIGATION } from "@constants/appConfig";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

const CreateTabBarButton = (url: string) => {
  return (props: any) => (
    <Pressable
      {...props}
      onPress={() => {
        Linking.openURL(url);
      }}
    />
  );
};

const WalletButton = () => {
  return (props: any) => (
    <Pressable
      {...props}
      onPress={() => router.navigate("/wallet")}
    ></Pressable>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
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
                  color={Colors[colorScheme ?? "light"].text}
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
    </Tabs>
  );
}
