import { useState, useMemo, useCallback } from "react";
import { Dimensions, LayoutAnimation } from "react-native";
import { useAnimatedStyle, interpolate, useSharedValue, useAnimatedScrollHandler, Extrapolate } from "react-native-reanimated";
import { useTiming } from "react-native-redash";
import useSWR from 'swr';
import { filter, sumBy } from "lodash";
import { api } from "../../api";
import { Product, ProductFilter } from "../../types";

const { width: screenWidth } = Dimensions.get("window");

export const useHome = (navigation, animate = true) => {
  const  { data: products, isLoading: loading, error, mutate: fetchProducts } = useSWR(api.getProducts);
  const [productFilter, setProductFilter] = useState<ProductFilter>();

  const filteredProducts: Product[] = useMemo(() => {
    if(productFilter === ProductFilter.redeemed) {
      return filter(products, product => product.is_redemption);
    }

    if(productFilter === ProductFilter.won) {
      return filter(products, product => !product.is_redemption);
    }

    return products;

  }, [products, productFilter]);

  const points = sumBy(filter(products, ({ is_redemption }) => is_redemption), 'points');
  const pointsText = `${points.toLocaleString()} pts`;
  
  const openDetail = (product: Product) => () => {
    navigation.navigate('Detail', { product });
  };

  const changeFilter = useCallback((filter?: ProductFilter) => () => {
    if(animate) {
      setImmediate(() => LayoutAnimation.configureNext(LayoutAnimation?.Presets?.easeInEaseOut));
    }
    setProductFilter(filter);
  }, []);

  return {
    productFilter,
    filteredProducts,
    changeFilter,
    openDetail,
    pointsText,
    loading,
    fetchProducts,
    error,
    products,
  };
};

export const useHomeAnimations = (productFilter?: ProductFilter) => {
  const footerTransition = useTiming(productFilter === undefined);
  const translationY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });

  const allStyles = useAnimatedStyle(() => ( {
    flex: 1,
    transform: [{ translateY: interpolate(footerTransition.value, [0, 1], [0, 100]) }],
  }), [footerTransition.value]);

  const wonStyles = useAnimatedStyle(() => ({
    flex: 1,
    transform: [{ translateX: interpolate(footerTransition.value, [1, 0], [0, -screenWidth / 2]) }],
  }), [footerTransition.value]);

  const redeemedStyles = useAnimatedStyle(() => ({
    flex: 1,
    transform: [{ translateX: interpolate(footerTransition.value, [1, 0], [0, screenWidth / 2]) }],
  }), [footerTransition.value]);
  
  const headerStyles = useAnimatedStyle(() => ({
    opacity: interpolate(translationY.value, [40, 200], [1, 0.1], Extrapolate.CLAMP),
  }), [translationY.value]);

  const floatingPointsStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(translationY.value, [40, 200], [-100, 0], Extrapolate.CLAMP)}],
  }), [translationY.value]);

  return {
    scrollHandler,
    allStyles,
    redeemedStyles,
    wonStyles,
    headerStyles,
    floatingPointsStyles,
  };
}