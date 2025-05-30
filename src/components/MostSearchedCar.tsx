import FakeData from "@/Shared/FakeData"
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const MostSearchedCar = () => {
  console.log(FakeData.carList);
  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center my-16">Most Searched Cars</h2>

      <Carousel>
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4 my-4 gap-2">
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default MostSearchedCar