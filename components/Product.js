import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export const Product = ({onPress, title,price, description, image}) => {
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{uri:image}} style={styles.thumb} />
            <Text style={styles.price}>{price + "$"}</Text>
            <View style={styles.infoContainer}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text numberOfLines={4} style={styles.description}>{description}</Text>
                <View style={{flex: 1, flexDirection: 'row', paddingVertical: 8}}>
                    <Text style={styles.buttonPrice}>{price  + "$"}</Text>
                    <Text style={styles.buyMeButton}>Buy Me</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: 'rgb(212 212 212)',
        shadowOpacity: 0.2,
        borderRadius: 16,
        shadowRadius: 4,
        shadowColor: 'rgb(23 23 23)',
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 1,
        marginVertical: 20,
        marginHorizontal: 10,
        color: 'rgb(10 10 10)'
    },
    thumb: {
        height: 260,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        width: '50%',
        objectFit: 'cover',
    },
    infoContainer: {
        padding: 16,
        width: '50%'
    },
    price: {
        position: 'absolute',
        left: '2%',
        top: '5%',
        backgroundColor: 'rgb(242 242 242)',
        fontSize: 22,
        padding: 16,
        borderColor: 'rgb(9 9 9)',
        borderWidth: 2,
        borderRadius: 16,
    },
    buttonPrice: {
        backgroundColor: 'rgb(242 242 242)',
        fontSize: 18,
        padding: 8,
        borderColor: 'rgb(9 9 9)',
        borderWidth: 2,
        height: 45,
        maxWidth: 'min-content'
    },
    buyMeButton: {
        backgroundColor: 'rgb(9 9 9)',
        fontSize: 18,
        padding: 10,
        height: 45,
        color: 'rgb(242 242 242)',
        maxWidth: 'max-content',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        paddingVertical: 8
    }
})