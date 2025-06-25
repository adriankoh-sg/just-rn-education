# Introduction

This is my basic requirements for setup an RN EXPO project with Expo Go.

## Setup

After cloning from the repository, install all dependenices using `npm install`.

## To run the APP

- `npm run android`
- `npm run ios`
- `npm run web`

## Steps for setting up React Native with EXPO framework

- Using EXPO framework `npx create-expo-app@latest --template`, then select using `Navigation (TypeScript)`
- Install development client `npx expo install expo-dev-client`
- For multiple variant builds, refer to [https://docs.expo.dev/tutorial/eas/multiple-app-variants/#add-appconfigjs-for-dynamic-configuration](https://docs.expo.dev/tutorial/eas/multiple-app-variants/#add-appconfigjs-for-dynamic-configuration)
- [Optional] - If native modules are needed, use EXPO prebuild `npx expo prebuild --clean`
