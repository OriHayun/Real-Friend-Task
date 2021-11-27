import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Property } from '../../models/types/property';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

type Props = {
    property: Property,
    onIconClick: Function
}

const Info: React.FC<Props> = ({ property, onIconClick }) => {
    return (
        <View style={styles.propertyInfo}>
            <View style={styles.wrapper}>
                <Text>{property.address.unitNumber} {property.address.street}</Text>
                <Text>{property.price}$</Text>
            </View>
            <View style={styles.wrapper}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => onIconClick(property.description)}
                >
                    <Entypo name="info" size={24} color="black" />
                    <Text>Description</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => onIconClick(property.agentDetails.id)}
                >
                    <Fontisto name="person" size={24} color="black" />
                    <Text>Agent</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    propertyInfo: {
        flex: 0.4
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40
    },
    icon: {
        alignItems: 'center'
    },
})

export default Info;