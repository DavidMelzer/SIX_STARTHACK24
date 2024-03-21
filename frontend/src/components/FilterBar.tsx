import {useState} from "react";
import {BiSolidLeaf} from "react-icons/bi";
import {MdDiversity1} from "react-icons/md";
import {GoLaw} from "react-icons/go";
import {GiPeaceDove, GiSwapBag, GiWaterfall} from "react-icons/gi";
import {RiRecycleFill} from "react-icons/ri";
import {HiViewList} from "react-icons/hi";

const FilterBar = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filterOptionsV2 = [
        {
            label: 'All',
            icon: HiViewList,
        },
        {
            label: 'Carbon Footprint',
            icon: BiSolidLeaf,
        },
        {
            label: 'Diversity',
            icon: MdDiversity1,
        },
        {
            label: 'Governance',
            icon: GoLaw,
        },
        {
            label: 'Human Rights',
            icon: GiPeaceDove,
        },
        {
            label: 'Pollution',
            icon: GiSwapBag,
        },
        {
            label: 'Circular Economy',
            icon: RiRecycleFill,
        },
        {
            label: 'Water Resources',
            icon: GiWaterfall,
        },
    ];

    function handleFilterChange(filter: string) {
        setSelectedFilter(filter);
    }

    return (
        <div className="flex overflow-x-auto whitespace-nowrap h-14 mt-3 mb-4 shadow-lg font-mulish hide-scrollbar">
            {filterOptionsV2.map((option, index) => {
                return (
                    <div key={index}
                         className={`flex flex-col px-2 flex-shrink-0 ${option.label === selectedFilter ? 'border-b-2 border-b-c-black' : ''} text-c-gray text-xs font-bold text-center cursor-pointer`}
                         onClick={() => handleFilterChange(option.label)}>
                        <option.icon
                            className={`${option.label === selectedFilter ? 'text-c-black' : ''} mx-auto text-2xl mb-1`}/>
                        <p>{option.label}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default FilterBar;
