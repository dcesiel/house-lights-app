import { connect } from 'react-redux'
import {Home} from "./Home";
import { bindActionCreators } from 'redux';
import {setBedroomLight, setKitchenLight, setLivingRoomLight, setMasterSwitch} from "./actions";

// Excluding selectors to simplify example (could also use spread operator here)
const mapStateToProps = (state) => ({
    masterSwitchOn: state.masterSwitchOn,
    kitchenLightOn: state.kitchenLightOn || state.masterSwitchOn,
    livingRoomLightOn: state.livingRoomLightOn || state.masterSwitchOn,
    bedroomLightOn: state.bedroomLightOn || state.masterSwitchOn
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        handleSetMasterSwitch: setMasterSwitch,
        handleSetKitchenSwitch: setKitchenLight,
        handleSetLivingRoomSwitch: setLivingRoomLight,
        handleSetBedroomSwitch: setBedroomLight,
    }, dispatch);
}

export const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)