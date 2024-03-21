import FilterBar from "@components/FilterBar";
import SearchBar from "@components/SearchBar";
import FundList from "@components/FundList";

const Home = () => {
    return (
        <div className={'flex flex-col'}>
            <SearchBar/>
            <FilterBar/>
            <FundList/>
        </div>
    );
}

export default Home;