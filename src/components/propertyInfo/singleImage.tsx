import React, { memo } from 'react';
import { StyleSheet, Image } from 'react-native';

type Props = {
    path: string
}

const SingleImage: React.FC<Props> = ({ path }: { path: string }) => {
    return (
        <Image
            style={styles.image}
            source={{ uri: path }}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginHorizontal: 10
    },
})

export default memo(SingleImage)