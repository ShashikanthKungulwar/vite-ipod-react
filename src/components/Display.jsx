import { Component } from "react";
import Games from "./pages/games";
import CoverFlow from "./pages/coverflow";
import Menu from "./pages/menu";
import Settings from "./pages/settings";
import Songs from "./pages/songs";
export default class Display extends Component {
  // funciton which returns the content based on bool and idx value
  handleSending=()=>{
    switch(this.props.idx)
    {
      case 0:
        return <CoverFlow />;
      case 1:
        return <Songs idx={this.props.idx2} bool={this.props.bool2}/>
      case 2:
        console.log("check");
        return <Games />;
      case 3:
        return <Settings />
      default:
        break;
    }
  }

  render() {
    const {idx,bool}=this.props;
    return <div className="display">
    {(bool)?this.handleSending():<Menu idx={idx}/>}
    </div>;
  }
}
