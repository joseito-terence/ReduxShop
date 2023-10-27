/* eslint-disable react-native/no-inline-styles */
import { ScrollView, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Text, Card, Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { emptyCart, removeFromCart } from '../redux/cartSlice';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View>
      <View
        style={{
          padding: 18,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text variant="displayMedium">Cart</Text>

        {cart.length !== 0 && (
          <Button
            mode="contained"
            loading={isLoading}
            onPress={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                dispatch(emptyCart());
              }, 1000);
            }}>
            Place Order ($
            {cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)})
          </Button>
        )}
      </View>

      {cart.length === 0 && (
        <Image
          source={require('../assets/undraw_empty_cart_co35-removebg-preview.png')}
          resizeMode="contain"
          style={{ width: '100%' }}
        />
      )}

      <ScrollView
        contentContainerStyle={{
          rowGap: 16,
          paddingBottom: 100,
          paddingHorizontal: 18,
        }}>
        {cart?.map((product, idx) => (
          <Card key={idx}>
            <Card.Cover source={{ uri: product.image }} resizeMode="contain" />
            <Card.Content style={{ marginTop: 20, rowGap: 12 }}>
              <Text variant="titleLarge">{product.title}</Text>
              <Text variant="headlineMedium">${product.price}</Text>
              <Button
                mode="contained"
                onPress={() => dispatch(removeFromCart(product))}>
                Remove
              </Button>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
