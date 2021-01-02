'use strict';
import React, { useState } from 'react'
import { 
  AppRegistry,
  Text,
  Image,
  View,
  Picker,
  TextInput,
  StatusBar,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
  const UserSignUpMenu = (props) => {
 

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [stance, setStance] = useState('')
 
  // for the button:
  const handleSubmit = () => {
    props.signUp_USER_()
  }
 const handleUsernameChange = (text) => setUsername(text.target.value);
 const handlePasswordChange = (text) => setPassword(text.target.value);
  
  return (
    <View style={localStyles.flex}>

      <View style={localStyles.topMenu}>
          <TouchableOpacity 
            style={localStyles.flex}
            activeOpacity={.5} 
            onPress={() => props._back_toMainMenu()}
         >
          <Image 
            style={localStyles.topMenu}
            source={require('../archive/icon_left_w.png')}        
          />
          </TouchableOpacity>
      </View>
    <View style={localStyles.inner}>
      <View style={localStyles.formBox}>
        <TextInput style={localStyles.textInput} value={username} placeholder="Username" onChange={handleUsernameChange}/>
      </View>
      <View style={localStyles.formBox}>
        <TextInput type="password" style={localStyles.textInput} value={password} placeholder="Password" onChange={handlePasswordChange}/>
      </View>
    
    <View style={localStyles.outsidePickerBox}>
    <View style={localStyles.pickerBox}>
    <Picker 
    selectedValue={stance}
    style={{ height: 44 }}
    itemStyle={{ height: 44}}
    onValueChange={(itemValue, itemIndex) => setStance(itemValue)}
    >
    <Picker.Item color="white" label='select a stance...' value=''/>
    <Picker.Item color="white" label='regular' value='regular'/>
    <Picker.Item color="white" label='goofy' value='goofy'/>
    </Picker>
    </View>
    </View>
      
      <Text style={localStyles.titleText}>SIGN UP MENU</Text>
        <TouchableHighlight style={localStyles.buttons}
        onPress={() => handleSubmit()}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        Sign up 
        </Text>
      </TouchableHighlight>
    </View>
    </View>
  )
}
 
    // <Picker style={localStyles.pickerBox} placeholder="Stance" />
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
   formBox: {
      flexDirection: 'row',
      alignItems:'center',
    },
    outsidePickerBox: {
      width: '95%',
      flexDirection: 'row',
      alignItems:'center',
    },
    pickerBox: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 1,
      borderWidth: 1,
      marginBottom: 10,
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
    textInput: {
      flex: 1,
      color: '#fff',
      borderColor: 'gray',
      borderWidth: 1,
      padding: 15,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
  });
export default UserSignUpMenu;
