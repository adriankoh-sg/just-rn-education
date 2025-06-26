import { Text, View } from 'react-native';

const Wallet = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Wallet Screen</Text>
      <Text style={{ fontSize: 16, color: 'gray' }}>Manage your digital assets here.</Text>
    </View>
  );
};

export default Wallet;
