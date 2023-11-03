import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList';
import ProductDetails from './screens/ProductDetails';
import { Cart } from './screens/Cart';
import CartProvider from './context/CartContext/CartContext';
import CartIcon from './components/CartIcon';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList}
          options={({navigation}) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
            options={({navigation}) => ({
              title: 'Product Details',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>
            })}/>
          <Stack.Screen name='Cart' component={Cart} 
            options={({navigation}) => ({
              title: 'Cart of your products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>
            })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
