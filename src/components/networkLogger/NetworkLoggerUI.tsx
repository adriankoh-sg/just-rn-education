import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const NetworkLoggerUI = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={{ position: 'absolute', bottom: 120, left: 16, backgroundColor: 'red' }}>
      <Pressable
        testID="network-logger-button"
        onPress={onPress}
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Feather size={28} name="tool" />
      </Pressable>
    </View>
  );
};

export default NetworkLoggerUI;
