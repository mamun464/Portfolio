import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Data } from './Data'
import "./references.css"

const References = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='references container section ' id='references'>
            <h2 className='section__title'>References</h2>
            <span className='section__subtitle'>Professionals who can vouch for my skills and work history</span>

            <Slider {...settings} className='references__container '>
                {Data.map(({ id, title, designation, institution, email }) => (
                    <div className='reference__card' key={id}>
                        <h2 className='reference__name'>{title}</h2>
                        <h3 className='reference__desig'>{designation}</h3>
                        <span className='reference__insti'>{institution}</span> <br />
                        <span className='reference__email'>Email: {email}</span>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default References;
