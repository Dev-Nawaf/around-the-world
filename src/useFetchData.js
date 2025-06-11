import { useEffect, useState } from "react";

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filterCountriesList, setFilterCountriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  const fetchDataFromAPI = () => {
    let url = `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags`;
    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setIsError(true);
        }
        return response.json();
      })
      .then((data) => {
        if (country) {
          //Country page
          setResult(data[0]);
        } else {
          //Home page
          setResult(data);
          setFilterCountriesList(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));

    if (data) {
      setResult(data);
      setFilterCountriesList(data);
    } else {
      fetchDataFromAPI();
    }

    if (
      data?.status === 400 ||
      data?.status === 404 ||
      data?.status === 500 ||
      data?.status === 401 ||
      data?.status === 403 ||
      data?.status === 429
    ) {
      fetchDataFromAPI();
    }
  };

  return {
    result,
    filterCountriesList,
    isLoading,
    isError,
    setFilterCountriesList,
  };
};
