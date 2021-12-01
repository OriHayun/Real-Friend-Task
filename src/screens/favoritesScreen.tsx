import React from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';
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
                    : <View style={styles.emptyPageContainer}>
                        <Text
                            style={styles.emptyText}>
                            Favorites is empty
                        </Text>
                        <TouchableOpacity
                            style={styles.returnToHomePageLinkWrapper}
                            onPress={() => navigation.popToTop()}
                        >
                            <Text style={styles.returnToHomePageLinkText}>
                                Click here to see the list
                            </Text>
                        </TouchableOpacity>
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    emptyPageContainer: { flex: 1, justifyContent: 'center', alignSelf: 'center' },
    emptyText: { textAlign: 'center', fontSize: 18 },
    returnToHomePageLinkWrapper: {
        alignItems: 'center', paddingVertical: 5,
    },
    returnToHomePageLinkText: {
        textAlign: 'center', color: 'blue', fontSize: 16
    }

})

export default FavoritesScreen;