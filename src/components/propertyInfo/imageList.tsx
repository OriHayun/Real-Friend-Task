import React from "react";
import { View, FlatList, StyleSheet, Image } from 'react-native';

type Props = {
    images: string[],
}

const ImageList: React.FC<Props> = ({ images }) => {
    return (
        <View style={styles.imageSlider}>
            <FlatList
                data={images}
                keyExtractor={(item: string) => item}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }: { item: string }) => {
                    return (
                        <Image
                            style={styles.image}
                            source={{ uri: item }}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageSlider: {
        flex: 0.3
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
})

export default ImageList;