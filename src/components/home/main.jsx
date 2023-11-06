import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { slides, navs } from "../../contents/home";

const Main = () => {
  return (
    <section className="w-full h-full z-10 relative">
      <Carousel showThumbs={false} className="max-h-full" autoPlay infiniteLoop >
        {
          slides.map((slide, id) =>
            <div className="w-full h-full grid grid-cols-4 relative" key={`homeslide-${id}`}>
              <div className="h-full bg-white z-10 flex items-center">
                <div className="w-80 ibm-font text-black ml-12 z-20">
                  <p className="2xl:text-6xl lg:text-5xl sm:text-4xl">{slide.text.title}</p>
                  <p className="mt-12 2xl:text-3xl lg:text-2xl sm:text-base">{slide.text.text}</p>
                </div>
              </div>
              <img src={slide.image} className="z-10 col-span-3 h-[100vh] object-cover mask-image" alt="" />
            </div>
          )
        }
      </Carousel>
      <nav className="absolute bottom-20 h-32 w-full py-4 px-8 bg-white bg-opacity-30 border border-normalGray">
        <div className="w-full h-full grid md:grid-cols-6 border-2 border-normalGray">
          {
            navs.map((nav, id) =>
            <div className="text-black text-3xl h-full w-full flex items-center bg-white border-x border-normalGray border-collapse" key={`nav-${id}`}>
              <span className="w-full text-center text-normalGray">{nav}</span>
            </div>
            )
          }
        </div>
      </nav>
    </section>
  )
}

export default Main