import React,{Component} from 'react';
import {Button,Text,View} from "react-native";

class Cat extends Component{

  state={isHungry: true};

  render(){
  return(
  <View>
  <Text>I am {this.state.isHungry ? "Hungry" : "Full"}</Text>
  </View>
  );

  }
}
