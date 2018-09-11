import React from "react";
import { View, Text } from "react-native";

const CardSection = props => {
  const { textStyle, containerStyle } = styles;
  return (
    <View style={[containerStyle, props.style]}>
      <Text style={textStyle}>{props.label}</Text>
      <Text style={textStyle}>{props.value}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: "#fa983a",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    color: "#fff"
  }
};

export { CardSection };
