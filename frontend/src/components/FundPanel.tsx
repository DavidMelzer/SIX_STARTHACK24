import React from "react";
import Slider from 'react-slick';

interface Image {
    image_url: string;
    image_description: string;
}

interface Fund {
    fund_name: string;
    images: Image[];
    fund_price: string;
}

const FundPanel: React.FC<{ fund: Fund }> = ({fund}) => {
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        draggable: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        dotsClass: 'slick-dots -mt-10 static',
    };

    return (
        <div className={'font-mulish mb-8'}>
            <div className='rounded-2xl overflow-hidden'>
                <Slider {...settings}>
                    {fund.images.map((image, index) => (
                        <div key={index} className='w-full h-auto rounded-'>
                            <img src={image.image_url} alt={image.image_description}
                                 className='w-full h-auto'/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={'text-c-black text-sm mt-2.5'}>
                <h2 className='font-semibold'>{fund.fund_name}</h2>
                <p className='text-c-gray'>{fund.fund_price}</p>
                <p className='font-semibold'>{fund.fund_price}</p>
            </div>
        </div>
    );
};

export default FundPanel;
