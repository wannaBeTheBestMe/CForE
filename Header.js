import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import GradientText from './GradientText.js';

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#5D576B",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        // borderColor: 'red',
        // borderBottomWidth: 1,
        // borderTopWidth: 1,
    },

    title: {
        fontFamily: "Biko-Bold",
        fontSize: 48,
    },
});

const Header = (props) => {
    return (
        <>
            <View style={styles.header}>
                <GradientText style={styles.title}>{props.title}</GradientText>
            </View>

        </>
    )
};

export default Header;
