import React from 'react';
import { TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { ChildrenProp } from '../../models/types/childrenProps';
import { ScreenNavigationProp } from '../../models/types/navigation';
import { Property } from '../../models/types/property';

type Props = {
    children: ChildrenProp,
    navigation: ScreenNavigationProp,
    property: Property
}

const PropertyCard: React.FC<Props> = ({ children, navigation, property }) => {
    return (
        <TouchableOpacity
            style={styles.propertyCard}
            onPress={() => navigation.navigate('Property', { property })}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    propertyCard: {
        width: Math.round(Dimensions.get('screen').width / 2.5),
        height: 200,
        backgroundColor: 'white',
        marginTop: 40,
        marginHorizontal: 20,
        borderRadius: 10,
    }
})

export default PropertyCard