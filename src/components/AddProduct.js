import React, { Component } from 'react';
import { View } from 'react-native';
import Input from './common/Input';
import Button from './common/Button';
import { connect } from 'react-redux';
import { addProduct } from '../actions'
import firebase from 'firebase';
import '@firebase/firestore';

class AddProduct extends Component {
    onButtonPress = () => {
        const db = firebase.firestore();
        const settings = {timestampsInSnapshots:true};
        db.settings(settings);

        db.collection("products").add({
            product_name: this.props.product,
            quantity: this.props.quantity,
            sales: this.props.sales,
            cost: this.props.cost,
            lead_time: this.props.leadTime
        }).then(()=>console.log('Added product'))
        .catch(() => console.log('error'));
    }
    render() {
        return (
            <View style={styles.viewStyle}>
                <Input
                    label='Product'
                    placeholder='Enter Product Name'
                    onChangeText={value => this.props.addProduct({ prop: 'product', value })}
                    value={this.props.product}
                />
                <Input
                    label='Qty'
                    placeholder='Quantity Available'
                    onChangeText={value => this.props.addProduct({ prop: 'quantity', value })}
                    value={this.props.quantity}
                />
                <Input
                    label='Sales'
                    placeholder='Average Daily Sales'
                    onChangeText={value => this.props.addProduct({ prop: 'sales', value })}
                    value={this.props.sales}
                />
                <Input
                    label='Lead Time'
                    placeholder='Total Lead Time'
                    onChangeText={value => this.props.addProduct({ prop: 'leadTime', value })}
                    value={this.props.leadTime}
                />
                <Input
                    label='CPU'
                    placeholder='Cost Per Unit'
                    onChangeText={value => this.props.addProduct({ prop: 'cost', value })}
                    value={this.props.cost}
                />
                <Button text="Save" onPress={()=>this.onButtonPress()} />
            </View>
        );
    };
}

const styles = {
    viewStyle: {
        padding: 10,
        backgroundColor: '#fff', 
        flex: 1
    }    
}

const mapStateToProps = (state) => {
    const { product, cost, quantity, leadTime, sales } = state.product;
    return { product, cost, quantity, leadTime, sales };
}

export default connect(mapStateToProps, { addProduct })(AddProduct);