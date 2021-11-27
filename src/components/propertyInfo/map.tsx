import React from "react";
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PropertyCoordinates } from "../../models/types/propertyCoordinates";
import { COORDINATES_DELTA } from '../../models/conststanst/coordinatesDelta';

type Props = {
    coordinates: PropertyCoordinates
}

const Map: React.FC<Props> = ({ coordinates }) => {
    return (
        <View style={styles.mapView}>
            <MapView
                region={{
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                    latitudeDelta: COORDINATES_DELTA.LATITUDE_DELTA,
                    longitudeDelta: COORDINATES_DELTA.LONGITUDE_DELTA,
                }}
                style={styles.map}
            >
                <Marker coordinate={coordinates} />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapView: {
        flex: 0.3,
        marginBottom: 30
    },
    map: {
        flex: 1
    },
})

export default Map;