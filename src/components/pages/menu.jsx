import React from "react";
import Anime from "../../assets/images/Anime.jpg"
export default class Menu extends React.Component
{
    
    
    render()
    {   
        const {idx}=this.props;
        return<>
            <div style={{width:"50%",height:"100%",zIndex:1000,position:"absolute",backgroundColor:"white",left:"0px"}}>
                <h2>Ipod</h2>
                <ul>
                    <li className={(idx===0)?"active":""} >
                        Cover Flow
                        <span style={{color:"white"}}>{">"}</span>
                    </li>
                    <li className={(idx===1)?"active":""}>
                        Music
                        <span style={{color:"white"}}>{">"}</span>
                    </li>
                    <li className={(idx===2)?"active":""}>
                        Games
                        <span style={{color:"white"}}>{">"}</span>
                    </li>
                    <li className={(idx===3)?"active":""}>
                        settings
                        <span style={{color:"white"}}>{">"}</span>
                    </li>
                </ul>
            </div>
            <div style={{height:"100%",width:"100%",zIndex:999,position:"absolute",top:"0px"}}>
            <img src={Anime} alt="wall" />
            </div>
        </>
    }
}