import { Component } from "react";
import Controler from "./Controler";
import Display from "./Display.jsx";

import ZingTouch from 'zingtouch';//library in js to handle some geustures 

export default class Ipod extends Component {
  constructor() {
    super();
    this.state = {
      idx: 0,//menu active location
      idx2:0,//active location for songs menu
      currentAng: 0,//the angle to store from the controller
      bool:false,//it is the boolean value for decision of displaying menu or other components in display based on idx
      bool2:false//it is the boolean value for decision of displaying songs menu or songs in display based on idx
    }
  }

  // fucntion to handle the middle circular button in controller
  handleClick = () => {
    this.setState({
      bool:true
    })
    if(this.state.bool)
    {
      this.setState({
        bool2:true
      })
    }
  }


  // Menu button handling function
  callMenu=()=>{
    this.setState({
      bool:false,
      bool2:false
    })
  }

  // fuction to handle the rotaion and changing the idx and sidx values
  handleRotate = (event) => {
    const ang = event.detail.angle;
    if(!this.state.bool)
    {
    if (Math.abs(ang - this.state.currentAng) > 20) {
      let idx = this.state.idx;
      if (event.detail.distanceFromLast > 0) {
        idx = (idx + 1) % 4;
      }
      else if (event.detail.distanceFromLast < 0) {
        idx = (idx - 1)
        if (idx < 0) {
          idx = 3;
        }
      }
      this.setState({
        currentAng: ang,
        idx
      })
    }
  }
    else if(!this.state.bool2){
    if (Math.abs(ang - this.state.currentAng) > 20) {
      let idx2 = this.state.idx2;
      if (event.detail.distanceFromLast > 0) {
        idx2 = (idx2 + 1) % 4;
      }
      else if (event.detail.distanceFromLast < 0) {
        idx2 = (idx2 - 1)
        if (idx2 < 0) {
          idx2 = 3;
        }
      }
      this.setState({
        currentAng: ang,
        idx2
      })
    }
  }
  }



  render() {
    return (
      <div className="container">
        <div className="ipod" id="ipod">
          <Display idx={this.state.idx} bool={this.state.bool} idx2={this.state.idx2} bool2={this.state.bool2}/>
          <Controler callMenu={this.callMenu}/>
        </div>

        <div className="ipod-reflection">
        <Controler/></div> 
      </div>
    );
  }


  componentDidMount() {
    // zing touch registration for regions and actions
    const myRegion = ZingTouch.Region(document.getElementById("control"));
    myRegion.bind(document.getElementById("division-button"), 'rotate', this.handleRotate);
    const region2=ZingTouch.Region(document.getElementById('division-button'));
    region2.bind(document.getElementById('division-button'),'tap',this.handleClick);
  }
}
