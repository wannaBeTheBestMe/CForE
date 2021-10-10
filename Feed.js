import React, { useState } from 'react';
import { Text, Image, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 10,
    },

    feed: {
        backgroundColor: "#E8CEE4",
        borderRadius: 17,
        height: 460,
        width: "90%",
    },

    post: {
        marginTop: 5,
        padding: 15,
        backgroundColor: "#8884FF",
        borderRadius: 12,
        maxWidth: "90%",
    },

    userInformation: {
        flexDirection: "row",
    },

    userInformationText: {
        flexDirection: "column",
    },

    postUsername: {
        fontFamily: "Biko-Bold",
        fontSize: 18,
        color: "#fff",
        paddingLeft: 12,
    },

    postHandle: {
        fontFamily: "Biko-Regular",
        fontSize: 11,
        color: "rgba(255, 255, 255, 0.6)",
        paddingLeft: 12,
    },

    postText: {
        fontFamily: "Biko-Regular",
        color: "#fff",
        fontSize: 18,
        marginTop: 12,
    },

    postTag: {
        backgroundColor: "#5D576B",
        width: 78,
        borderRadius: 12,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 4,
        paddingBottom: 4,
        position: "absolute",
        right: 0,
    },

    postTagText: {
        fontFamily: "BigJohnPRO-Regular",
        fontSize: 14,
        color: "#fff",
    },

    divider: {
        marginTop: 10,
        marginBottom: 10,
        height: 0.4,
        backgroundColor: "#fff",
    },
});

const Post = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.post}>
                <View style={styles.userInformation}>
                    <Image source={props.profilePicture}/>
                    <View style={styles.userInformationText}>
                        <Text style={styles.postUsername}>{props.username}</Text>
                        <Text style={styles.postHandle}>{props.userHandle}</Text>
                    </View>
                </View>

                <Text style={styles.postText}>{props.content}</Text>

                <View style={styles.divider}/>
                <View style={styles.userInformation}>
                    <Image source={require("./assets/Reactions.png")}/>
                    <View style={styles.postTag}>
                        <Text style={styles.postTagText}>loremIpsum</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

function Feed(props) {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.feed}
                data={props.data}
                renderItem={({item}) => <Post
                    profilePicture={item.profilePicture}
                    username={item.username}
                    userHandle={item.userHandle}
                    content={item.content}
                />}
            />
        </View>
    );
}

export default Feed;
