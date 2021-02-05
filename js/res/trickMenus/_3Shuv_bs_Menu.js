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
export default class _3Shuv_bs_Menu extends Component {
    constructor() {
      super();
    }
    
    render() {
        return this._display3SHUV_BS_MENU();
    }

  _display3SHUV_BS_MENU() {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
          <View style={{height: 1300}}>
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
                Backside 3Shuv 
                </Text>

                <Text style={localStyles.descriptiveText}>
                A 360 degree Pop Shuv-it
                To be honest, I've only done a few of these...I think that the 360 flip is actually easier...{"\n\n"}
                FOOT POSITION:{"\n\n"}
                Back foot same as a backside Pop Shuv-it but more "toe" if that makes sense{"\n\n"}
                Front foot is a bit lower and cocked in than the standerd backside Pop Shuv-it but same general area
                {"\n\n"}
                1. Pop. {"\n\n"}
                The back foot is the sam except scoop and flick as hard as you can{"\n\n"}
                2. Flick{"\n\n"}
                what flick... front foot is fulcrum... preventing the board to flip like a kickflip
                3.Landing {"\n\n"}
                You have to commit and trust that the board will be there when you go to land! This confidence will only grow with time but in the meantime 
                get ready to land 'primo' once or twice before you get the hang of it.{"\n\n"}
                Click below to see the kickflip in augmented reality!

                </Text>

              </View>

              <TouchableHighlight style={localStyles.buttons}
              onPress={() => this.props._begin_TrickScene("_3SHUV_BS_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
              backside 3Shuv
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

module.exports = _3Shuv_bs_Menu;

