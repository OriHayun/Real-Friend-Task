import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Modal, Pressable, ScrollView } from 'react-native';
import { Property } from "../models/types/property";
import { Feather } from '@expo/vector-icons';

type Props = {
    content: string,
    modalVisible: boolean,
    setModalVisible: Function
}

const GenericModal: React.FC<Props> = ({ content, modalVisible, setModalVisible }) => {
    const DEFAULT_NUMBER_OF_LINES: number = 3
    const [textShown, setTextShown] = useState(false);
    const [lengthMore, setLengthMore] = useState(false);

    const toggleNumberOfLines = () => { setTextShown(!textShown); }

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= DEFAULT_NUMBER_OF_LINES);
    }, []);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                        style={styles.cancelIcon}>
                        <Feather name="x" size={20} color="black" />
                    </Pressable>
                    <Text
                        numberOfLines={textShown ? undefined : DEFAULT_NUMBER_OF_LINES}
                        onTextLayout={onTextLayout}
                        ellipsizeMode='tail'
                        style={styles.modalText}
                    >
                        {content}
                    </Text>
                    {lengthMore
                        ? <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={toggleNumberOfLines}
                        >
                            <Text style={styles.textStyle}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                        </Pressable>
                        : null
                    }
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    cancelIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default GenericModal;