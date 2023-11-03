import { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { CartContext } from "../context/CartContext/CartContext"

const CartIcon = ({navigation}) => {

    const {countItem} = useContext(CartContext)

    return(
        <View style={styles.container}>
            <Text style={styles.text}
                onPress={() => {
                    navigation.navigate('Cart')
                }}>Cart ({countItem})</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        backgroundColor: 'rgb(9 9 9)',
        height: 32,
        padding: 12,
        borderRadius: 32/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'rgb(244 244 244)',
        fontWeight: 'bold'
    }
})

export default CartIcon