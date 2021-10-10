import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import {LinearGradient} from 'expo-linear-gradient';

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={["#8884FF", "#BA9CCD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
