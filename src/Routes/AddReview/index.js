import React, { Component } from "react";
import { Text, View, ScrollView,Dimensions,Image,TextInput, TouchableOpacity } from "react-native";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import styles from "./styles";


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      title: '',
      base64string: '',
      Picture: null,
      avatarSource: ''
    };
  }

  

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
         <Text style={{ paddingLeft: 15, color: 'gray' }}>CLIENT CONTACT INFORMATION</Text>

            <View style={styles.InputView}>
              <Text style={styles.TitleText}>Phone</Text>
              <TextInput
              style={{ paddingLeft: 15, flex: 1}}
              //  value="1525412"
               placeholder="(123) 456-7890"
               />
            </View>

            <View style={styles.InputView}>
              <Text style={styles.TitleText}>Email</Text>
              <TextInput
              style={{ paddingLeft: 15, flex: 1}}
              placeholder="abc@gmail.com"
               />
            </View>

            <Text style={{alignSelf:'center', paddingTop:10, color:"#0693e3" }}>IMPORT CONTACT INFO</Text>
            <Text style={{ paddingLeft: 15, color: 'gray' ,paddingTop: 15}}>JOB DETAILS</Text>

            <View style={styles.InputView}>
              <Text style={styles.TitleText}>Title</Text>
              <TextInput
              style={{ paddingLeft: 15, flex: 1}}
              placeholder="Hello Testing"
               />
            </View>

            <View style={styles.bottomView}>
              <TouchableOpacity>
              <Image source={require('../../../assets/camera.png')} style={{height: 30, width: 30}}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonStyle} >
                <Text style={{alignSelf:'center'}}>Send</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

export default index;