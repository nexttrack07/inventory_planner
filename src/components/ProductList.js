import React, { Component } from "react";
import _ from "lodash";
import { StyleSheet, Text, FlatList, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { productsFetch } from "../actions";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  _keyExtractor = (product, index) => product.uid;
  componentWillMount() {
    console.log("Product List Mounted");
    this.props.productsFetch();
  }

  render() {
    console.log(this.props.products);
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f3f3f3", padding: 10 }}>
        <FlatList
          data={this.props.products}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <ProductCard key={item.uid} product={item} />
          )}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const products = _.map(state.product.products, (val, uid) => {
    return { ...val, uid };
  });

  return { products };
};
export default connect(
  mapStateToProps,
  { productsFetch }
)(ProductList);
