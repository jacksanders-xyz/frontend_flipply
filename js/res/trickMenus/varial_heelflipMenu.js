import React, { Component } from 'react';
import { AppRegistry,
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';
//
//
export default class VarialheelflipMenu extends Component {
    constructor() {
      super();
    }
    
    render() {
        return this._displayVARIALHEELFLIP_MENU();
    }

  _displayVARIALHEELFLIP_MENU() {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
          <View style={{height: 1500}}>
                <TouchableOpacity 
                style={localStyles.buttonBox}
                activeOpacity={.5} 
                onPress={() => this.props._back_toMainTrickMenu()}
                >
                <Image 
                style={localStyles.topMenu}
                source={require('../archive/icon_left_w.png')}        
                />
                </TouchableOpacity>

              <View style={localStyles.textFlex}>
                <Text style={localStyles.titleText}>
               Varial heelflips
                </Text>

                <Text style={localStyles.descriptiveText}>
                {"\n\n"}
                What is it? {"\n\n"}
                A kickflip plus a backside Pop Shuv-it
                {"\n\n"}PRE-REQUISITES:{"\n\n"} An Ollie. A frontside pop shuv
                it, a heelflip.
                {"\n\n"}
                FOOT POSITION:{"\n\n"}
                Back foot is the same as the frontside Pop Shuv-it. on the part of the curve closest to you, toes hangin off{"\n\n"}
                Front foot is in standard heelflip spot {"\n\n"}
                1. Pop. {"\n\n"}
                Back foot is the same as a frontside Pop shuv it, on the part of the curve closest to you{"\n\n"}
                2. Flick{"\n\n"}
                front foot is the same as the heelflip. The trick is doing them both at the same time and finding the perfect angle/compromise between the two...(think more heelflip) 
                3.Landing {"\n\n"}
                You have to commit and trust that the board will be there when you go to land! This confidence will only grow with time but in the meantime 
                get ready to land 'primo' once or twice before you get the hang of it.{"\n\n"}
                Click below to see the kickflip in augmented reality!

                </Text>

              </View>

              <TouchableHighlight style={localStyles.buttons}
              onPress={() => this.props._begin_TrickScene("VARIALHEELFLIP_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
              varial heelflip
              </Text>
              </TouchableHighlight>
          </View>
        </ScrollView>

    )
  }
}
  
  const localStyles = StyleSheet.create({
    flex : {
      flex : 1,
    },
    scrollFlex : {
      flex : 1,
      backgroundColor: "black",
    },
    viroContainer : {
      flex : 1,
      backgroundColor: "black",
    },
    outer : {
      flex : 1,
      flexDirection: 'row',
      alignItems:'center',
    },
    inner: {
      flex : 1,
      flexDirection: 'column',
      alignItems:'center',
    },
    textFlex : {
      flex : 1,
      justifyContent: 'center',
      marginBottom: 0
    },
    titleText: {
      paddingTop: 10,
      paddingBottom: 20,
      fontFamily: 'Futura',
      color:'#fff',
      textAlign:'center',
      fontSize : 32
    },
    descriptiveText: {
      fontFamily: 'Futura',
      flexWrap: 'wrap',
      width: '90%',
      margin: 10,
      color:'#fff',
      textAlign:'justify',
      fontSize : 16
    },
    buttonText: {
      color:'#fff',
      textAlign:'center',
      fontSize : 20
    },
    buttons : {
      height: 80,
      width: 250,
      paddingTop: 20,
      paddingBottom: 20,
      alignSelf: 'center',
      marginBottom: 15,
      backgroundColor: 'hsla(205, 83%, 16%, 0.67)',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    exitButton : {
      height: 50,
      width: 100,
      paddingTop:10,
      paddingBottom:100,
      marginTop: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    topMenu: {
      height : '23%',
      width : '40%',
      top : 0,
    },
    buttonBox: {
      height : '5%',
      width : '40%',
      marginTop: 35,
      marginBottom: 10,
    },
  });

module.exports = VarialheelflipMenu;

