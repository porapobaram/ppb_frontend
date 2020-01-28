import React, {Component} from 'react';
import Slider from 'react-slick';

// npm install react-slik slick-carousel 
// it's important to include css 

import SlideComponent from '../SlideComponent';

import './SliderComponent.scss';

class SliderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            images: [
                "https://www.roastery.gemini.ua/wp-content/uploads/2018/11/glav_1-1.png",
                "https://loftbar.kiev.ua/wp-content/uploads/2018/03/tbl9257048-620x620.jpg",
                "http://im-ho.com.ua/wp-content/uploads/2015/07/peoplebar2.jpg",
                "https://bukovel.com/media/__sized__/pages/comforts/a3d80bcec6a040a9a2cbdfb99be3964d-crop-c0-5__0-5-860x752-70.jpg",
                "https://f.kyivmaps.com/photo/12679/DvgYh.jpg"
            ],
            currentIndex: 0
        }

    };

    render() {
        const settings = {
            speed: 1600,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplaySpeed: 3000,
            autoplay: true,
            adaptiveHeight: true,
            arrows: false
        };

        return(
            
            <div className="slider-wrapper">
                <Slider className="slider-block" {...settings}>
                    {
                        this.state.images.map((image, i) => (
                        <SlideComponent key={i} image={image} /> ))
                    }
                </Slider>
            </div>
        );
    };

};

export default SliderComponent;