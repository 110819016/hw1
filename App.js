import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>110819016</Text>
      <Text style={styles.text}>許靖宜</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0dfe4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'rgba(104,26,26,0.89)',
    fontSize: 40,
  }
});
