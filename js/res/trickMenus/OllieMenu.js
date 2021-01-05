  import React, { Component } from 'react';
  import { AppRegistry,
    Text,
    TouchableOpacity,
    Image,
    View,
    StyleSheet,
    SectionList,
    PixelRatio,
    TouchableHighlight,
    ScrollView,
  } from 'react-native';

  import {
    ViroARSceneNavigator,
  } from 'react-viro';
  export default class OllieMenu extends Component {
    constructor() {
      super();
    }
    

    render() {
      return this._displayOLLIE_MENU();
    }
  
  _displayOLLIE_MENU() {
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
                ...The Ollie 
                </Text>

                <Text style={localStyles.descriptiveText}>
                You can always, ALWAYS work on your Ollie... {"\n\n"} Whether you are a seasoned "well ollied machine" or fresh off the noob train,
                working on your Ollie will always make you a better skater. A SNAPPIER, more EFFORTLESS, More CONFIDENT Ollie will make every trick in your arsenel 
                that much smoother. If you can only learn ONE skateboard trick, The Ollie is the one to go with! You can ollie up stuff, down stuff, through stuff
                into stuff, out of stuff, over stuff... The possibilities are endless and you will NEVER get tired of it. Your favorite skaters have mature, well refined
                Ollies and STILL have fun (and most importantly LOOK COOL) doing a simple Ollie over things. 
                {"\n\n"}
                Foot position, back foot is right in the curve of the tail with your weight focused on your toes and your front foot is about 3/4 
                of the way up the board.{"\n"}
                Test steps:{"\n\n"}
                1. Pop the tail {"\n\n"}
                Slam the back tail against the ground, even though this sounds simple, it is a movement you will need to practice over and over again.
                At first you will accomplish this by just pushing your back foot down hard, almost jumping off your back foot. As it becomes 
                more refined it will feel less like you're "pushing down hard with your left" but more "shifting the weight of your body backwards as your foot snaps down." 
                This will become more and more effortless, and coalesce into one smooth motion. {"\n\n"}
                2.Front foot movement {"\n\n"} 
                As the tail goes down the front foot (while staying perpendicular to the board will slide UP and forward in one smooth motion. 
                The foot should be loose as it does this, almost as if you are "rolling your ankle up the board"{"\n\n"}
                3.Level Out{"\n\n"}
                You have been going upwards until this moment, but you're now at the top of your Ollie 
                (When your front foot has slide all the way to the top your board should be greater than 45 degrees)... At this moment
                your back foot shoould be coming up as your front foot kicks forward to level out the skateboard in mid air. 
                4. Bend your knees and get ready for impact! {"\n\n"}
                Click below to see the Ollie in Augmented reality! 
                </Text>

              </View>

              <TouchableHighlight style={localStyles.buttons}
              onPress={() => this.props._begin_TrickScene("OLLIE_SCENE")}
              underlayColor={'#68a0ff'} >
              <Text style={localStyles.buttonText}>
              Ollie
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
      width: 150,
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

  module.exports = OllieMenu;

