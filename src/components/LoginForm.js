import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Button, Input } from './common';
import { connect } from 'react-redux';
import { loginChange, loginUser, createUser, toSignUp } from '../actions';

class LoginForm extends Component {
    renderError = (error, errorStyle) => {
        return (
            <View style={errorStyle}>
                <Text style={styles.errorTextStyle}>{error}</Text>
            </View>
        )
    }
    onButtonPress = (isLogin, email, password, loginUser, createUser) => {
        return isLogin ? loginUser({ email, password }) : createUser({ email, password });
    }
    render() {
        const { loginChange, loginUser, createUser, email, password, error, isLogin, toSignUp } = this.props;
        const { viewStyle, messageStyle, linkStyle, errorStyle, titleTextStyle, titleViewStyle } = styles;
        const buttonText = isLogin ? "Log In" : "Sign Up";
        const message = isLogin ? "Don't have an account?" : "Already have an account?";
        const link = isLogin ? "Sign Up Now": "Log In Now";
        return (
            <View style={viewStyle}>
                {error ? this.renderError(error, errorStyle) : null}
                <Input
                    label="Email"
                    placeholder="email"
                    onChangeText={value => loginChange({ prop:'email', value })}
                    value={email}
                />
                <Input
                    label="Password"
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={value => loginChange({ prop:'password', value })}
                    value={password}
                />
                <Button 
                    text={buttonText}
                    onPress={() => this.onButtonPress(isLogin, email, password, loginUser, createUser)}
                />
                <View style={messageStyle}>
                    <Text>{message}</Text>
                    <TouchableOpacity onPress={() => toSignUp(isLogin)}>
                        <Text style={linkStyle}>{link}</Text>
                    </TouchableOpacity>
                </View>
                <View style={titleViewStyle}>
                    <Text style={titleTextStyle}>INVENTORY PLANNER</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    errorStyle: {
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(231,76,60,1)',
        borderRadius: 5,
    },
    errorTextStyle: {
        color: 'rgba(231,76,60,1)',
        alignSelf: 'center',
        fontSize: 18
    }, 
    titleTextStyle: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'rgba(231,76,60,1)',
        fontWeight: 'bold'
    },
    titleViewStyle: {
        padding: 20,
        marginTop: 30
    }, 
    messageStyle: {
        alignSelf: 'center',
        marginTop: 20,
    }, 
    linkStyle: {
        color: 'blue',
    }
}
const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps, { loginChange, toSignUp, createUser, loginUser })(LoginForm);
