import { useEffect, useState } from "react"
import { Product } from "../components/Product"
import { getProducts } from "../services/ProductsService"
import { FlatList, View } from "react-native"

export const ProductsList = ({navigation}) => {
   
    const renderProduct = ({item: product}) => {
        return(
            <Product {...product}
            onPress={() => {
                navigation.navigate('ProductDetails', {
                    productId: product.id
                })
            }}/>
        )
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getService = async() => {
            const data = await getProducts()
            setProducts(data)
        }
        getService()
    }, [])

    return(
        <FlatList 
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    )

}