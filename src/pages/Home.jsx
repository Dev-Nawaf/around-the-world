import RegionMenu from "./../components/RegionMenu";
import SearchInput from "./../components/SearchInput";
import ShowMessage from "./../components/ShowMessage";
import CountryList from "./../components/CountryList";
import { useFetchData } from "../useFetchData";

export const Home = () => {
  const {
    result,
    filterCountriesList,
    isLoading,
    isError,
    setFilterCountriesList,
  } = useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Somthing went wrong!" />}
      {isLoading && <ShowMessage message="Loading countries data...!" />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filtercountriesList={setFilterCountriesList}
            />
            <RegionMenu
              countriesList={result}
              filtercountriesList={setFilterCountriesList}
            />
          </div>
          <CountryList data={filterCountriesList} />
        </>
      )}
    </>
  );
};
