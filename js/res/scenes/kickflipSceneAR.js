'use strict';

import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';


import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  ViroButton,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroConstants,
  ViroAnimations,
} from 'react-viro';


export default class kickflipSceneAR extends Component {
  
  constructor() {
    super();

    // Set initial state here, the state where the AR text lives, 
    this.state = {
      text : "Initializing AR...",
      flipMoment: "roll",
      flipping: false, 
    };
    this._onInitialized = this._onInitialized.bind(this);
  }
  

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
      <ViroAmbientLight color={"#aaaaaa"} />
      <ViroNode position={[0.5,-0.2,-1]} dragType="FixedToWorld" onDrag={()=>{}} >
      <Viro3DObject 
      source={require('../archive/Skateboard.gltf')}
      resources={[
        require('../archive/Skateboard_BaseColor.png'),
        require('../archive/Skateboard.bin')
      ]}
      onClick={() => this.trickStarter() }
      position={[0.5, -0.2, -1.0]}
      scale={[0.1, 0.1, 0.1]}
      animation={{name: this.state.flipMoment,
          run: this.state.flipping,
          onFinish: () => this.trickStateManager()
      }}           
      type="GLTF"
      />
      </ViroNode>
      </ViroARScene>
    );
  }

trickStarter = () => {
  this.setState({ flipping: true})
}


trickStateManager = () => {
    if (this.state.flipMoment == "roll") {
      return this.setState({ flipMoment: "prePop"})
    } else if (this.state.flipMoment == "prePop") {
      return this.setState({ flipMoment: "pop"})
    } else if (this.state.flipMoment == "pop") {
      return this.setState({ flipMoment: "postPop" })
    } else if (this.state.flipMoment == "postPop") {
      return this.setState({ flipMoment: "levelOut" })
    } else if (this.state.flipMoment == "levelOut") {
      return this.setState({ flipMoment: "land"})
    } else if (this.state.flipMoment == "land") {
      return this.setState({ flipMoment: "rollAway"})
    } else if (this.state.flipMoment == "rollAway") {
      return this.setState({ flipping: false, flipMoment: "roll" })
    } 

}




  // _onInitialized handles TRACKING 
  //
  //
  // THIS IS FUNCTION will be triggered when everything is good to go! 
  // It manages when things are setting up
  // you pass it into the <ViroARScene> tag, it is the onTrackingUpdated attribute
  // 
  // all your jsx have access to this!!!!
  // so if you make inner components, you give them the state of whether or not you're tracking
  // or not, and can even give a function to handle if shit goes crayz (else if) 
  // When everything is the steady and ready to render it sets the STATE of text
  // to "jack".... your text jsx component then grabs it!
 
_onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "getting ready to shred..."
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

//
const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});



//
ViroAnimations.registerAnimations({
  roll: {
    properties: {
      positionX: "-=0.3",
    },
    duration: 200, //.5 seconds
  },
  prePop: {
    properties: {
      rotateZ: "-=45",
      positionY: "+=0.18",
      positionX: "-=0.1",
    },
    duration: 200, //.5 seconds
  },
  pop: {
    properties: {
      rotateZ: "-=5",
      positionY: "+=0.3",
      positionX: "-=0.1",
    },
    duration: 200, //.5 seconds
  },
  postPop: {
    properties: {
      rotateZ: "+=35", 
      positionX: "-=0.3",
    },
    duration: 200, //.5 seconds
  },
  levelOut: {
    properties: {
      rotateZ: "+=15", 
      positionX: "-=0.3",
    },
    duration: 200, //.5 seconds
  },
  land: {
    properties: {
      rotateZ: "-=5", 
      positionY: "-=0.48",
      positionX: "-=0.4",
    },
    duration: 200, //.5 seconds
  },
  rollAway: {
    properties: {
      rotateZ: "+=5", 
      positionX: "-=0.4",
    },
    duration: 200, //.5 seconds
  },
});



module.exports = kickflipSceneAR;
