import { useContext, useEffect, useState } from "react"
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { getProduct } from "../services/ProductsService"
import { ScrollView } from "react-native"
import { CartContext } from "../context/CartContext/CartContext"

const ProductDetails = ({route}) => {

    const {productId} = route.params
    const [product, setProduct] = useState({})

    const { addItemToCart } = useContext(CartContext)

    useEffect(() => {
        const getService = async () => {
            const data = await getProduct(productId)
            setProduct(data)
        }

        getService()
    }, [])

    const onAddToCart = () => {
        addItemToCart(product.id)
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: product.image}}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price +"$"}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Pressable style={styles.button} onPress={onAddToCart}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '60vh',
        width: '100%',
        objectFit: 'cover'
    },
    imageContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        marginTop: 5,
    },
    infoContainer: {
        padding: 16,
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 16
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 16
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 16
    },
    button: {
        alignItems: 'center', 
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'rgb(9 9 9)',
        maxWidth: 'max-content',
        alignSelf: 'center',
        paddingVertical: 16
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'rgb(245 245 245)',
    }
})

export default ProductDetails