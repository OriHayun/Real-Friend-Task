import React from "react";
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { REAL_ESTATE_DEFAULT_IMAGE_PATH } from '../../models/conststanst/real_estate_default_image_path';
import SingleImage from "./singleImage";
import { SliderBox } from "react-native-image-slider-box";

type Props = {
    images: string[],
}

const ImageList: React.FC<Props> = ({ images }) => {
    return (
        <View style={styles.imageSlider}>
            {images
                ? <FlatList
                    data={images}
                    initialNumToRender={3}
                    keyExtractor={(item: string) => item}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item }: { item: string }) => {
                        return (
                            <SingleImage path={item} />
                        )
                    }}
                />
                : <Image
                    style={[styles.image, styles.defaultImage]}
                    source={{ uri: REAL_ESTATE_DEFAULT_IMAGE_PATH }}
                />
            }
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
    defaultImage: {
        alignSelf: 'center'
    }
})

export default ImageList;