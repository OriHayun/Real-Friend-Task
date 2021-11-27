import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { REAL_ESTATE_DEFAULT_IMAGE_PATH } from '../../models/conststanst/real_estate_default_image_path';

type Props = {
    imagePath: string | null
}

const PropertyCardHeader: React.FC<Props> = ({ imagePath }) => {

    return (
        <View style={styles.cardHeader}>
            <Image
                style={styles.propertyMainImage}
                source={imagePath
                    ? { uri: imagePath }
                    : { uri: REAL_ESTATE_DEFAULT_IMAGE_PATH }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeader: {
        flex: 0.3,
    },
    propertyMainImage: {
        flex: 1,
        resizeMode: 'stretch'
    },
})

export default PropertyCardHeader