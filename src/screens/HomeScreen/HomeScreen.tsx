import React, {  } from "react"
import { FlatList, FlatListProps } from "react-native";
import { size, compact } from 'lodash';
import { Container, Title, Subtitle, Label, PointsCard, PointsCardLabel, Points, Footer, Gap, ItemPoints, Negative, Positive, styles, AllButton, FloatingPoints, FloatingPointsText } from "./HomeScreen.styles";
import { ListItem, Button } from "../../ds";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';

import Animated, {  } from "react-native-reanimated";
import { Product, ProductFilter } from "../../types";
import { useHome, useHomeAnimations } from "./HomeScreen.hooks";
import { useNavigation } from "@react-navigation/native";

dayjs.extend(localizedFormat);

const AnimatedFlatList = Animated.createAnimatedComponent<FlatListProps<Product>>(FlatList);

export const HomeScreen = () => {

  const navigation = useNavigation();

  const {
    filteredProducts,
    changeFilter,
    openDetail,
    pointsText,
    loading,
    productFilter,
    fetchProducts,
  } = useHome(navigation);

  const {
    scrollHandler,
    allStyles,
    redeemedStyles,
    wonStyles,
    headerStyles,
    floatingPointsStyles,
  } = useHomeAnimations(productFilter);

  const renderItem = ({ item, index }: { item : Product, index: number }) => {
      const firstItem = index === 0;
      const lastItem = index === size(filteredProducts) - 1;
      const containerStyle = compact([
        firstItem && styles.firstItem,
        lastItem && styles.lastItem,
      ]);

      return (
        <ListItem
          style={containerStyle}
          onPress={openDetail(item)}
          title={item.product}
          description={dayjs(item.createdAt).format('LL')}
          avatarSource={item.image}
          children={(
            <ItemPoints numberOfLines={1} adjustsFontSizeToFit>
              {item.is_redemption ? (
                <Positive>+</Positive>
              ) : (
                <Negative>-</Negative>
              )}
              {item.points}
            </ItemPoints>
          )}
        />
      )
  }

  const header = (
    <Animated.View style={headerStyles}>
      <Title>Bienvenido de vuelta!</Title>
      <Subtitle>Ruben Rodriguez</Subtitle>

      <Label>TUS PUNTOS</Label>
      <PointsCard>
        <PointsCardLabel>Diciembre</PointsCardLabel>
        <Points numberOfLines={1} adjustsFontSizeToFit allowFontScaling={false}>{pointsText}</Points>
      </PointsCard>

      <Label>TUS MOVIMIENTOS</Label>
    </Animated.View>
  );

  return (
    <Container>
      <AnimatedFlatList
        onScroll={scrollHandler}
        style={styles.flatlist}
        data={filteredProducts}
        keyExtractor={({ id })=> id}
        renderItem={renderItem}
        ListHeaderComponent={header}
        onRefresh={fetchProducts}
        refreshing={loading}
      />
      <FloatingPoints style={floatingPointsStyles}>
        <FloatingPointsText numberOfLines={1} adjustsFontSizeToFit>{pointsText}</FloatingPointsText>
      </FloatingPoints>
      <Footer>
        <Button style={wonStyles} onPress={changeFilter(ProductFilter.won)} >Ganados</Button>
        <Gap />
        <Button style={redeemedStyles} onPress={changeFilter(ProductFilter.redeemed)}>Canjeados</Button>
      </Footer>
      <AllButton style={allStyles} onPress={changeFilter(undefined)}>Todos</AllButton>
    </Container>
  )
};
