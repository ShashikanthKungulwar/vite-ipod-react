import {Component} from 'react';
import settings from "../../assets/images/settings.gif";
export default class Settings extends Component {
    render(){
        return<>
            <span style={{textAlign:'center'}}>  <img src={settings} alt="Settings" height={100} width={100}/> <br />
            <h4> Settings</h4>
            </span>
        </>
    }
}