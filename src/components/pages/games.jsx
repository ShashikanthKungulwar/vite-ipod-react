import {Component} from "react";
import games from "../../assets/images/games.gif"
export default class Games extends Component
{
    render()
    {
        return<>
            <span style={{textAlign:"center"}}><img src={games} alt="Games" height={100} width={100}/><br />
            <h4>Games</h4>
            </span>
        </>
    }
}