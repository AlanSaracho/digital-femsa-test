import { atom, useRecoilState } from "recoil";
import { some, filter } from 'lodash';
import { Product } from "../types";

const favoriteProductsState = atom({
  key: 'favoritesProducts',
  default: [] as Product[],
});

export const useFavoriteProducts = () => {
  const [favoriteProducts, setFavoriteProducts] = useRecoilState(favoriteProductsState);

  const isFavorite = (product: Product) => {
    return some(favoriteProducts, ({ id }) => id === product.id);
  };

  const toogleFavorite = (product: Product) => {
    if(isFavorite(product)) {
      setFavoriteProducts(filter(favoriteProducts, ({ id }) => id !== product.id))
    } else {
      setFavoriteProducts([
        ...favoriteProducts,
        product
      ])
    };
  };

  return {
    favoriteProducts,
    toogleFavorite,
    isFavorite,
  }
}