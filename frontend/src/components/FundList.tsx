import React from 'react';
import FundPanel from "@components/FundPanel";

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

interface FundListProps {
    fundsData: Fund[];
}

const FundList = ({fundsData}: FundListProps) => {
    return (
        <div className={'px-6'}>
            {
                fundsData.map((fund, index) => (
                    <FundPanel key={index} fund={fund}/>
                ))
            }
        </div>
    );
}

export default FundList;
