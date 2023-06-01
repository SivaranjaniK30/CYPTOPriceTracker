import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import CoinDetailedScreen from './src/screens/CoinDetailedScreen';
import { SafeAreaView, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <> 
      <StatusBar style='light' />
      <HomeScreen />
    </>
  );
}
