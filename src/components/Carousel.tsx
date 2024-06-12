import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    // @ts-ignore
    <Carousel className=" h-[100vh]">
      <img src="./4.png" alt="image 4" className="h-full w-full object-cover" />
      <img src="./1.png" alt="image 1" className="h-full w-full object-cover" />
      <img src="./2.png" alt="image 2" className="h-full w-full object-cover" />
      <img src="./3.png" alt="image 3" className="h-full w-full object-cover" />
    </Carousel>
  );
}
