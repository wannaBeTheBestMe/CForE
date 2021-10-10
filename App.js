import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SafeViewAndroid from './SafeViewAndroid.js';
import FetchFonts from './FetchFonts.js';
import AppLoading from 'expo-app-loading';
import Header from './Header.js';
import Tabbar from './Tabbar.js';
import TagsBar from './TagBar.js';
import Feed from './Feed.js';
import NavBar from './NavBar.js';

const feed = [
    {
        profilePicture: require("./assets/Profile_Picture.png"),
        username: "Mary Shelly",
        userHandle: "@marynfrank",
        content: "Tellus, aliquam vitae, ultrices eget, vehicula nec, diam. Integer elementum, felis non faucibus euismod, erat mass dictum eros, eu ornare ligula tortor et mauris. Cras molestie magna in nibh. Aenean et tellus. Fusce adipiscing commodo erat. In eu justo. Nulla dictum, erat sed blandit venenatis, arcu dolor molestie dolor, vitae congue orci risus a nulla. Pellentesque sit amet arcu. In mattis laoreet enim.",
    },
    {
        profilePicture: require("./assets/Profile_Picture_2.png"),
        username: "Suresh Khanna",
        userHandle: "sureshk1982",
        content: "Tellus, aliquam vitae, ultrices eget, vehicula nec, diam. Integer elementum, felis non faucibus euismod, erat mass dictum eros, eu ornare ligula tortor et mauris. Cras molestie magna in nibh. Aenean et tellus. Fusce adipiscing commodo erat. In eu justo. Nulla dictum, erat sed blandit venenatis, arcu dolor molestie dolor, vitae congue orci risus a nulla. Pellentesque sit amet arcu. In mattis laoreet enim.",
    },
];

const App = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={FetchFonts}
                onError={() => console.log("ERROR")}
                onFinish={() => {
                    setFontLoaded(true);
                }}
            />
        );
    }

    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#5D576B"
                barStyle='light-content'
            />

            <Header title="Community"/>

            <Tabbar
                titleLeft="Tags"
                onPressLeft={() => true}
        titleRight="Users"
        onPressRight={() => true}
        />

            <TagsBar />

            <Feed data={feed}/>

            <NavBar />
        </>
    );
};

{/* <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}> */}
{/*     <View style={{padding: 10}}> */}
{/*         <Text>This is text.</Text> */}
{/*     </View> */}
{/* </SafeAreaView> */}

export default App;
