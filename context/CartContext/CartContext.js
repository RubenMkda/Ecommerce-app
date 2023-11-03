import { createContext, useState } from "react"
import { getProduct } from "../../services/ProductsService"

export const CartContext = createContext()

const CartProvider = (props) => {

    const [items, setItems] = useState([])
    const [countItem, setCountItems] = useState(0)

    const addItemToCart = async (id) => {

        const item = items.find((item) => (item.id == id))

        const getService = async() => {
            const data = await getProduct(id)
            return data
        }

        const product = item ? item.product : await getService()

        setItems((prevItems) => {
            
            if(!item) {
                return [...prevItems, {id, qty: 1, product, totalPrice: product.price}]
            }
            else{
                prevItems.map((item) => {
                    if(item.id == id) {
                        item.qty++,
                        item.totalPrice += product.price
                    }
                })
                return prevItems
            }
        })
        
        setCountItems((prevItems) => {
            if(!item) return prevItems + 1
            else return getItemsCount()
        })
    }

    const getItemsCount = () => {
        return items.reduce((sum, item) => (sum + item.qty), 0)
    }

    const getTotalPrice = () => {
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }

    return(
        <CartContext.Provider value={{items, setItems, addItemToCart, getTotalPrice, countItem}}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider