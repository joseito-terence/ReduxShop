/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Products from './src/screens/Products';
import Cart from './src/screens/Cart';
import { useAppSelector } from './src/redux/hooks';

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <Navigator />
    </View>
  );
}

export default App;

const Navigator = () => {
  const [index, setIndex] = React.useState(0);
  const cart = useAppSelector(state => state.cart);

  const [routes] = React.useState([
    {
      key: 'products',
      title: 'Products',
      focusedIcon: 'store',
      unfocusedIcon: 'store-outline',
    },
    {
      key: 'cart',
      title: 'Cart',
      focusedIcon: 'cart',
      unfocusedIcon: 'cart-outline',
      badge: cart.length || false,
    },
  ]);

  routes[1].badge = cart.length || false;

  const renderScene = BottomNavigation.SceneMap({
    products: Products,
    cart: Cart,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
