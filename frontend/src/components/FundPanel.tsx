import React, {useState, useEffect} from "react";
import Slider from 'react-slick';
import {BsFillStarFill, BsHeartFill} from "react-icons/bs";

interface Image {
    image_url: string;
    image_description: string;
}

interface Fund {
    fund_name: string;
    images: Image[];
    fund_price: number;
    currency: string;
    percentage_change: number;
    morningstar_rating?: number;
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

    const [hearted, setHearted] = useState(false);
    const [showInvestorFavorite, setShowInvestorFavorite] = useState(false);

    function handleHeartClick() {
        setHearted(!hearted);
    }

    // Zufällig entscheiden, ob "Investor-Favorite" bei der Initialisierung der Komponente angezeigt wird
    useEffect(() => {
        setShowInvestorFavorite(Math.random() < 0.5); // 50% Chance
    }, []);

    return (
        <div className={'font-mulish mb-8'}>
            <div className='rounded-2xl overflow-hidden relative'>
                <div
                    className={`absolute z-10 top-0 ${showInvestorFavorite ? 'justify-between' : 'justify-end'} flex items-center w-full px-3.5 pt-3`}>
                    {showInvestorFavorite && (
                        <p className={'bg-c-white text-sm font-semibold px-4 py-1 rounded-full'}>Investor-Favorite</p>
                    )}
                    <BsHeartFill onClick={handleHeartClick}
                                 className={`text-xl ${hearted ? 'text-red-700' : 'text-c-gray opacity-80'}`}/>
                </div>
                <Slider {...settings}>
                    {fund.images.map((image, index) => (
                        <div key={index} className='w-full h-auto flex justify-center items-center relative'>
                            <img src={image.image_url} alt={image.image_description}
                                 className='w-auto h-auto max-w-none' style={{
                                minWidth: '382px',
                                minHeight: '382px',
                                maxWidth: '382px',
                                maxHeight: '382px',
                                objectFit: 'cover'
                            }}/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={'text-c-black text-sm mt-2.5 px-0.5'}>
                <div className={'flex justify-between'}>
                    <p className='font-semibold'>{fund.fund_name}</p>
                    {fund.morningstar_rating && (
                        <div className={'flex items-center'}>
                            <BsFillStarFill/>
                            <p className={'ml-1 font-semibold'}>{fund.morningstar_rating}</p>
                        </div>
                    )}
                </div>
                <p className='text-c-gray'>{fund.percentage_change > 0 ? '+' : ''}{fund.percentage_change.toFixed(2)}%</p>
                <p className='font-semibold'>{fund.fund_price} {fund.currency}</p>
            </div>
        </div>
    );
};

export default FundPanel;
