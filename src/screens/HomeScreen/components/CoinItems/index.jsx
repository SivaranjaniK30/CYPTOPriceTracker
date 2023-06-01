
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

function Index({ marketCoin }) {
  const { name, current_price, market_cap_rank, price_change_percentage_24h, symbol, market_cap, image } = marketCoin;

  const PercentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784' //using logic seperately becoz it is used 

  function normalizeMarketCap(marketCap) {
    if (marketCap > 1_000_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000_000)}T`
    } if (marketCap > 1_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000)}B`
    } if (marketCap > 1_000_000) {
      return `${Math.floor(marketCap / 1_000_000)}M`
    } if (marketCap > 1_000) {
      return `${Math.floor(marketCap / 1_000)}K`
    }
    return marketCap;
  }
  return (
    <View style={styles.coinContainer}>
      <Image style={{ width: 20, height: 20, backgroundColor: 'black', marginRight: 10, marginVertical: 5 }}
        source={{ uri: image }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name= {price_change_percentage_24h > 0 ? 'caretup' : 'caretdown'} //used directly since we are using it only once
            size={12} color={PercentageColor}
            style={{ alignItems: 'center', marginRight: 5, marginTop: 3 }}
          />
          <Text style={{ color: PercentageColor }}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: 'white' }}>MCAP {normalizeMarketCap(market_cap)}</Text>
      </View>
    </View>
  )
}

export default Index;