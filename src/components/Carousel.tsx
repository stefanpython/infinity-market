import { Carousel, Typography } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    // @ts-ignore
    <Carousel className="h-[100vh] -mt-[84px]">
      <div className="relative h-full w-full ">
        <img
          src="./4.png"
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 text-center md:w-2/4">
            {/* @ts-ignore */}
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl "
            >
              The Beauty of Nature
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-100"
            >
              Discover the essence of elegance. Embrace your unique style with
              our collection designed to celebrate every curve and every moment
              of your journey.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="./1.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            {/* @ts-ignore */}
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Timeless Elegance
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Unleash your inner goddess. From classic sophistication to bold
              statements, redefine elegance with our timeless pieces that speak
              volumes without saying a word.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="./2.png"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            {/* @ts-ignore */}
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Empower Your Wardrobe
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Embrace confidence. Our designs are more than just fabric and
              thread—they're a celebration of femininity, crafted to empower you
              and make every day a runway.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="./3.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 text-center md:w-2/4">
            {/* @ts-ignore */}
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Effortless Chic
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Elevate your style effortlessly. Dive into a world where beauty
              meets comfort, where each piece tells a story of grace and charm.
              Discover fashion that speaks your language.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
