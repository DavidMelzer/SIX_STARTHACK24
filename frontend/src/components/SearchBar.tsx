import { IoSearch } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";

const SearchBar = () => {

    return (
        <div className={'flex items-center mx-6'}>
            <div className="flex w-full shadow-top-bottom h-16 rounded-full text-c-black my-3.5">
                <div className={'flex justify-center items-center ml-5 text-2xl'}>
                    <IoSearch/>
                    <p className={'pl-3.5 text-sm font-medium'}>Search for a fund</p>
                </div>
            </div>
            <div className={'border border-c-gray ml-3 p-1 pt-1.5 rounded-full'}>
                <BsFilter className={'text-2xl'}/>
            </div>
        </div>
    )
}

export default SearchBar;