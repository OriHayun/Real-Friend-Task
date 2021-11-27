import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FavoritesRouteProps, ScreenNavigationProp } from '../models/types/navigation';
import { Property } from '../models/types/property';
import PropertyCard from '../components/propertyCard/propertyCard';
import PropertyCardHeader from '../components/propertyCard/propertyCardHeader';
import PropertyCardBody from '../components/propertyCard/propertyCardBody';
import PropertyCardFooter from '../components/propertyCard/propertyCardFooter';

type Props = {
    route: FavoritesRouteProps
    navigation: ScreenNavigationProp,
}

const FavoritesScreen: React.FC<Props> = ({ navigation, route }) => {
    const { favorites }: { favorites: Property[] } = route.params;

    return (
        <>
            {
                favorites.length
                    ? <FlatList
                        data={favorites}
                        style={{ alignSelf: 'center' }}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={({ item }: { item: Property }) => {
                            return (
                                <PropertyCard
                                    property={item}
                                    navigation={navigation}
                                >
                                    <PropertyCardHeader
                                        imagePath={item.images ? item.images[0] : null}
                                    />
                                    <PropertyCardBody
                                        address={item.address}
                                        category={item.category}
                                        status={item.status}
                                    />
                                    <PropertyCardFooter
                                        property={item}
                                        price={item.price} />
                                </PropertyCard>
                            )
                        }}
                    />
                    : null
            }
        </>
    )
}

const styles = StyleSheet.create({})

export default FavoritesScreen;