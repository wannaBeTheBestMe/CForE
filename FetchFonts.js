import * as Font from 'expo-font';

const FetchFonts = () => {
    return Font.loadAsync({
        "Biko-Light": require("/home/agastya/Programming/CForE/assets/fonts/Biko_Light-Restricted.otf"),
        "Biko-Regular": require("/home/agastya/Programming/CForE/assets/fonts/Biko_Regular.otf"),
        "Biko-Bold": require("/home/agastya/Programming/CForE/assets/fonts/Biko_Bold.otf"),
        "Biko-Black": require("/home/agastya/Programming/CForE/assets/fonts/Biko_Black.otf"),

        "BigJohnPRO-Light": require("/home/agastya/Programming/CForE/assets/fonts/bigjohnpro-light.otf"),
        "BigJohnPRO-Regular": require("/home/agastya/Programming/CForE/assets/fonts/bigjohnpro-regular.otf"),
        "BigJohnPRO-Bold": require("/home/agastya/Programming/CForE/assets/fonts/bigjohnpro-bold.otf"),
    });
};

export default FetchFonts;
