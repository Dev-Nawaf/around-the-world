import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const RegionMenu = ({ countriesList, filtercountriesList }) => {
  const handlerRegionChange = (e) => {
    const region = e.label; //Select option label
    const filterCountries =
      region === "All regions"
        ? countriesList
        : countriesList.filter((country) => country.region === region);
    filtercountriesList(filterCountries);
  };

  return (
    <Select
      defaultValue={options[0]}
      onChange={handlerRegionChange}
      options={options}
      classNames={{
        input: () => "dark:!text-gray-100", // ! = important
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    ></Select>
  );
};

export default RegionMenu;
