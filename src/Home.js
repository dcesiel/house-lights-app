import React from 'react';
import {Room} from "./Room";
import {LightSwitch} from "./LightSwitch";
import PropTypes from 'prop-types';

export const Home = ({ homeName = "Home" }) => (
    <div className={'home-container'}>
        <div className={'title'}>{homeName}</div>
        <LightSwitch on={false} containerCssClass={'master-switch'}/>
        <Room lightOn={false} roomName={'Kitchen'} containerCssClass={"room-1"}/>
        <Room lightOn={true} roomName={'Living Room'} containerCssClass={"room-2"}/>
        <Room lightOn={true} roomName={'Bedroom'} containerCssClass={"room-3"}/>
        <LightSwitch on={false} containerCssClass={'room-1-switch'}/>
        <LightSwitch on={true} containerCssClass={'room-2-switch'}/>
        <LightSwitch on={true} containerCssClass={'room-3-switch'}/>
    </div>
)

Home.propTypes = {
    homeName: PropTypes.string
}