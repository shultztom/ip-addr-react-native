import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Card } from "react-native-elements";

export default class App extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        {this.props.ipInfoItem ? (
          <Card title={this.props.ipInfoKey}>
            <View style={styles.container}>
              <Text>{this.props.ipInfoItem}</Text>
            </View>
          </Card>
        ) : (
          <Card title={this.props.ipInfoKey}>
            <View style={styles.container}>
              <Text>N/A</Text>
            </View>
          </Card>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%"
  },
  viewContainer: { paddingBottom: 8 }
});
