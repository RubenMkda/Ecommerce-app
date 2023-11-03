import { useContext, useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { CartContext } from "../context/CartContext/CartContext"

export const Cart = ({navigation}) => {

    const {items, getTotalPrice} = useContext(CartContext)

    

    const Totals = () => {
        let [total, setTotal] = useState(0)
        useEffect(() => {
            setTotal(getTotalPrice())
        }, [])

        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.lineRight}>$ {total}</Text>
            </View>
        )
    }

    const renderItem = ({item}) => {
        return(
            <View style={styles.cartLine}>
                <Text style={styles.lineLeft}>{item.product.title} x {item.qty}</Text>
                <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
            </View>
        )
    }

    return(
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id}
            ListFooterComponent={Totals} />
    )

}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: 'rgb(20 20 20)',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color:'#333333',
    padding: 16
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
    padding: 16
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});