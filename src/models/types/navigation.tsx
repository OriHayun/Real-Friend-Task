import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Property } from './property';

export type RootStackParamList = {
  Home: undefined;
  Property: { property: Property, favorites: Property[] };
  Favorites: { favorites: Readonly<Property[]> }
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type NavigationProps = {
  navigation: ScreenNavigationProp;
};

export type RouteProps = RouteProp<RootStackParamList, 'Property'>;
