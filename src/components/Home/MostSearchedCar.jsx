import FakeData from "../../data/FakeData";
import CarItem from "../Global/Card/CarItem";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

const MostSearchedCar = () => {
  console.log(FakeData.carList);
  return (
    <div className="mx-24 pb-4">
      <h2 className="text-3xl text-center font-semibold font-Bree mt-16">Most Searched Cars</h2>

      <Carousel>
        <CarouselContent>
          {FakeData
            ? FakeData.carList.map((car) => (
                <CarouselItem className="basis-1/4 mt-8 mb-6">
                  <CarItem car={car} />
                </CarouselItem>
              ))
            : null}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchedCar;
