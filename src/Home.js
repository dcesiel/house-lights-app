import React from 'react';
import {Room} from "./Room";
import {LightSwitch} from "./LightSwitch";
import PropTypes from 'prop-types';

export const Home = ({ homeName = "Home", masterSwitchOn, kitchenLightOn, livingRoomLightOn,
                         bedroomLightOn, handleSetMasterSwitch, handleSetKitchenSwitch,
                         handleSetLivingRoomSwitch, handleSetBedroomSwitch }) => {
    return (
        <div className={'home-container'}>
            <div className={'title'}>{homeName}</div>
            <LightSwitch on={masterSwitchOn} containerCssClass={'master-switch'} handleToggle={handleSetMasterSwitch}/>
            <Room lightOn={kitchenLightOn} roomName={'Kitchen'} containerCssClass={"room-1"}/>
            <Room lightOn={livingRoomLightOn} roomName={'Living Room'} containerCssClass={"room-2"}/>
            <Room lightOn={bedroomLightOn} roomName={'Bedroom'} containerCssClass={"room-3"}/>
            <LightSwitch on={kitchenLightOn} containerCssClass={'room-1-switch'} handleToggle={handleSetKitchenSwitch}/>
            <LightSwitch on={livingRoomLightOn} containerCssClass={'room-2-switch'} handleToggle={handleSetLivingRoomSwitch}/>
            <LightSwitch on={bedroomLightOn} containerCssClass={'room-3-switch'} handleToggle={handleSetBedroomSwitch}/>
        </div>
    )
}

Home.propTypes = {
    homeName: PropTypes.string
}