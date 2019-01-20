import React from 'react';
import PropTypes from 'prop-types';

export const Room = ({ lightOn = false, roomName, containerCssClass }) => (
    <div className={containerCssClass}>
        <div className={lightOn ? 'light-on' : 'light-off'}>
            { roomName }
        </div>
    </div>
);

Room.propTypes = {
    lightOn: PropTypes.bool,
    roomName: PropTypes.string.required,
    roomCssClass: PropTypes.string
}