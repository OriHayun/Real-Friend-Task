import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Property } from '../../models/types/property';
import { AntDesign } from '@expo/vector-icons';
import RealFriendApi from '../../api/realFriendApi'

type Props = {
    price: number,
    property: Property,
    setProperties?: Function
}

const PropertyCardFooter: React.FC<Props> = ({ price, property, setProperties }) => {
    
    const onHeartIconClick = async (): Promise<void> => {
        const response = await RealFriendApi.put(`/properties/${property.id}`, { favorite: !property.favorite });
        if (response.status === 200 && response.data) {
            setProperties ? setProperties((prevProperties: Property[]) => [...prevProperties, property.favorite = !property.favorite]) : null
        } else {
            alert('Something went wrong, please try again')
        }
    }

    return (
        <View style={styles.cardFooter}>
            <Text>{price ? price + '$' : 'Unknown'}</Text>
            {setProperties ?
                <TouchableOpacity
                    onPress={onHeartIconClick}
                >
                    {
                        property.favorite
                            ? <AntDesign name="heart" color="red" style={styles.likeIcon} />
                            : <AntDesign name="hearto" color="black" style={styles.likeIcon} />
                    }
                </TouchableOpacity>
                : null
            }
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