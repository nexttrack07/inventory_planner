import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { productsFetch } from '../actions';
import ProductCard from './ProductCard';

class ProductList extends Component {
    componentWillMount() {
        this.props.productsFetch();
    }
    renderProductCards() {
        
    }

    render() {
        console.log(this.props.products);
        return (
            <View style={{flex:1, backgroundColor: '#f3f3f3', padding: 10}}>
                {this.renderProductCards()}
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item 
                        buttonColor='#9b59b6'
                        title="Add Product"
                        onPress={() => Actions.addProduct()}
                    >
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const mapStateToProps = (state) => {
    const products = _.map(state.product.products, (val, uid) => {
        return { ...val, uid };
    })

    return { products };
}
export default connect(mapStateToProps, { productsFetch })(ProductList);