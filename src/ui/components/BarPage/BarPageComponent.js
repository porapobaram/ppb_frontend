import React, { Fragment } from "react";
import './BarPageComponent.scss'
const BarPageComponent = ({ barName, address, bonus, barInfo, phone, fbLink, openHours, /* include all data (information) about barPage */
    onSetBarDetails }) => (

        <Fragment>
            {/*<div className='slider'>*/}
            {/*</div>*/}
            <div className='apper-layer'>
                <div className='header'>
                    <h1>{barName}</h1>
                    <p>{address}</p>
                </div>

                <div className='bonus-container'>
                    <div className='icon'>
                        <i className="fa fa-gift" />
                    </div>
                    <div className='bonus'>
                        <p className='blue-text'>Твой бонус в баре</p>
                        <p className='gray-text'>{bonus}</p>
                    </div>
                </div>

                <div className='descripton-container'>
                    <div className='main-descripton'>
                        <i className="fa fa-exclamation-circle" />
                        <p>{barInfo}</p>
                    </div>
                    <div className='line'></div>
                    <div className='phone-number'>
                        <i className="fa fa-phone" />
                        <p className='phone'>{phone}</p>
                    </div>
                    <div className='line'></div>
                    <div className='name-container'>
                        <i className="fa fa-facebook" />
                        <p>{fbLink}</p>
                    </div>
                    <div className='line'></div>
                    <div className='time-chedule'>
                        <i className="fa fa-bell" />
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
            </div>
        </Fragment>

    );

export default BarPageComponent;