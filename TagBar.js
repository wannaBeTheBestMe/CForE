import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import GradientText from './GradientText.js';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 10,
    },

    tagsContainer: {
        flexDirection: "row",
        backgroundColor: "#E8CEE4",
        width: "90%",
        height: 55,
        borderRadius: 17,
        padding: 11,
    },

    poundSign: {
        fontFamily: "BigJohnPRO-Regular",
        fontSize: 30,
        marginTop: -5,
        paddingRight: 7,
    },

    activeTag: {
        backgroundColor: "#5D576B",
        height: 30,
        padding: 5,
        marginRight: 11,
        borderRadius: 12,
    },

    inactiveTags: {
        backgroundColor: "#D7BCE8",
        height: 30,
        padding: 5,
        marginRight: 11,
        borderRadius: 12,
    },
});

const DATA = [
    {id: 1, tag: "loremIpsum"},
    {id: 2, tag: "ipsum"},
    {id: 3, tag: "dolor"},
    {id: 4, tag: "amet"},
    {id: 5, tag: "commodo"},
    {id: 6, tag: "morbi"},
    {id: 7, tag: "congue"},
    {id: 8, tag: "mauris "},
];

function Tag(props) {
    const [isActive, setActive] = useState(false);

    function toggle() { setActive(!isActive); }

    return (
        <TouchableOpacity
            onPress={() => {toggle(); props.onPress}}
            style={isActive ? styles.activeTag : styles.inactiveTags}
        >
            <Text
                style={{fontFamily: "BigJohnPRO-Regular", fontSize: 16,
                    color: isActive ? "#fff" : "#000"}}
            >
                {props.tag}
            </Text>
        </TouchableOpacity>
    );
}

const TagsBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tagsContainer}>
                <Text style={styles.poundSign}>#</Text>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Tag tag={item.tag}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </View>
    )
};

export default TagsBar;
