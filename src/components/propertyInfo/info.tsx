import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Property } from '../../models/types/property';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import capitelizeFirstLetter from '../../utils/capitelizeFirstLetter';
import setStatusColor from '../../utils/setStatusColor';

type Props = {
    property: Property,
    onIconClick: Function
}

const Info: React.FC<Props> = ({ property, onIconClick }) => {

    const statusColor: { color: string } = { color: setStatusColor(property.status) }

    return (
        <View style={styles.propertyInfo}>
            <View style={styles.wrapper}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Address:</Text>
                    <Text>{capitelizeFirstLetter(property.address.address)}</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Price:</Text>
                    <Text>{property.price ? property.price + '$' : 'Unknown'}</Text>
                </View>
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
                    onPress={() => onIconClick(property.agentDetails)}
                >
                    <Fontisto name="person" size={24} color="black" />
                    <Text>Agent</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statusWrapper}>
                <Text style={[styles.statusText, statusColor]}>{property.status}</Text>
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
        justifyContent: 'space-around',
        paddingVertical: 20
    },
    icon: {
        alignItems: 'center'
    },
    statusWrapper: {
        alignSelf: 'center',
        paddingVertical: 20
    },
    statusText: {
        fontWeight: 'bold',
        fontSize: 24,
    }
})

export default Info;