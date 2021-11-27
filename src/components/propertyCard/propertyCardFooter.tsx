import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Property } from '../../models/types/property';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    price: number,
    property: Property,
    setFavorites: Function
}

const PropertyCardFooter: React.FC<Props> = ({ price, property, setFavorites }) => {
    return (
        <View style={styles.cardFooter}>
            <Text>{price}$</Text>
            <TouchableOpacity
                onPress={() =>
                    setFavorites((prevFavorites: Property[]) =>
                        [...prevFavorites, property])}
            >
                {
                    property.favorite
                        ? <AntDesign name="heart" color="red" style={styles.likeIcon} />
                        : <AntDesign name="hearto" color="black" style={styles.likeIcon} />
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardFooter: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 7,
        paddingHorizontal: 10

    },
    likeIcon: {
        fontSize: 20,
    }
})

export default PropertyCardFooter