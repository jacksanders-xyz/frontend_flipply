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
export default class PopShuv_bs_Menu extends Component {
    constructor() {
      super();
    }
    
    render() {
        return this._displayPOPSHUV_BS_MENU();
    }

  _displayPOPSHUV_BS_MENU() {
    return (
        <ScrollView style={localStyles.scrollFlex} contentContainerStyle={{ flexGrow: 1 }} >
          <View style={{height: 2300}}>
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
                Backside Pop Shuv-its
                </Text>

                <Text style={localStyles.descriptiveText}> A beautiful milestone...
                {"\n\n"} You've conquered the ollie, perhaps you can even do it
                while moving. But now you're ready for your first flip trick. 
                {"\n\n"}PRE-REQUISITES:
                An Ollie... even better if you can do one while moving. Perhaps even a backside 180.
                {"\n\n"}
                STEPS: 
                {"\n\n"} Foot position: 
                front foot is right before the bolts, maybe turned a little bit towards the nose. 
                back foot is about where it was for the Ollie, except nudged forward a bit so that your toes are hanging off a bit.
                {"\n"}
                STEPS:{"\n\n"}
                1. Pop with flick {"\n\n"}  
                Where things start to get different from the Ollie is the role of
                your back foot... Your back foot is going to pops down you are also
                going to flick it behind you. This will generate the movement which
                spins the board horizontally.
                {"\n\n"}
                2.Front foot movement {"\n\n"} Just as you back foot has gained
                a new role, so has your front foot: As you drag it upwards (just
                as you would in an Ollie) you will also keep it more flat. When
                doing Just an Ollie, you have the option to "steeze it out" by
                really rolling your front ankle up the board as it goes out. With
                the Pop Shuv, the front foot needs to be a bit flatter, as it will
                act as a horizontal point of rotation. Think of it as fulcrum, which
                your board will rotate around. This is very Important as It will
                control the rotation AND allow you to catch the board with your
                front foot as it comes around. 
                {"\n\n"}
                3.Level Out {"\n\n"} 

                Leveling out in this case means less "going forward with your front
                foot" and more picking up your back foot to meet the same level as
                your front. Don't get me wrong, your front goes forward to level out
                a bit... But you won't feel it as much. Remember, whatever flip
                trick your doing, the Ollie is always there and you need keep in
                mind the ollie fundamentals. It's spooky the amount of tricks where
                if you just think "Ollie first", you will do them. 
                {"\n\n"}
                4. Catch that board and land {"\n\n"} Click below to take a peek!
                   {"\n\n"} 
                </Text>
              </View>

              <TouchableHighlight style={localStyles.buttons}
              onPress={() => this.props._begin_TrickScene("POPSHUV_BS_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}> backside Pop Shuv-it </Text>
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
      marginRight: 7,
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

module.exports = PopShuv_bs_Menu;

