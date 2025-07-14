import { View } from 'react-native';

import LoginScreen from '@/src/app/screens/login/Login';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoginScreen />
    </View>
  );
};

export default App;
