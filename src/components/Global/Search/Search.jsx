
import Data from "@/data/Data";
import SearchField from "./SearchField";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const carType = [
    {label: "New", value: "New"},
    {label: "Old", value: "Old"},
  ];

  const carMakes = Data.CarMakes.map((make) => (
    {
      id:make.id,
      label: make.name,
      value: make.name,
    }
  ));

  const carPricing = Data.Pricing.map((price) => (
    {
      id: price.id,
      label: price.amount,
      value: price.amount,
    }
  ))
  console.log(carPricing);
  
    


  return (
    <div className="flex  py-6 px-8 bg-gray-100 rounded-md md:rounded-full flex-col md:flex-row md:flex gap-4 items-center">
      <SearchField
      iconClass="hidden"
        placeholder="Car Types"
        options={carType}
        triggerClass="w-[180px] border-logoBlue focus:outline-none font-Bree"
      />
      <SearchField
      iconClass="hidden"
        placeholder="Car Makes"
        options={carMakes}
        triggerClass="w-[180px] border-logoBlue font-Bree"
      />
      <SearchField
          iconClass="block text-lg "
        placeholder="Pricing"
        options={carPricing}
        triggerClass="w-[180px] border-logoBlue font-Bree"
      />

<CiSearch className="bg-logoBlue text-[32px]  p-2 rounded-full font-bold text-white hover:scale-125 transition-all
 cursor-pointer" />
    </div>
  );
};

export default Search;
