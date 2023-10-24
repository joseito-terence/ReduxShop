/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Products from './src/screens/Products';
import Cart from './src/screens/Cart';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigator />
    </View>
  );
}

export default App;

const Navigator = () => {
  const [index, setIndex] = React.useState(0);
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
    },
  ]);

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
