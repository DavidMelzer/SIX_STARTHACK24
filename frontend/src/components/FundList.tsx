import FundPanel from "@components/FundPanel";

const FundList = () => {

    const funds = [
        {
            fund_name: 'Fund 1',
            images: [
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 1 image 1'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 1 image 2'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 1 image 3'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 1 image 4'
                }
            ],
            fund_price: '120,74€',
        },
        {
            fund_name: 'Fund 2',
            images: [
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 2 image 1'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 2 image 2'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 2 image 3'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 2 image 4'
                }
            ],
            fund_price: '120,74€',
        },
        {
            fund_name: 'Fund 3',
            images: [
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 3 image 1'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 3 image 2'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 3 image 3'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 3 image 4'
                }
            ],
            fund_price: '120,74€',
        },
        {
            fund_name: 'Fund 4',
            images: [
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 4 image 1'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 4 image 2'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 4 image 3'
                },
                {
                    image_url: 'https://picsum.photos/500',
                    image_description: 'Fund 4 image 4'
                }
            ],
            fund_price: '120,74€',
        },
    ];

    return (
        <div className={'px-6'}>
            {
                funds.map((fund, index) => <FundPanel key={index} fund={fund}/>)
            }
        </div>
    );
}

export default FundList;