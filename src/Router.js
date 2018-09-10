import React, { Component } from 'react';
import { Router, Actions, Scene, Stack } from 'react-native-router-flux';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import LoginForm from './components/LoginForm';
import { Icon } from 'react-native-vector-icons/Ionicons';

class RouterComponent extends Component {
    render() {
        return (
            <Router key="root">
                <Stack key="primary">
                    <Scene
                        key="loginForm"
                        component={LoginForm}
                        title="Log In/Sign Up"
                        hideNavBar
                        initial
                    />
                    <Scene 
                        key="productList"
                        component={ProductList}
                        title="Product List" 
                        titleStyle={styles.navTitleStyle}
                        navigationBarStyle={styles.navBarStyle}
                        rightTitle="Add"
                        rightButtonTextStyle={styles.rightStyle}
                        onRight={()=>Actions.addProduct()}
                        left={()=>null}
                    />
                    <Scene key="productDetail" component={ProductDetail} title="Product Detail" />
                    <Scene 
                        key="addProduct" 
                        component={AddProduct}
                        title="Add Product" 
                        navigationBarStyle={styles.navBarStyle}
                        backButtonTintColor="white"
                        titleStyle={styles.navTitleStyle}
                        back
                    />
                </Stack>
            </Router>
        )
    }
}

const styles = {
    navBarStyle: {
        height: 100,
        backgroundColor: "rgba(231,76,60,1)",
    },
    navTitleStyle: {
        color: "white",
        fontSize: 20,
    },
    rightStyle: {
        color: "white"
    }
}

export default RouterComponent;