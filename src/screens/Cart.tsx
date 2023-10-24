/* eslint-disable react-native/no-inline-styles */
import { ScrollView, View } from 'react-native';
import React from 'react';
import { Text, Card, Button } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeFromCart } from '../redux/cartSlice';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);

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
        <Text variant="titleLarge">
          ${cart.reduce((acc, curr) => acc + curr.price, 0)}
        </Text>
      </View>
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
