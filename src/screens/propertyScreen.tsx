import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenNavigationProp, RouteProps } from '../models/types/navigation';
import { Property } from '../models/types/property';
import GenericModal from '../components/genericModal'
import ImageList from '../components/propertyInfo/imageList';
import Info from '../components/propertyInfo/info';
import Map from '../components/propertyInfo/map';

type Props = {
    route: RouteProps,
    navigation: ScreenNavigationProp
}

const PropertyScreen: React.FC<Props> = ({ route, navigation }) => {
    const { property }: { property: Property } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState<string>(property.description)

    const onIconClick = (contentForModal: string) => {
        setModalContent(contentForModal);
        setModalVisible(true)
    }

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
    }
});

export default PropertyScreen;