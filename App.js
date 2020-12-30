/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import { 
  AppRegistry,
  Text,
  Image,
  View,
  StatusBar,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';

// Components: 
import UserSignInMenu from './js/res/UserMenus/UserSignInMenu';
import UserSignUpMenu from './js/res/UserMenus/UserSignUpMenu';



//Menus:
import OllieMenu from './js/res/trickMenus/OllieMenu';

// Scenes:
const OLLIE_trick_SCENE = require('./js/res/scenes/ollieSceneAR');



// Menu/navigator state
const mainUserHomepage = "mainUserHomepage";
const signInMenu = "signInMenu";
const signUpMenu = "signUpMenu";
const trickMenu = "trickMenu";
const trick_menu_nav = "A Tricks Menu Is on"  
const trick_scene_nav = "A Trick Scene Is happening"  
const defaultNavigatorType = mainUserHomepage

// Trick menu Navigators
const OLLIE_MENU = "OLLIE_MENU";
const defaultTrickMenu = ''

//Trick Scene state
const OLLIE_SCENE = "OLLIE_SCENE"
const AR_NAVIGATOR_TYPE = "AR";
const defaultTrickScene = ''


export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      topNavigatorType : defaultNavigatorType,
      lastClickedTrickMenu : defaultTrickMenu,
      lastClickedTrickScene : defaultTrickScene
    }
    this._userSignInMenu = this._userSignInMenu.bind(this);
    this._userSignedIn= this._userSignedIn.bind(this);
    this._trickMenuSelector = this._trickMenuSelector.bind(this);
//
    this._init_TrickScene = this._init_TrickScene.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }
  
  render() {
    if (this.state.topNavigatorType == mainUserHomepage) {
      return this._userSignInMenu();
    } else if ( this.state.topNavigatorType == signInMenu) {
      return this._init_UserSignIn_MENU();
    } else if ( this.state.topNavigatorType == signUpMenu) {
      return this._init_UserSignUp_MENU();
    } else if (this.state.topNavigatorType == trickMenu) {
      return this._trickMenuSelector();
    } else if (this.state.topNavigatorType == trick_menu_nav) {
      return this._init_TrickMenu(this.state.lastClickedTrickMenu);
    } else if ( this.state.topNavigatorType == trick_scene_nav) {
      return this._init_TrickScene(this.state.lastClickedTrickScene);
    }
}

// To make the other buttons just fire ollie, pop next to trick scene nav switch
// this.state.topNavigatorType == AR_NAVIGATOR_TYPE ||
  _userSignInMenu() {
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>
          Welcome to flipply, please Sign in: 
          </Text>
          

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._begin_UserSignIn_MENU()}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Sign in Menu
          </Text>
          </TouchableHighlight>
          
          <TouchableHighlight style={localStyles.buttons}
          onPress={this._begin_UserSignUp_MENU()}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Sign UP Menu
          </Text>
          </TouchableHighlight>

        </View>
      </View>

    );
  }

  _begin_UserSignIn_MENU() {
      return () => { this.setState({
        topNavigatorType: signInMenu 
      })
    }
  }
  
  _init_UserSignIn_MENU() {
    return (
        <UserSignInMenu _userSignedIn={this._userSignedIn()} _back_toMainMenu={() => this.setState({ topNavigatorType: defaultNavigatorType}) } />
    ) 
  }

  _begin_UserSignUp_MENU() {
      return () => { this.setState({
        topNavigatorType: signUpMenu 
      })
    }
  }

  _init_UserSignUp_MENU() {
    return (
        <UserSignUpMenu _userSignedIn={this._userSignedIn()} _back_toMainMenu={() => this.setState({ topNavigatorType: defaultNavigatorType}) }/>
    ) 
  }

_userSignedIn() {
    return () => {
      this.setState({ topNavigatorType: trickMenu  })
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



// MENUS

_begin_TrickMenu(TrickMenu) {
    return () => {
      this.setState({ 
        topNavigatorType: trick_menu_nav,
        lastClickedTrickMenu : TrickMenu
      })
    } 
  }
_init_TrickMenu(TrickMenu) { 
    if (TrickMenu = OLLIE_MENU) { 
      return (
      <View style={localStyles.outer}>
      <OllieMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} _begin_TrickScene={this._begin_TrickScene()} />
      </View>
      );
    }
  }
_begin_TrickScene(TrickScene) {
    return () => {
      this.setState({ 
        topNavigatorType : trick_scene_nav,
        lastClickedTrickScene : TrickScene
      })
    } 
  }

_init_TrickScene(TrickScene) {
      if (TrickScene = OLLIE_SCENE) {
        return (
          <View style={localStyles.flex}>
          <StatusBar hidden={false}/>
          <ViroARSceneNavigator initialScene={{scene: OLLIE_trick_SCENE}} />
          {this._backARROW_scene()}
          </View>
      );
    }
  }
  

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons

  _getExperienceButtonOnPress(topNavigatorType) {
    return () => {
      this.setState({
        topNavigatorType : navigatorType
      })
    }
  }

//out of scene into trick menu
_back_toTricksMenu() {
    return () => {
      this.setState({
        topNavigatorType : trick_menu_nav,
        lastClickedTrickScene : defaultTrickScene 
      })
    }
} 

_backARROW_scene() {
return (
    <View style={localStyles.topMenu}>
      <TouchableOpacity style={localStyles.flex}activeOpacity={.5} onPress={this._back_toTricksMenu()}>
      <Image 
      style={localStyles.topMenu}
      source={require('./js/res/archive/icon_left_w.png')}        
      />
      </TouchableOpacity>
    </View>
  );
}



//out of trick menu to main trick menu
_back_toMainTrickMenu() {
    return () => {
      this.setState({
        topNavigatorType : trickMenu,
        lastClickedTrickMenu : defaultTrickMenu 
      })
    }
} 
  // This function "exits" Viro by setting the topNavigatorType to mainUserHomepage.
  _exitViro() {
      this.setState({
        topNavigatorType : mainUserHomepage
      })
    }
  }

const localStyles = StyleSheet.create({
  flex :{
    flex : 1,
  },
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
  },
    topMenu: {
      position : 'absolute',
      top : 0,
      marginTop: 10,
      height : '30%',
      width : '40%',
  },
});

module.exports = ViroSample
