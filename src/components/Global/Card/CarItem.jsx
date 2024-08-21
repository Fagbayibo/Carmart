import {Separator} from "@/components/ui/separator";
import {BsFillFuelPumpDieselFill} from "react-icons/bs";
import {IoSpeedometer} from "react-icons/io5";
import {GiGearStick} from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";

const CarItem = ({car}) => {
  return (
    <div className="border rounded-xl bg-gray-100 hover:shadow-2xl transition ease-in-out cursor-pointer relative">
        <h2 className="absolute m-2 bg-green-500 px-3 font-poppins rounded-md text-sm text-white py-1 text-[13px]">New</h2>
      <img
        src={car?.image}
        alt="car Image"
        width={'100%'}
        height={250}
        className="rounded-t-md"
      />
      <div className="p-4">
        <h2 className="font-poppins text-black text-[16px] mb-2 font-medium">{car?.name}</h2>
        <Separator />
        <div className="grid grid-cols-3 my-5">
          <div className="flex flex-col items-center">
            <BsFillFuelPumpDieselFill className="size-4 mb-2" />
            <h2 className="text-[13px] font-poppins">{car?.mile} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <IoSpeedometer className="size-4 mb-2" />
            <h2 className="text-[13px] font-poppins">{car?.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStick className="size-4 mb-2" />
            <h2 className="text-[13px] font-poppins">{car?.gearType} </h2>
          </div>
        </div>
        <Separator/>
        <div className="flex items-center justify-between mt-2">
            <h2 className="font-Bree font-semibold text-[18px] text-gray-800">${car?.price}</h2>
            <h2 className="text-[13px] font-poppins font-medium cursor-pointer flex items-center gap-2 text-logoBlue">View Details <MdOutlineOpenInNew /> </h2>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
