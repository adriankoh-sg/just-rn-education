import { Link } from 'expo-router';
import { View, Text, TouchableHighlight } from 'react-native';

const Dashboard = () => {
  console.log('Dashboard component rendered');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome to the Dashboard</Text>
      <Text
        style={{
          fontSize: 16,
          color: 'gray',
          padding: 16,
          textAlign: 'center',
        }}
      >
        This is the main screen inside Tabs. To view the standalone screens, please tap on the below
        selections.
      </Text>
      <View style={{ paddingTop: 20, flexDirection: 'column', gap: 10 }}>
        <Link href="/home" asChild>
          <TouchableHighlight style={{ padding: 10, backgroundColor: '#007BFF', borderRadius: 5 }}>
            <Text>Go to Home Screen</Text>
          </TouchableHighlight>
        </Link>
      </View>
    </View>
  );
};

export default Dashboard;
