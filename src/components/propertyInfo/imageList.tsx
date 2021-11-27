import React from "react";
import { View, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';

type Props = {
    images: string[],
}

const ImageList: React.FC<Props> = ({ images }) => {
    return (
        <View style={styles.imageSlider}>
            <FlatList
                data={images}
                initialNumToRender={images.length}
                keyExtractor={(item: string) => item}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }: { item: string }) => {
                    return (
                        <View >
                            <Image
                                style={styles.image}
                                source={{ uri: item }}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageSlider: {
        flex: 0.3,
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginHorizontal: 10
    },
})

export default ImageList;