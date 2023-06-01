import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
name: {
color: 'white',
fontSize: 15
},
currentPrice: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 1
},
priceChange: {
    color: 'white', 
    marginLeft: 'auto', 
    fontSize: 17, 
    fontWeight: '500'
},
priceContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}
})

export default styles;