import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { NavigationProps } from '../models/types/navigation';
import { Property } from '../models/types/property';
import PropertyCard from '../components/propertyCard/propertyCard';
import PropertyCardHeader from '../components/propertyCard/propertyCardHeader';
import PropertyCardBody from '../components/propertyCard/propertyCardBody';
import PropertyCardFooter from '../components/propertyCard/propertyCardFooter';
import dtoToDm from '../transformers/propertyTransformer';
import { AntDesign } from '@expo/vector-icons';

const Data = require('../data/data.json');

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [favorites, setFavorites] = useState<Property[]>([]);

    useEffect(() => {
        const response: Property[] = Data.map((property: any) => {
            return dtoToDm(property);
        })
        setProperties(response);
    }, []);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AntDesign name="heart" style={styles.headerIcon} onPress={() => navigation.navigate('Favorites', { favorites })} />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Properties List</Text>
            {properties.length
                ? <FlatList
                    data={properties}
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
                                    setFavorites={setFavorites}
                                    property={item}
                                    price={item.price} />
                            </PropertyCard>
                        )
                    }}
                />
                : null
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
        alignSelf: 'center'
    },
    propertyCard: {
        width: Math.round(Dimensions.get('screen').width / 2.5),
        height: 200,
        backgroundColor: 'white',
        marginTop: 40,
        borderRadius: 10,
        paddingHorizontal: 20
    },
    cardHeader: {
        flex: 0.3
    },
    propertyMainImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    cardBody: {
        flex: 0.4,
        justifyContent: 'center',
    },
    cardFooter: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    likeIcon: {
        fontSize: 20,
        color: 'black',
    },
    headerIcon: {
        fontSize: 20,
        color: 'black',
        marginRight: 10
    }
});

export default HomeScreen