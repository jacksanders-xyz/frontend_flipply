import React, { Component } from 'react';
import { 
  AppRegistry,
  Text,
  Image,
  View,
  StatusBar,
  StyleSheet,
  ImageBackground,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';

// MenuComponents: 
import UserSignInMenu from './js/res/UserMenus/UserSignInMenu';
import UserSignUpMenu from './js/res/UserMenus/UserSignUpMenu';



//TrickMenuComponents:
import OllieMenu from './js/res/trickMenus/OllieMenu';
import PopShuv_bs_Menu from './js/res/trickMenus/PopShuv_bs_Menu';
import KickflipMenu from './js/res/trickMenus/KickflipMenu';
import _360flipMenu from './js/res/trickMenus/_360flipMenu';

// Urls
const baseUrl = 'http://localhost:8000/'
const usersUrl = `${baseUrl}users/` 
const loginUrl = `${baseUrl}login/` 
// IMAGE URI's
const boardImage = {uri: "https://pngimg.com/uploads/skateboard/skateboard_PNG11709.png"}
const Image2 = {uri: "https://www.nikesb.com/assets/imager/uploads/7035/nikesb-fpar-keyakiIke_NollieHalfCabFlip_bd624c85e984eb4b3e5bbc5eb4b33f00.jpg"}
// Menu/navigator state
const mainUserHomepage = "mainUserHomepage";
const signInMenu = "signInMenu";
const signUpMenu = "signUpMenu";
const trickMenu = "trickMenu";
const trick_menu_nav = "A Tricks Menu Is on"  
const trick_scene_nav = "A Trick Scene Is happening"  
const defaultNavigatorType = mainUserHomepage
// trick_scene_nav
// Trick menu Navigator State
const OLLIE_MENU = "OLLIE_MENU";
const POPSHUV_BS_MENU = "POPSHUV_BS_MENU";
const KICKFLIP_MENU = "KICKFLIP_MENU";
const _360FLIP_MENU = "_360FLIP_MENU";
const defaultTrickMenu = '' 
// _360FLIP_MENU
//Trick Scene state starts as an empty string
const defaultTrickScene = ''
// "_360FLIP_SCENE"
export default class ViroSample extends Component {
  constructor() {
    super();
    this.state = {
      topNavigatorType : defaultNavigatorType,
      lastClickedTrickMenu : defaultTrickMenu,
      lastClickedTrickScene : defaultTrickScene,
      user: {},
      error: ''
    }
         this._userSignInMenu = this._userSignInMenu.bind(this);
         this._begin_UserSignIn_MENU = this._begin_UserSignIn_MENU.bind(this);
    // login_user will go here
         this._init_UserSignIn_MENU = this._init_UserSignIn_MENU.bind(this);
         this._begin_UserSignUp_MENU = this._begin_UserSignUp_MENU.bind(this);
         this.signUp_USER_ = this.signUp_USER_.bind(this);
         this._init_UserSignUp_MENU = this._init_UserSignUp_MENU.bind(this);
         this._userSignedIn= this._userSignedIn.bind(this);
         this._userSignedIn= this._userSignedIn.bind(this);
         this._trickMenuSelector = this._trickMenuSelector.bind(this);
         this._begin_TrickMenu = this._begin_TrickMenu.bind(this);
         this._init_TrickMenu = this._init_TrickMenu.bind(this);
         this._begin_TrickScene = this._begin_TrickScene.bind(this);
         this._init_TrickScene = this._init_TrickScene.bind(this);
         this._back_toTricksMenu = this._back_toTricksMenu.bind(this);
         this._backARROW_scene = this._backARROW_scene.bind(this);
         this._back_toMainTrickMenu = this._back_toMainTrickMenu.bind(this);

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
    } else if (this.state.topNavigatorType == trick_scene_nav) {
       return this._init_TrickScene(this.state.lastClickedTrickScene);
    }
}
  


  _userSignInMenu() {
    return (
      <ImageBackground source={require('./js/res/photos/kickflip.jpg')} style={localStyles.backImage} imageStyle={{ opacity: 0.7 }}>
          <Text style={localStyles.flipplyText}>
          flipply.
          </Text>
          <TouchableHighlight style={localStyles.slimButtons}
          onPress={this._begin_UserSignIn_MENU()}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.slimButtonText}>
          sign in 
          </Text>
          </TouchableHighlight>
          
          <TouchableHighlight style={localStyles.slimButtons}
          onPress={this._begin_UserSignUp_MENU()}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.slimButtonText}>
          sign up
          </Text>
          </TouchableHighlight>
       </ImageBackground> 
    );
  }

  _begin_UserSignIn_MENU() {
      return () => { this.setState({
        topNavigatorType: signInMenu 
      })
    }
  }
 
  // login_USER_ = (username, password) => {
  //     fetch(loginUrl, {
  //       method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"  
  //       },
  //       body: JSON.stringify({
  //         user: {
  //           username: username,
  //           password: password
  //         }
  //       })
  //     })
  //     .then(response => response.json())
  //     .then(result => {
  //     if(result.token) {
  //       this.setState({
  //         user: result.user
  //       })
  //     } else {
  //       this.setState({
  //         error: result
  //       })
  //     }
  //   })
  // }
  
  _init_UserSignIn_MENU() {
    return (
        <UserSignInMenu user={this.state.user}  error={this.state.error} _userSignedIn={this._userSignedIn()} _back_toMainMenu={() => this.setState({ topNavigatorType: defaultNavigatorType}) } />
    ) 
  }

  _begin_UserSignUp_MENU() {
      return () => { this.setState({
        topNavigatorType: signUpMenu 
      })
    }
  }

  signUp_USER_ = () => {
    fetch('http://localhost:8000/users/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"  
      },  
      body: JSON.stringify({
          username: "hey",
          password: "please",
          stance: "goofy",
      })
      }).then(response => response.json())  
        .then(user => this.setState({user}))
        .then(this._userSignedIn())
  }
  


  _init_UserSignUp_MENU() {
    return (
        <UserSignUpMenu signUp_USER_={this.signUp_USER_} _userSignedIn={this._userSignedIn()} _back_toMainMenu={() => this.setState({ topNavigatorType: defaultNavigatorType}) }/>
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
      <ImageBackground source={Image2} style={localStyles.backImage} imageStyle={{ opacity: 0.7 }}>
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
        <ScrollView showsVerticalScrollIndicator={false} >
       
         <Text style={localStyles.flipplyText}>
          flipply 
          </Text>

          <Text style={localStyles.titleText}>
          Beginner:
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._begin_TrickMenu(OLLIE_MENU)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Ollie 
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._begin_TrickMenu(POPSHUV_BS_MENU)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Pop shuv-it
          </Text>
          </TouchableHighlight>


          <TouchableHighlight style={localStyles.buttons}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.longButtonText}>
          frontside {"\n"}Pop shuv-it
          </Text>
          </TouchableHighlight>


          <Text style={localStyles.titleText}>
          Intermediate:
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._begin_TrickMenu(KICKFLIP_MENU)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Kickflip
          </Text>
          </TouchableHighlight>


          <TouchableHighlight style={localStyles.buttons}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Heelflip 
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Varial flip
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Varial Heel
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Hard flip
          </Text>
          </TouchableHighlight>

          <Text style={localStyles.titleText}>
          Advanced:
          </Text>

          <TouchableHighlight style={localStyles.buttons}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.longButtonText}>
          Backside 360 Shuv-it
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          onPress={this._begin_TrickMenu(_360FLIP_MENU)}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          360 flip
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.longButtonText}>
          frontside 360 shuv-it
          </Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
          underlayColor={'#68a0ff'} >
          <Text style={localStyles.buttonText}>
          Laser flip
          </Text>
          </TouchableHighlight>

        </ScrollView>
        </View>
        </View>
       </ImageBackground> 
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
    if (TrickMenu == OLLIE_MENU) { 
      return (
      <View style={localStyles.outer}>
      <OllieMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} _begin_TrickScene={this._begin_TrickScene()} />
      </View>
      );
    } else if (TrickMenu == POPSHUV_BS_MENU) {
      return (
      <View style={localStyles.outer}>
      <PopShuv_bs_Menu _back_toMainTrickMenu={this._back_toMainTrickMenu()} _begin_TrickScene={this._begin_TrickScene()} />
      </View>
      );
    } else if (TrickMenu == KICKFLIP_MENU ) {
      return (
      <View style={localStyles.outer}>
      <KickflipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} _begin_TrickScene={this._begin_TrickScene()} />
      </View>
      );
    } else if (TrickMenu == _360FLIP_MENU ) {
      return (
      <View style={localStyles.outer}>
      <_360flipMenu _back_toMainTrickMenu={this._back_toMainTrickMenu()} _begin_TrickScene={this._begin_TrickScene()} />
      </View>
      );
    }


  }

  _begin_TrickScene(TrickScene) {
    return (TrickScene) => {
      this.setState({ 
        topNavigatorType : trick_scene_nav,
        lastClickedTrickScene : TrickScene
      })
    } 
  }

