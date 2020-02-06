import React, { Fragment } from "react";
import './BarPageComponent.scss'

const BarPageComponent = ({ barName, address, bonus, barInfo, phone, fbLink, openHours, /* include all data (information) about barPage */
    onSetBarDetails }) => (

        <Fragment>
            {/*<div className='slider'>*/}
            {/*</div>*/}

            {/* <div className="wrapper">
                <div className="wave"></div>
            </div> */}

            <div className='header'>
                <h1>{barName}</h1>
                <p>{address}</p>
            </div>

            <div className='bonus-container'>
                <div className='gift'></div>
                <div className='bonus'>
                    <p className='blue-text'>Твой бонус в баре</p>
                    <p className='gray-text'>{bonus}</p>
                </div>
            </div>

            <div className='descripton-container'>
                <div className='main-descripton'>
                <div className='information'></div>
                    <p>{barInfo}</p>
                </div>
                <div className='phone-number'>
                    <div className='phone-img'></div>
                    <p className='phone'>{phone}</p>
                </div>
                <div className='name-container'>
                    <div className='facebook'></div>
                    <p>{fbLink}</p>
                </div>
                <div className='time-chedule'>
                    <div className='bell'></div>
                    <p>Открыто С 12:00 до 3:00</p>
                </div>
            </div>

            {/*<div className='diagram-container'>*/}
            {/*    </div>*/}

            <div className='buttons-container'>
                <button className='one-more'>
                    <div className='arrow'></div>
                    <div className='btn-block'>
                        <p className='top-text'>Еще раз</p>
                        <p className='bottom-text'>1 попытка из 3</p>
                    </div>
                </button>
                <button className='time'
                    onClick={() => {
                        onSetBarDetails({ barName: 'test' });
                    }}
                >
                    <p>Пора!</p>
                </button>
            </div>
        </Fragment >

    );

export default BarPageComponent;