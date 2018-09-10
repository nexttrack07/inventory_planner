import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import ProductCard from './ProductCard';

class ProductList extends Component {

    componentWillMount() {
        
    }

    renderProductCards() {
        const db = firebase.firestore();
        const settings = {timestampsInSnapshots:true};
        db.settings(settings);
        db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach(doc =>  <ProductCard key={doc.data().id} doc={doc} />)
        }).catch((error) => console.log(error));
    }

    render() {
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

export default ProductList;