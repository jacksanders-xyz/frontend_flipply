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
export default class HeelflipMenu extends Component {
    constructor() {
      super();
    }
    
    render() {
        return this._displayHEELFLIP_MENU();
    }

  _displayHEELFLIP_MENU() {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
          <View style={{height: 1950}}>
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
                Heelflips
                </Text>

                <Text style={localStyles.descriptiveText}>
                For some (like myself), the heelflip feels more natural than the
                kickflip {"\n\n"} The heelflip is an Ollie, plus a 360
                degree rotatation about the lengthwise axis of the board, away from
                you, in the opposite direction of the kickflip.{"\n\n"}
                {"\n\n"}PRE-REQUISITES:{"\n\n"} Same as the kickflip....An Ollie.
                A backside pop shuv it/frontside Shuv-it might help as you will be
                generally better at riding a skateboard but everyone is different.
                (Most people find kickflips easier so you could give them a shot).
                If you can kickflip it will definitely speed up the process of
                learning to heelflip, is it will help with understanding the general
                timing of popping and flicking.
                {"\n\n"}
                FOOT POSITION:{"\n\n"}
                Back foot is the same as the kickflip, in the curve of the tail and ready to pop in such a way that the foot snaps down{"\n\n"}
                Front foot is lower, and on the opposite side of the board. Your toes (I would even say around a fourth) should be hanging off the edge, sticking straight out
                {"\n\n"}
                1. Pop. {"\n\n"}
                The back foot is the same as the ollie, it snaps straight down.{"\n\n"}
                2. Flick{"\n\n"}
                Instead of rolling and flicking out (as you did in the kickflip), you flick away from you with the bottom corner of your heel
                {"\n\n"}
                3.Landing {"\n\n"}
                You have to commit and trust that the board will be there when you go to land! This confidence will only grow with time but in the meantime 
                get ready to land 'primo' once or twice before you get the hang of it.{"\n\n"}

                Click below to see the heelflip in augmented reality!

                </Text>

              </View>

              <TouchableHighlight style={localStyles.buttons}
              onPress={() => this.props._begin_TrickScene("HEELFLIP_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
              heelflip
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
      marginTop: 15,
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
      height : '5.7%',
      width : '40%',
      marginTop: 30,
      marginBottom: 10,
    },
  });

module.exports = HeelflipMenu;

