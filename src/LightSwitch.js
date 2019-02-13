import React from 'react';
import PropTypes from 'prop-types';
import './LightSwitch.css'

export const LightSwitch = ({ on = false, containerCssClass, handleToggle }) => {
    console.log(handleToggle)
    return (
        <div className={containerCssClass}>
            <label class="switch">
                <input class="switch-input" type="checkbox" checked={on} onChange={event => handleToggle(event.target.checked)}/>
                <span class="switch-label" data-on="On" data-off="Off"></span>
                <span class="switch-handle"></span>
            </label>
        </div>
    );
}

LightSwitch.propTypes = {
    on: PropTypes.bool,
    containerCssClass: PropTypes.string
}