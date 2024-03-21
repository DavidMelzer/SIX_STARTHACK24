import FilterBar from "@components/FilterBar";
import SearchBar from "@components/SearchBar";

const Home = () => {
    return (
        <div className={'flex flex-col'}>
            <SearchBar/>
            <FilterBar/>
        </div>
    );
}

export default Home;