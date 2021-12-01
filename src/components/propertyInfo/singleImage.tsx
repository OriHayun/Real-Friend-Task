import React, { memo } from 'react';
import { StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
    path: string
}

const SingleImage: React.FC<Props> = ({ path }: { path: string }) => {
    return (
        <TouchableOpacity>
            <Image
                style={styles.image}
                defaultSource={require('../../assets/images/test.png')}
                source={{ uri: path }}
            />
        </TouchableOpacity>
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