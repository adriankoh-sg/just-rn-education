import { Text, View } from 'react-native';

const WalletScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>WalletScreen Screen</Text>
      <Text style={{ fontSize: 16, color: 'gray' }}>Manage your digital assets here.</Text>
    </View>
  );
};

export default WalletScreen;
