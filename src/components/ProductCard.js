import React, { Component } from "react";
import { View, Text, Modal, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { CardSection } from "./common";
import { Button } from "react-native-elements";
import { productDelete } from "../actions";
import { connect } from "react-redux";

class ProductCard extends Component {
  state = {
    showModal: false
  };

  modalFlipper = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const {
      cardStyle,
      dateStyle,
      numberStyle,
      elementRightStyle,
      elementLeftStyle,
      titleStyle,
      containerStyle
    } = styles;
    let { product, cost, leadTime, quantity, sales, uid } = this.props.product;
    console.log(sales, leadTime, quantity, cost);
    leadTime = parseInt(leadTime);
    sales = parseInt(sales);
    cost = parseInt(cost);
    quantity = parseInt(quantity);
    // calculate the number of days to empty inventory
    const days_left = Math.ceil(quantity / sales);
    // calculate the qty of order for next time
    // based on assumed 90 day supply order
    const order_qty = sales * (90 + leadTime);

    // date calculations to evaluate stock-out
    let today = moment();
    let stock_out = today.add(days_left, "d");
    let next_order_date = stock_out.subtract(90 + leadTime, "d");

    // set next_order_date to today if it's before today
    next_order_date = next_order_date.isAfter(moment(), "day")
      ? next_order_date
      : moment();

    const cardColor =
      days_left > 90 + leadTime
        ? "#2ecc71"
        : days_left < 30
          ? "#e74c3c"
          : "#f1c40f";

    return (
      <View>
        <Modal
          visible={this.state.showModal}
          transparent
          animationType="fade"
          onRequestClose={() => {}}
        >
          <View style={containerStyle}>
            <CardSection label="Product Name" value={product} />
            <CardSection label="Quantity" value={quantity} />
            <CardSection label="Cost" value={cost} />
            <CardSection label="Lead Time" value={leadTime} />
            <CardSection label="Sales" value={sales} />
            <CardSection
              label="Stock Out"
              value={stock_out.format("MM/DD/YYYY")}
            />
            <CardSection
              label="Next Order Date"
              value={next_order_date.format("MM/DD/YYYY")}
            />
            <CardSection label="Order Qty" value={order_qty} />
            <Button
              large
              containerViewStyle={{ marginTop: 15 }}
              backgroundColor="#0a3d62"
              title="Close"
              onPress={() => this.modalFlipper()}
            />
            <Button
              large
              containerViewStyle={{ marginTop: 15 }}
              backgroundColor="#eb2f06"
              title="Delete"
              onPress={() => {
                this.modalFlipper();
                this.props.productDelete(uid);
              }}
            />
          </View>
        </Modal>
        <TouchableWithoutFeedback onPress={this.modalFlipper.bind(this)}>
          <View style={[cardStyle, { backgroundColor: cardColor }]}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={titleStyle}>{product}</Text>
              <View>
                <Text style={numberStyle}>{days_left}</Text>
                <Text style={{ color: "white", alignSelf: "center" }}>
                  days
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={elementLeftStyle}>
                <Text style={{ color: "#fff" }}>Next Order</Text>
                <Text style={dateStyle}>
                  {next_order_date.format("MM/DD/YYYY")}
                </Text>
              </View>
              <View style={elementRightStyle}>
                <Text style={{ color: "#fff" }}>Qty To Order</Text>
                <Text style={dateStyle}>{order_qty}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                flex: 1,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>
                Total Order Cost
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: "bold"
                }}
              >
                ${(cost * order_qty).toFixed(2)}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    borderRadius: 5,
    padding: 10,
    marginTop: 15
  },
  titleStyle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20
  },
  numberStyle: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff"
  },
  dateStyle: {
    fontSize: 25,
    marginTop: 10,
    color: "#fff"
  },
  elementRightStyle: {
    padding: 10,
    flex: 1,
    marginVertical: 10,
    alignItems: "center",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderLeftWidth: 0.5,
    borderBottomWidth: 1
  },
  elementLeftStyle: {
    padding: 10,
    flex: 2,
    marginVertical: 10,
    borderTopWidth: 1,
    borderRightWidth: 0.5,
    borderColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1
  },
  containerStyle: {
    backgroundColor: "rgba(0,0,0,.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center",
    padding: 10
  }
};

export default connect(
  null,
  { productDelete }
)(ProductCard);
