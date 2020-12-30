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
const ARTrickScene = require('../scenes/ollieSceneAR');
//
const OLLIE_MENU = "OLLIE_MENU";
const OLLIE_INIT  = "OLLIE_INIT";
const defaultNavigatorType = OLLIE_MENU;

//



export default class varial_heelflipMenu extends Component {
    constructor() {
      super();
  
      this.state = {
        navigatorType : defaultNavigatorType,
      }
      this._exitViro = this._exitViro.bind(this);
    }
    // The top level switch, that says "has a button been pressed? which one?" based on the
    // state of navigatorType
    render() {
      if (this.state.navigatorType == OLLIE_MENU) {
        return this._displayOLLIE_MENU();
      } else if (this.state.navigatorType == OLLIE_INIT) {
        return null 
      }
    }


  _displayOLLIE_MENU() {
    return (
        <View style={localStyles.flex}>
          <View style={localStyles.topMenu}>
          <TouchableOpacity 
            style={localStyles.flex}
            activeOpacity={.5} 
            onPress={() => this.props._back_toMainTrickMenu()}
         >
          <Image 
            style={localStyles.topMenu}
            source={require('../archive/icon_left_w.png')}        
          />
          </TouchableOpacity>
          </View>
          <View style={localStyles.outer}>
            <View style={localStyles.inner}>
              <Text style={localStyles.titleText}>
              Hey you're at the OllieMenu
              </Text>

              <TouchableHighlight style={localStyles.buttons}
              onPress={() => this.props._begin_TrickScene("OLLIE_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
              AR Ollie
              </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

    )
}

  // This function "exits" Viro by setting the navigatorType to signInMenu.
    _exitViro() {
      this.setState({
        navigatorType : signInMenu
      })
    }
  }
  
  const localStyles = StyleSheet.create({
    flex : {
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
      backgroundColor: "black",
    },
    titleText: {
      paddingTop: 30,
      paddingBottom: 20,
      color:'#fff',
      textAlign:'center',
      fontSize : 25
    },
    buttonText: {
      color:'#fff',
      textAlign:'center',
      fontSize : 20
    },
    buttons : {
      height: 80,
      width: 150,
      paddingTop:20,
      paddingBottom:20,
      marginTop: 10,
      alignSelf: 'center',
      marginBottom: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    exitButton : {
      height: 50,
      width: 100,
      paddingTop:10,
      paddingBottom:10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    topMenu: {
      height : '30%',
      width : '40%',
      marginTop: 10,
      top : 0,
    },
  });
module.exports = varial_heelflipMenu;

