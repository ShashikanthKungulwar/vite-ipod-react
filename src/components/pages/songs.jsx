import React from "react";
import Anime from "../../assets/images/Anime.jpg"
import MusicPlayer from "./MusicPlayer";
export default class Songs extends React.Component
{
    // function which returns the list of music files
    callMusicList(idx)
    {
        return<>
        <div style={{width:"50%",height:"100%",zIndex:1000,position:"absolute",backgroundColor:"white",left:"0px"}}>
                <h2>Songs</h2>
                <ul>
                    <li className={(idx===0)?"active":""}>
                        
                        Favorites
                        <span style={{color:"white"}}>{">"}</span>
                    </li>
                    <li  className={(idx===1)?"active":""}>
                        All songs
                        <span style={{color:"white"}}>{">"}</span>
                    </li>
                    <li  className={(idx===2)?"active":""}>
                        LoFi
                        <span style={{color:"white"}}>{">"}</span>
                    </li>
                    <li  className={(idx===3)?"active":""}>
                        Gym
                        <span style={{color:"white"}}>{">"}</span>
                    </li>
                </ul>
            </div>
            <div style={{height:"100%",width:"100%",zIndex:999,position:"absolute",top:"0px"}}>
            <img src={Anime} alt="wall" />
            </div>
        </>
    }
    
    render()
    {   
        const {idx,bool}=this.props;
        return<>
            {(bool)?<MusicPlayer />:this.callMusicList(idx)}
        </>
    }
}