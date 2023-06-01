import { View, Text, Dimensions } from "react-native";
import Coin from '../../../assets/data/crypto.json'
import CoinHeaderDetails from '../CoinDetailedScreen/components/CoinHeaderDetails';
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { ChartPathProvider, ChartDot, ChartPath } from '@rainbow-me/animated-charts'

function CoinDetailedScreen() {
    const { image: { small }, name, symbol, prices, market_data: { market_cap_rank, current_price, price_change_percentage_24h } } = Coin;
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <ChartPathProvider data={{ points: prices.map((price) => ({x: price[0], y: price[1]})), smoothingStrategy: 'bezier' }}>
                <CoinHeaderDetails image={small} symbol={symbol} marketCapRank={market_cap_rank} />

                <View style={styles.priceContaiiosner}>
                    <View >
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.currentPrice}>${current_price.usd}</Text>
                    </View>
                    <View style={{ backgroundColor: price_change_percentage_24h < 0 ? '#ea3943' : '#16c784', flexDirection: 'row', paddingHorizontal: 3, paddingVertical: 5, borderRadius: 5 }}>
                        <AntDesign
                            name={price_change_percentage_24h > 0 ? 'caretup' : 'caretdown'} //used rectly since we are using it only once
                            size={12} color="white"
                            style={{ alignItems: 'center', marginRight: 5, marginTop: 3 }}
                        />
                        <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed((2))}%</Text>
                    </View>
                </View>
                <View>
                <ChartPath height={screenWidth / 2} stroke='yellow' width={screenWidth}/> 
                <ChartDot style={{ backgroundColor: 'white' }} />
                </View>

            </ChartPathProvider>
        </View>

    )
}
export default CoinDetailedScreen;