import React from "react";
import BarPageComponent from "./BarPageComponent";
import { connect } from 'react-redux';
import { setBarDetails } from "../../../reduxStore/barPage/actions";
import SliderComponent from "./Slider/SliderComponent";

const BarPageContainer = ({ setBarDetails, barName , address, bonus, barInfo, phone, fbLink, openHours }) => {
    return (
        <div>
            <SliderComponent/>
            <BarPageComponent onSetBarDetails={setBarDetails}
                              barName = {barName}
                              address = {address}
                              bonus = {bonus}
                              barInfo = {barInfo}
                              phone = {phone}
                              fbLink = {fbLink}
                              openHours = {openHours}
            />
        </div>
    );
};

function mapStateToProps(state) {
    return {
        //what data we want from redux store
        barName: state.barPage.barName, // YA
        address: state.barPage.address,
        bonus: state.barPage.bonus,
        barInfo: state.barPage.barInfo,
        phone: state.barPage.phone,
        fbLink: state.barPage.fbLink,
        openHours: state.barPage.openHours, //Roma
    }
}

const mapDispatchToProps = {
    //what actions we want from redux store
    setBarDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(BarPageContainer);
