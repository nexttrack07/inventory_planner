import React, { Component } from "react";
import { TextInput, View, Text, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-vector-icons";

class Input extends Component {
  render() {
    let { themeColor, label, ...attributes } = this.props;
    themeColor = themeColor ? themeColor : "rgba(231,76,60,1)";
    const styles = {
      viewStyle: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: themeColor,
        borderRadius: 20,
        margin: 10
      },
      textInputStyle: {
        margin: 20,
        flex: 2
      },
      labelStyle: {
        color: "white",
        borderRadius: 20,
        textAlign: "center",
        alignSelf: "center",
        fontWeight: "bold"
      },
      labelViewStyle: {
        flex: 1,
        backgroundColor: themeColor,
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
      }
    };
    const { viewStyle, labelViewStyle, labelStyle, textInputStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.textInputRef.focus()}>
        <View style={viewStyle}>
          <View style={labelViewStyle}>
            <Text style={labelStyle}>{label}</Text>
          </View>
          <TextInput
            {...attributes}
            style={textInputStyle}
            ref={input => {
              this.textInputRef = input;
            }}
            blurOnSubmit={false}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export { Input };
