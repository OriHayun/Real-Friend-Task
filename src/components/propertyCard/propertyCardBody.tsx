import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropertyCategoryEnum } from '../../models/enums/propertyCategory';
import { PropertyStatusEnum } from '../../models/enums/propertyStatus';
import { PropertyAddress } from '../../models/types/propertyAddress';
import capitelizeFirstLetter from '../../utils/capitelizeFirstLetter';
import setStatusColor from '../../utils/setStatusColor';

type Props = {
    address: PropertyAddress,
    category: PropertyCategoryEnum,
    status: string
}

const PropertyCardBody: React.FC<Props> = ({ address, category, status }) => {
    return (
        <View style={styles.cardBody}>
            <Text numberOfLines={1} style={styles.addressText}>{address.address}</Text>
            <View style={styles.propertyInfoWrapper}>
                <Text>{capitelizeFirstLetter(category.toString())}</Text>
                <Text style={{ color: setStatusColor(status) }}>{capitelizeFirstLetter(status)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBody: {
        flex: 0.4,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    addressText: {
        paddingVertical: 30
    },
    propertyInfoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default PropertyCardBody;