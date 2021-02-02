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


export default class _360flipSceneAR extends Component {
  
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
      return this.setState({ flipMoment: "rollAway" })
    } else if (this.state.flipMoment == "rollAway") {
      return this.setState({ flipping: false, flipMoment: "roll" })
    } 

}
 




  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      return null 
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}
// this.trickStarter()

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
      positionX: "-=0.40",
    },
    duration: 400, //.5 seconds
  },
  prePop: {
    properties: {
      rotateZ: "-=75",
      rotateY: "+=60",
      rotateX: "-=40",
      positionY: "+=0.15",
      positionX: "-=0.05",
      positionZ: "-=0.04"
    },
    duration: 200, //.5 seconds
  },
  pop: {
    properties: {
      rotateZ: "+=80",
      rotateY: "+=80",
      rotateX: "-=100",
      positionY: "+=0.2",
      positionX: "-=0.05",
      positionZ: "-=0.06"
    },
    duration: 200, //.5 seconds
  },
  postPop: {
    properties: {
      rotateZ: "-=15",
      rotateY: "+=80",
      rotateX: "-=80",
      positionY: "+=0.08",
      positionX: "-=0.26",
    },
    duration: 200, //.5 seconds
  },
  levelOut: {
    properties: {
      rotateZ: "+=10",
      rotateY: "+=75",
      rotateX: "-=70",
      positionX: "-=0.16",
      positionY: "-=0.09",
    },
    duration: 200, //.5 seconds
  },
  land: {
    properties: {
      rotateY: "+=65",
      rotateX: "-=70",
      positionY: "-=0.34",
      positionX: "-=0.18",
    },
    duration: 200, //.5 seconds
  },
  rollAway: {
    properties: {
      positionX: "-=0.4",
    },
      duration: 400, //.5 seconds
  },
});



module.exports = _360flipSceneAR;
