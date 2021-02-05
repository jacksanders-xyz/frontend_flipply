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
export default class _3Shuv_fs_Menu extends Component {
    constructor() {
      super();
    }
    
    render() {
        return this._display3SHUV_FS_MENU();
    }

  _display3SHUV_FS_MENU() {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
          <View style={{height: 500}}>
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
                Frontside 3Shuv
                </Text>

                <Text style={localStyles.descriptiveText}>
                To be honest, I cannot do this trick...I have never done this trick so I am not gonna pretend to offer advice. But I can render it in AR!
                </Text>

              </View>

              <TouchableHighlight style={localStyles.buttons}
              onPress={() => this.props._begin_TrickScene("_3SHUV_FS_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
              front side 3shuv
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
      height : 108,
      width : '40%',
      marginTop: 30,
      marginBottom: 10,
    },
  });

module.exports = _3Shuv_fs_Menu;

