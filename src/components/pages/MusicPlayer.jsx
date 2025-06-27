import { Component } from "react";

import music from "../../assets/images/music.gif";

import eco from "../../assets/music/eco.ogg";
import inside from "../../assets/music/inside.mp3";
import lofi from "../../assets/music/lofi.mp3";
import smoke from "../../assets/music/smoke.mp3";


export default class MusicPlayer extends Component {
    constructor()
    {
        super()
        this.state=
        {
            arr:[eco,inside,lofi,smoke],
            idx:0
        }
    }
    render() {
        return<>
            <img src={music} alt="" width={200} height={200}/>
            <audio
                id="aud"
                src={this.state.arr[this.state.idx]}
                autoPlay
                controls
            />
        </>
    }
    componentDidMount()
    {
        document.getElementById("forward").addEventListener('click',()=>{this.setState({idx:(this.state.idx+1)%3})})
        document.getElementById("backward").addEventListener('click',()=>
                                                                    {this.setState({idx:(this.state.idx-1)%3});
                                                                    if(this.state.idx<0)
                                                                    {
                                                                        this.setState({idx:2})
                                                                    }        
                                                                })
    }
}