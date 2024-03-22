import React, {useState} from 'react';
import FilterBar from "@components/FilterBar";
import SearchBar from "@components/SearchBar";
import FundList from "@components/FundList";
import fundsData from "src/data/data.json";
import {shuffleArray} from '@utils/shuffleArray';

const Home = () => {
    const getRandomImage = () => {
        const randomImage = Math.floor(Math.random() * 28) + 1;
        return `/assets/images/${randomImage}.jpg`;
    };

    const [filteredFunds, setFilteredFunds] = useState(() => {
        return fundsData.map(fund => ({
            fund_name: fund.longName,
            images: Array.from({length: 4}, () => ({
                image_url: getRandomImage(),
                image_description: 'Random Fund Image'
            })),
            fund_price: fund.previousClose,
            currency: fund.currency,
            percentage_change: fund.ytdReturn,
            morningstar_rating: fund.morningStarOverallRating,
        }));
    });

    const shuffleFunds = () => {
        setFilteredFunds(currentFunds => shuffleArray([...currentFunds]));
    };

    return (
        <div className={'flex flex-col'}>
            <SearchBar/>
            <FilterBar shuffleFunds={shuffleFunds}/>
            <FundList fundsData={filteredFunds}/>
        </div>
    );
}

export default Home;
