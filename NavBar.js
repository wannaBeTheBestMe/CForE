import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 60,
        width: "100%",
        backgroundColor: "#5D576B",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    separator: {
        paddingLeft: 25,
        paddingRight: 25,
    },
});

function NavBar() {
    const [onWatch, setOnWatch] = useState(false);
    const [onChat, setOnChat] = useState(true);
    const [onRead, setOnRead] = useState(false);

    function set(activity) {
        if (activity === 'watch') {
            setOnWatch(() => true);
            setOnChat(() => false);
            setOnRead(() => false);
        }
        if (activity === 'chat') {
            setOnWatch(() => false);
            setOnChat(() => true);
            setOnRead(() => false);
        }
        if (activity === 'read') {
            setOnWatch(() => false);
            setOnChat(() => false);
            setOnRead(() => true);
        }
    }

    return (
        <View style={styles.container}>

            <TouchableWithoutFeedback onPress={() => set("watch")}>
                <View style={styles.separator}>
                    <Image
                        source={onWatch ? require("./assets/navbar/Watch_2.png") : require("./assets/navbar/Watch.png")} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => set("chat")}>
                <View style={styles.separator}>
                    <Image
                        source={onChat ? require("./assets/navbar/Chat_2.png") : require("./assets/navbar/Chat.png")} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => set("read")}>
                <View style={styles.separator}>
                    <Image
                        source={onRead ? require("./assets/navbar/Read_2.png") : require("./assets/navbar/Read.png")} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.separator}>
                    <Image
                        source={require("./assets/navbar/Profile_Picture.png")} />
                </View>
            </TouchableWithoutFeedback>

        </View>
    );
}

export default NavBar;
