import React, {Component} from "react";
import {ScrollView} from "react-native";
import Overview from "../components/month/Overview";

export default class TestScreen1 extends Component {
  render(){
    return(
      <ScrollView>
        <Overview />
      </ScrollView>
    )
  }
};

// const styles = {
//   testContainer: {
//     flex:1,
//     justifyContent: "space-around",
//     alignItems: "center",
//   }
// }
