import {
    SET_BEDROOM_LIGHT_ACTION, SET_KITCHEN_LIGHT_ACTION, SET_LIVING_ROOM_LIGHT_ACTION,
    SET_MASTER_SWITCH_ACTION
} from "./constants";

export const setMasterSwitch = (masterSwitchOn) => ({
    type: SET_MASTER_SWITCH_ACTION,
    masterSwitchOn
});

export const setKitchenLight = (kitchenLightOn) => ({
    type: SET_KITCHEN_LIGHT_ACTION,
    kitchenLightOn
});

export const setLivingRoomLight = (livingRoomLightOn) => ({
    type: SET_LIVING_ROOM_LIGHT_ACTION,
    livingRoomLightOn
});

export const setBedroomLight = (bedroomLightOn) => ({
    type: SET_BEDROOM_LIGHT_ACTION,
    bedroomLightOn
});

