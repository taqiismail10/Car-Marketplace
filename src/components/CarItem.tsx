
import { LuFuel } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import { Separator } from "./ui/separator";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";

type Car = {
  name: string;
  fuelType: string;
  model: string;
  type: string;
  image: string;
  miles: number;
  gearType: string;
  color: string;
  price: number;
};

type CarItemProps = {
  car: Car;
};

const CarItem: React.FC<CarItemProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-xl hover:shadow-md hover:scale-102 transition-all cursor-pointer">
      <img
        src={car.image}
        alt={car.name}
        width={300}
        height={200}
        className="rounded-t-xl object-cover w-[300px] h-[200px]"
        style={{ objectFit: "cover", width: "300px", height: "200px" }}
      />
      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">{car.name}</h2>
        <Separator />
        <div>
          <div className="flex items-center justify-between mt-2 px-7">
            <LuFuel size={20} />
            <h2>{car.fuelType}</h2>
          </div>
          <div className="flex items-center justify-between mt-2 px-7 text-lg">
            <MdOutlineSpeed size={20} />
            <h2>{car.miles} miles</h2>
          </div>
          <div className="flex items-center justify-between mt-2 px-7 text-lg">
            <GiGearStickPattern size={20} />
            <h2>{car.gearType}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between mt-2 px-7">
          <h2 className="font-bold text-xl">${car.price}</h2>
          <h2 className="text-primary text-sm flex items-center gap-1 cursor-pointer hover:underline">
            View Details
            <IoMdOpen />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarItem