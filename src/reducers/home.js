import {
    SET_BEDROOM_LIGHT_ACTION, SET_KITCHEN_LIGHT_ACTION, SET_LIVING_ROOM_LIGHT_ACTION,
    SET_MASTER_SWITCH_ACTION
} from "../actions/constants";

export const home = (state, action) => {
    console.log(action)
    switch (action.type) {
        case SET_MASTER_SWITCH_ACTION:
            return {
                ...state,
                masterSwitchOn: action.masterSwitchOn
            };
        case SET_KITCHEN_LIGHT_ACTION:
            return {
                ...state,
                kitchenLightOn: action.kitchenLightOn
            };
        case SET_LIVING_ROOM_LIGHT_ACTION:
            return {
                ...state,
                livingRoomLightOn: action.livingRoomLightOn
            };
        case SET_BEDROOM_LIGHT_ACTION:
            return {
                ...state,
                bedroomLightOn: action.bedroomLightOn
            }
        default:
            return state;
    }
}