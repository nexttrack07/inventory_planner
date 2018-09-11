import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { addProduct, uploadProduct } from "../actions/ProductActions";
import { Input, Button } from "./common";
import firebase from "firebase";

class AddProduct extends Component {
  onButtonPress = () => {
    const { product, cost, quantity, leadTime, sales } = this.props;
    this.props.uploadProduct({ product, cost, quantity, leadTime, sales });
  };
  render() {
    return (
      <ScrollView style={styles.viewStyle}>
        <Input
          label="Product"
          placeholder="Enter Product Name"
          onChangeText={value =>
            this.props.addProduct({ prop: "product", value })
          }
          value={this.props.product}
        />
        <Input
          label="Qty"
          placeholder="Quantity Available"
          onChangeText={value =>
            this.props.addProduct({ prop: "quantity", value })
          }
          value={this.props.quantity}
          clearTextOnFocus
          keyboardType="number-pad"
        />
        <Input
          label="Sales"
          placeholder="Average Daily Sales"
          onChangeText={value =>
            this.props.addProduct({ prop: "sales", value })
          }
          value={this.props.sales}
          clearTextOnFocus
          keyboardType="number-pad"
        />
        <Input
          label="Lead Time"
          placeholder="Total Lead Time"
          onChangeText={value =>
            this.props.addProduct({ prop: "leadTime", value })
          }
          value={this.props.leadTime}
          clearTextOnFocus
          keyboardType="number-pad"
        />
        <Input
          label="CPU"
          placeholder="Cost Per Unit"
          onChangeText={value => this.props.addProduct({ prop: "cost", value })}
          value={this.props.cost}
          clearTextOnFocus
          keyboardType="number-pad"
        />
        <Button text="Save" onPress={() => this.onButtonPress()} />
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    padding: 10,
    backgroundColor: "#fff",
    flex: 1
  }
};

const mapStateToProps = state => {
  const { product, cost, quantity, leadTime, sales } = state.product;
  return { product, cost, quantity, leadTime, sales };
};

export default connect(
  mapStateToProps,
  { addProduct, uploadProduct }
)(AddProduct);
