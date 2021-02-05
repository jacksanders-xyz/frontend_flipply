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
export default class PopShuv_fs_Menu extends Component {
    constructor() {
      super();
    }
    
    render() {
        return this._displayPOPSHUV_FS_MENU();
    }

  _displayPOPSHUV_FS_MENU() {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
          <View style={{height: 1800}}>
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
                frontside Pop Shuv-its.
                </Text>

                <Text style={localStyles.descriptiveText}> A more flavorful pop shuv it
                you're feelin it, go for it! 
                {"\n\n"}
                STEPS: 
                {"\n\n"} Foot position: 
                front foot is about where it was for the backside version except a little bit further back from the bolts, and a bit straighter.
                The top of your back foot is at about the apex of the curve in the tail, The majority of your foot that is on the tail is on the inner part of the board. 
                {"\n"}
                STEPS:{"\n\n"}
                1. Pop with push {"\n\n"}  
                Instead of flicking and scooping behind you (like you did in the backside version), your backfoot is going to push out in front of you.   
                There will also be some snap involved as well (almost like at the moment of the Ollie, your back foot "points-down".  
                This will generate the movement which
                spins the board horizontally away from you.
                {"\n\n"}
                2.Front foot movement {"\n\n"} 
                same as with the backside pop shuv it...  the front foot is flatter... a horizontal point of rotation...fulcrum...etc..., which
                your board will rotate around. This is very Important as It will
                control the rotation AND allow you to catch the board with your
                front foot as it comes around. 
                {"\n\n"}
                3.Level Out {"\n\n"} 

                Same this as well, less "going forward with your front
                foot" and more picking up your back foot to meet the same level as
                your front... And think "Ollie first"!
                {"\n\n"}
                4. Catch that board and land {"\n\n"} Click below to take a peek!
                   {"\n\n"} 
                </Text>
              </View>

              <TouchableHighlight style={localStyles.buttons}
              onPress={() => this.props._begin_TrickScene("POPSHUV_FS_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
               frontside Pop Shuv-it
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
      height : '50%',
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

module.exports = PopShuv_fs_Menu;

