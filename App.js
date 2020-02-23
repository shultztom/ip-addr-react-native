import React, { Component } from "react";
import { StatusBar, StyleSheet, View, ScrollView } from "react-native";
import { Text, ThemeProvider, Card } from "react-native-elements";
import axios from "axios";
import _ from "lodash";
import CardView from "./CardView";

export default class App extends Component {
  state = {
    ipInfo: null,
    ipLookupError: false
  };

  componentDidMount() {
    StatusBar.setHidden(true);
    this.getIPInfo();
  }

  getIPInfo = async () => {
    let response;
    try {
      response = await axios.get("https://ip-addr.shultzlab.com/");
      if (response.status === 200) {
        this.setState({
          ipInfo: response.data
        });
      } else {
        this.setState({
          ipLookupError: true
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        ipLookupError: true
      });
    }
  };

  render() {
    if (this.state.ipInfo) {
      let cards = [];
      delete this.state.ipInfo.msg;

      _.forEach(this.state.ipInfo, function(value, key) {
        // Format Keys some
        if (key === "ip") {
          key = "IP Address";
        }
        key = _.startCase(key);

        cards.push(<CardView key={key} ipInfoKey={key} ipInfoItem={value} />);
      });
      return (
        <ThemeProvider style={styles.container}>
          <ScrollView>
            <View style={styles.container}>
              <Text h1>IP Info</Text>
            </View>
            <View>{cards}</View>
          </ScrollView>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider>
          <View style={styles.container}>
            <Text h1>IP Info</Text>
          </View>
        </ThemeProvider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%"
  }
});
