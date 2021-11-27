import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Property } from './property';

export type RootStackParamList = {
  Home: undefined;
  Property: { property: Property };
  Favorites: { favorites: Property[] }
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type NavigationProps = {
  navigation: ScreenNavigationProp;
};

export type PropertyRouteProps = RouteProp<RootStackParamList, 'Property'>;
export type FavoritesRouteProps = RouteProp<RootStackParamList, 'Favorites'>;
