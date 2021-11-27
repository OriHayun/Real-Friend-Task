import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenNavigationProp, RouteProps } from '../models/types/navigation';
import { Property } from '../models/types/property';
import GenericModal from '../components/genericModal'
import ImageList from '../components/propertyInfo/imageList';
import Info from '../components/propertyInfo/info';
import Map from '../components/propertyInfo/map';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    route: RouteProps,
    navigation: ScreenNavigationProp
}

const PropertyScreen: React.FC<Props> = ({ route, navigation }) => {
    const { property, favorites }: { property: Property, favorites: Property[] } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState<string>(property.description)

    const onIconClick = (contentForModal: string) => {
        setModalContent(contentForModal);
        setModalVisible(true)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AntDesign name="heart" style={styles.headerIcon} onPress={() => navigation.navigate('Favorites', { favorites })} />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <GenericModal
                content={modalContent}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            <ImageList
                images={property.images}
            />
            <Info
                property={property}
                onIconClick={onIconClick}
            />
            <Map
                coordinates={property.coordinates}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    headerIcon: {
        fontSize: 20,
        color: 'red',
        marginRight: 10
    }
});

export default PropertyScreen;