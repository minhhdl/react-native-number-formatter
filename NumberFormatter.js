import React, { Component } from 'react';
import { Text } from 'react-native';

export default class NumberFormatter extends Component {
  constructor(props){
    super(props);
    this.state = {
      formattedValue: ""
    }
  }

  componentDidMount(){
    this.formatValue();
  }

  componentWillReceiveProps(){
    this.formatValue();
  }

  formatValue(){
    const {value, separator, prefix, suffix} = this.props;

    try{
      if(value){
        var stringValue = value.toString();

        var formattedValue = [];
        if(suffix) formattedValue.push(suffix);

        //Count and push separator to new string value
        var count = 1;
        for(var i = stringValue.length - 1; i >= 0; i--){
          formattedValue.push(stringValue[i]);
          if(count == 3) {
            formattedValue.push(separator || " ");
            count = 1;
          }else {
            count++;
          }
        }

        formattedValue.reverse();

        if(prefix) formattedValue.push(prefix);

        formattedValue = formattedValue.join("");

        this.setState({ formattedValue });
      }else {
        var formattedValue = "";
        this.setState({ formattedValue });
      }
    }catch(e){

    }
  }

  render() {
    var props = this.props;

    return (
      <Text style={props.style}>{this.state.formattedValue}</Text>
    );
  }
}
