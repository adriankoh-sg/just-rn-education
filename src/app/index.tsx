import { View } from 'react-native';
import LoginScreen from './(screens)/login';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoginScreen />
    </View>
  );
};

export default App;