_init_TrickScene(TrickScene) {
    if (TrickScene == "OLLIE_SCENE") {
      const Ollie_trick_SCENE = require('./js/res/scenes/ollieSceneAR');
      return (
        <View style={localStyles.flex}>
        <StatusBar hidden={false}/>
        <ViroARSceneNavigator initialScene={{scene: Ollie_trick_SCENE}} />
        {this._backARROW_scene()}
        </View>
      );
    } else if (TrickScene == "POPSHUV_BS_SCENE") {
      const PopShuv_bs_trick_SCENE = require('./js/res/scenes/PopShuv_bs_SceneAR');
      return (
        <View style={localStyles.flex}>
        <StatusBar hidden={false}/>
        <ViroARSceneNavigator initialScene={{scene: PopShuv_bs_trick_SCENE}} />
        {this._backARROW_scene()}
        </View>
      );
    } else if (TrickScene == "KICKFLIP_SCENE") {
      const kickflipSceneAR = require('./js/res/scenes/kickflipSceneAR');
      return (
        <View style={localStyles.flex}>
        <StatusBar hidden={false}/>
        <ViroARSceneNavigator initialScene={{scene: kickflipSceneAR}} />
        {this._backARROW_scene()}
        </View>
      );
    } else if (TrickScene == "_360FLIP_SCENE") {
      const _360flipSceneAR = require('./js/res/scenes/_360flipSceneAR');
      return (
        <View style={localStyles.flex}>
        <StatusBar hidden={false}/>
        <ViroARSceneNavigator initialScene={{scene: _360flipSceneAR}} />
        {this._backARROW_scene()}
        </View>
      );
    }



  }


  





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
  },
  inner: {
    flex : 1,
    marginLeft: 20,
    flexDirection: 'column',
    alignItems:'center',
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  flipplyText: {
    paddingTop: 30,
    paddingBottom: 20,
    fontFamily: 'Futura-CondensedExtraBold',
    fontWeight: 'bold',
    color:'black',
    textAlign:'center',
    fontSize : 40 
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    marginTop: 10,
    fontSize : 20
  },
  longButtonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 16
  },
  slimButtonText: {
    color:'#fff',
    textAlign:'center',
    fontSize: 20 
  },
  buttons : {
    height: 100,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'hsla(205, 83%, 16%, 0.67)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  slimButtons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'hsla(205, 83%, 16%, 0.67)',
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
    height : '20%',
    width : '40%',
    position: 'absolute',
    marginTop: 15,
    top : 0,
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: 'hsla(205, 83%, 16%, 0.87)'
  },
});

module.exports = ViroSample
