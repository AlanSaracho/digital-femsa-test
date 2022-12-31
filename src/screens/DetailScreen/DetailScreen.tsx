import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/core';
import dayjs from 'dayjs';

import { Pressable, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFavoriteProducts } from '../../context/products';
import { Button } from '../../ds';
import { Container, TitleContainer, Title, Label, Points, Picture, Date, Body } from './DetailScreen.styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppParams } from '..';

export const DetailScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { params } = useRoute<RouteProp<AppParams, 'Detail'>>();
  const { product } = params;
  const { points, createdAt, image } = product;
  const { isFavorite, toogleFavorite } = useFavoriteProducts();

  const pointsText = `${points} puntos`;
  const date = dayjs(createdAt).format('LL');

  return (
    <>
      <TitleContainer style={{ paddingTop: insets.top + 32 }}>
        <Title children={product.product} />
        <Pressable>
          <Ionicons
            onPress={() => toogleFavorite(product)}
            name={isFavorite(product) ? 'heart' : 'heart-outline'}
            size={28}
            style={{ position: 'absolute', right: 0, bottom: 2}}
          />
        </Pressable>
      </TitleContainer>
      <Container style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <Body>
            <Picture source={{ uri: image }} />
            <Label children="Detalles del producto:" />
            <Date children={date} />
            <Label children="Con esta compra acumulaste:" />
            <Points children={pointsText} />
          </Body>
          <Button style={{ marginHorizontal: 20, marginBottom: 40 }} onPress={navigation.goBack}>Aceptar</Button>
        </View>
      </Container> 
    </>
  );
};