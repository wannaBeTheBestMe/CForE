import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import GradientText from './GradientText.js';

const styles = StyleSheet.create({
    tabbar: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 10,
    },

    tabbarButtonContainer: {
        width: "40%",
        marginLeft: 15,
        marginRight: 15,
    },

    tabbarButtonActive: {
        elevation: 4,
        backgroundColor: "#5D576B",
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 6,
    },

    tabbarButtonInactive: {
        elevation: 4,
        backgroundColor: "#D7BCE8",
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 6,
    },

    tabbarButtonText: {
        fontSize: 25,
        color: "#fff",
        fontFamily: "Biko-Regular",
        alignSelf: "center",
        // textTransform: "uppercase"
    },
});

function TabbarButton(props) {
    const [isActive, setActive] = useState(false);

    function toggle() { setActive(!isActive); }

    return (
        <TouchableOpacity
            onPress={() => {toggle(); props.onPress}}
            style={isActive ? styles.tabbarButtonActive : styles.tabbarButtonInactive}
        >
            <GradientText style={styles.tabbarButtonText}>
                {props.title}
            </GradientText>
        </TouchableOpacity>
    );
}

const Tabbar = (props) => {
    return (
        <View style={styles.tabbar}>
            <View style={styles.tabbarButtonContainer}>
                <TabbarButton title={props.titleLeft} onPress={props.onPressLeft}/>
            </View>
            <View style={styles.tabbarButtonContainer}>
                <TabbarButton title={props.titleRight} onPress={props.onPressRight}/>
            </View>
        </View>
    );
};

export default Tabbar;
