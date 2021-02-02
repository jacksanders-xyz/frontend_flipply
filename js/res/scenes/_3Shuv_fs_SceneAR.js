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


export default class _3Shuv_fs_SceneAR extends Component {
  
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
      rotateY: "-=20",
      positionY: "+=0.18",
      positionX: "-=0.1",
    },
    duration: 200, //.5 seconds
  },
  pop: {
    properties: {
      rotateZ: "-=5",
      rotateY: "-=120",
      positionY: "+=0.3",
      positionX: "-=0.1",
    },
    duration: 200, //.5 seconds
  },
  postPop: {
    properties: {
      rotateZ: "+=35", 
      rotateY: "-=115",
      positionX: "-=0.3",
    },
    duration: 200, //.5 seconds
  },
  levelOut: {
    properties: {
      rotateZ: "+=15", 
      rotateY: "-=105",
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



module.exports = _3Shuv_fs_SceneAR;
