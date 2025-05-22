import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Data from "@/Shared/Data";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-full md:w-max">
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="light" className="hover:bg-[#eef0fc]">Brand New</SelectItem>
          <SelectItem value="dark" className="hover:bg-[#eef0fc]">Used</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Brands" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {
            Data.CarBrands.map((brand, index) => (
              <SelectItem key={index} value={brand.name} className="hover:bg-[#eef0fc]">{brand.name}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {
            Data.Pricing.map((price, index) => (
              <SelectItem key={index} value={price.name} className="hover:bg-[#eef0fc]">{price.name}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <div>
        <CiSearch className="text-5xl bg-primary text-white rounded-full p-2 hover:scale-110 transition-all cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
