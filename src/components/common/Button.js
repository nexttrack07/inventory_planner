import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';

class Button extends Component {
    render() {
        let { themeColor, text } = this.props;
        themeColor = themeColor ? themeColor : 'rgba(231, 76, 60, 1)';
        const styles = {
            containerStyle: {
                borderWidth: 1,
                borderColor: themeColor,
                borderRadius: 40,
                padding: 15,
                width: 300,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themeColor,
                marginTop: 20
            }, 
            textStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
            }
        }
        const { containerStyle, textStyle } = styles;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={containerStyle}>
                    <Text style={textStyle}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export { Button };