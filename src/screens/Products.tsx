/* eslint-disable react-native/no-inline-styles */
import { ScrollView, View } from 'react-native';
import React from 'react';
import { useGetProductsQuery } from '../services/product';
import { Text, Card, Button } from 'react-native-paper';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/cartSlice';

export default function Products() {
  const { data } = useGetProductsQuery();
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text variant="displayMedium" style={{ padding: 18 }}>
        Products
      </Text>
      <ScrollView
        contentContainerStyle={{
          rowGap: 16,
          paddingTop: 20,
          paddingBottom: 80,
          paddingHorizontal: 18,
        }}>
        {data?.map(product => (
          <Card key={product.id}>
            <Card.Cover source={{ uri: product.image }} resizeMode="contain" />
            <Card.Content style={{ marginTop: 20, rowGap: 12 }}>
              <Text variant="titleLarge">{product.title}</Text>
              <Text variant="bodyMedium">{product.description}</Text>
              <Text variant="headlineMedium">${product.price}</Text>
              <Button
                mode="contained"
                onPress={() => dispatch(addToCart(product))}>
                Add to Cart
              </Button>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
