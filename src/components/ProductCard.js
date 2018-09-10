import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProductCard extends Component { 
    render() {
        const { cardStyle, dateStyle, numberStyle, elementRightStyle, elementLeftStyle, titleStyle } = styles;
        const { product_name, cost, lead_time, quantity, sales } = this.props.doc.data();
        const days_left = quantity/sales;
        const today = new Date();
        const stock_out_date = new Date(); 
        stock_out_date.setDate(today.getDate()+days_left);
        const run_out_date = new Date();
        run_out_date.setDate(stock_out_date.getDate()-lead_time);
        const order_qty = sales*(90+lead_time); 

        console.log(product_name);

        return (
            <View style={cardStyle}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={titleStyle}>{product_name}</Text>
                    <Text style={numberStyle}>{days_left}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={elementLeftStyle}>
                        <Text style={{ color: '#fff' }}>Next Order</Text>
                        <Text style={dateStyle}>09/31/2018</Text>
                    </View>
                    <View style={elementRightStyle}>
                        <Text style={{ color: '#fff' }}>Qty To Order</Text>
                        <Text style={dateStyle}>{order_qty}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', padding: 10, flex: 1, justifyContent: 'center'}}>
                    <Text style={{ flex: 2, fontSize: 20, color: '#fff' }}>Total Order Cost</Text>
                    <Text style={{ flex: 1, fontSize: 30, color: '#fff' }}>{cost * order_qty }</Text>
                </View>
            </View>    
        );
    }
}

const styles = {
    cardStyle: {
        height: 225,
        borderRadius: 5,
        backgroundColor: '#2ecc71',
        padding: 10,
        marginTop: 15
    }, 
    titleStyle: {
        color: '#fff',
        fontSize: 22,
        flex: 3
    },
    numberStyle: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1
    }, 
    dateStyle: {
        fontSize: 25,
        marginTop: 10,
        color: '#fff'
    },
    elementRightStyle: {
        padding: 10,
        flex: 1,
        marginVertical: 10,
        alignItems: 'center',
        borderColor: '#fff',
        borderTopWidth: 1,
        borderLeftWidth: .5,
        borderBottomWidth: 1,
    },
    elementLeftStyle: {
        padding: 10,
        flex: 2,
        marginVertical: 10,
        borderTopWidth: 1,
        borderRightWidth: .5,
        borderColor: '#fff',
        alignItems: 'center',  
        borderBottomWidth: 1,
    }
}
export default ProductCard;