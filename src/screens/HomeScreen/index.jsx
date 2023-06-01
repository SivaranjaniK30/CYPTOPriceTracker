import { View, FlatList } from 'react-native';
import CoinItems from '../../components/CoinItems'
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';
import styles from './styles';

function HomeScreen() {
    return (
        <View style={styles.container}>
        <FlatList data={cryptocurrencies} renderItem={({item}) => { 
          return (
            <CoinItems marketCoin={item} />
          )
        }} />
      </View>
    )
}

export default HomeScreen;