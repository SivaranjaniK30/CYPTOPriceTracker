import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    coinContainer: {
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "#282828",
      padding: 20
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5
    },
    text: {
      color: 'white',
      marginRight: 5
    },
    rankContainer: {
      backgroundColor: '#585858',
      paddingHorizontal: 5,
      marginRight: 5,
      borderRadius: 5
    },
    rank: {
      fontWeight: 'bold',
      color: 'white',
    }
  });

  export default styles