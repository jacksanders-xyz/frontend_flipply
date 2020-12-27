/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import OllieMenu from './js/res/menus/OllieMenu';
import { AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';


// Sets the default scene you want for AR and VR
const ARTrickScene = require('./js/res/scenes/ollieSceneAR');
//
const signInMenu = "signInMenu";
const AR_NAVIGATOR_TYPE = "AR";
const trickMenu = "trickMenu";
const OLLIE_MENU = "OLLIE_MENU";


const defaultNavigatorType = signInMenu

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
    }
    this._userSignInMenu = this._userSignInMenu.bind(this);
    this._userSignedIn= this._userSignedIn.bind(this);
    this._trickMenuSelector = this._trickMenuSelector.bind(this);
//
    this._init_OllieMenu = this._init_OllieMenu.bind(this);
    this._init_TrickScene = this._init_TrickScene.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }
  // The top level switch, that says "has a button been pressed? which one?" based on the
  // state of navigatorType
  render() {
    if (this.state.navigatorType == signInMenu) {
      return this._userSignInMenu();
    } else if (this.state.navigatorType == trickMenu) {
      return this._trickMenuSelector();
    } else if (this.state.navigatorType == OLLIE_MENU) {
      return this._init_OllieMenu();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._init_TrickScene();
    }
}

  // THE MAIN MENU, (returns js for the main menu) 
  _trickMenuSelector() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
        <ScrollView>
       
         <Text style={localStyles.titleText}>
          Welcome to FLIPPLY, 
          </Text>

         <Text style={localStyles.titleText}>
           Pick a trick
          </Text>

          <Text style={localStyles.titleText}>
          Beginner
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._begin_TrickMenu(OLLIE_MENU)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Ollie 
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          backside pop shuv-it
          </Text>
          </TouchableHighlight>


          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          frontside pop shuv-it
          </Text>
          </TouchableHighlight>


          <Text style={localStyles.titleText}>
          Intermediate
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Kickflip
          </Text>
          </TouchableHighlight>


          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Heelflip 
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Varial flip
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Varial Heel-flip
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Hard flip
          </Text>
          </TouchableHighlight>

          <Text style={localStyles.titleText}>
          Advanced
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Backside 360 Shuv-it
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          360 flip
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Frontside 360 shuv-it
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Laser flip
          </Text>
          </TouchableHighlight>

        </ScrollView>
        </View>
      </View>
    );
  }


  _userSignInMenu() {
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>
          Welcome to flipply, please Sign in: 
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._userSignedIn()}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Sign in 
          </Text>
          </TouchableHighlight>

        </View>
      </View>

    );
  }
  _userSignedIn() {
    return () => {
      this.setState({ navigatorType: trickMenu  })
    }
  }

  _begin_TrickMenu(A_TRICKS_MENU) {
    return () => {
      this.setState({ navigatorType: A_TRICKS_MENU })
    } 
  }

// MENUS
  _init_OllieMenu() {
    return (
      <View style={localStyles.outer}>
      <OllieMenu _begin_TrickScene={this._begin_TrickScene()} />
      </View>
    );
  }
// Returns the ViroARSceneNavigator which will start the AR experience

_begin_TrickScene() {
    return () => {
      this.setState({ navigatorType: AR_NAVIGATOR_TYPE  })
    } 
  }

_init_TrickScene() {
    return (
      <ViroARSceneNavigator initialScene={{scene: ARTrickScene}} />
    );
  }
  

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons

  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }

  // This function "exits" Viro by setting the navigatorType to signInMenu.
  _exitViro() {
    this.setState({
      navigatorType : signInMenu
    })
  }
}

const localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
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
  }
});

module.exports = ViroSample
