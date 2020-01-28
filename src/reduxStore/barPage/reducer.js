import * as actionTypes from './actionTypes';

const initialState = {

    //this data from scratch.js by AndrewKryshtal

    barName: 'DOGS & TAILS',  //Vlad
    address: 'Rustaveli Shota vul. 19, Kiev 01001, Ukraine',
    bonus: 'Шот Самбука',
    barInfo: 'Amazing hot dogs, great music and polite and nice staff.' +
        'Very cool place to grap a bite before hitting the town.',
    phone: '+ 3 095 866 76 87',
    fbLink: 'Dogs & Tails',
    openHours: [{
        "days": "Tue–Thu",
        "open": [
            {
                "renderedTime": "Noon–8:00 PM"
            }
        ],
    },
    {
        "days": "Fri",
        "open": [
            {
                "renderedTime": "11:00 AM–7:00 PM"
            }
        ],
    },
    {
        "days": "Sat",
        "open": [
            {
                "renderedTime": "8:00 AM–8:00 PM"
            }
        ],
    },
    {
        "days": "Sun",
        "open": [
            {
                "renderedTime": "8:00 AM–7:00 PM"
            }
        ],
    },
    {
        "days": "Mon–Sun",
        "includesToday": true,
        "open": [
            {
                "renderedTime": "6:00 AM–1:00 AM"
            }
        ],
    }
    ],
    sliderPhotos: ['photo', 'photo', 'photo'],  //Roma

};

export default function barReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_BAR_INFO:
            return {
                ...state,
                barName: action.barData.barName, // Vlad
                address: action.barData.address,
                bonus: action.barData.bonus,
                barInfo: action.barData.barInfo,
                phone: action.barData.phone,
                fbLink: action.barData.fbLink,
                openHours: action.barData.openHours,
                sliderPhotos: action.barData.sliderPhotos,  // Roma
            };
        default:
            return state;
    }
}