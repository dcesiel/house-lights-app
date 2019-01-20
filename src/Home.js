import React from 'react';
import {Room} from "./Room";
import {LightSwitch} from "./LightSwitch";
import PropTypes from 'prop-types';

export const Home = ({ homeName = "Home" }) => (
    <div className={'home-container'}>
        <div className={'title'}>{homeName}</div>
        <LightSwitch on={false} containerCssClass={'master-switch'}/>
        <Room lightOn={false} roomName={'Room 1'} containerCssClass={"room-1"}/>
        <Room lightOn={true} roomName={'Room 2'} containerCssClass={"room-2"}/>
        <Room lightOn={true} roomName={'Room 3'} containerCssClass={"room-3"}/>
        <LightSwitch on={false} containerCssClass={'room-1-switch'}/>
        <LightSwitch on={true} containerCssClass={'room-2-switch'}/>
        <LightSwitch on={true} containerCssClass={'room-3-switch'}/>
    </div>
)

Home.propTypes = {
    homeName: PropTypes.string
}