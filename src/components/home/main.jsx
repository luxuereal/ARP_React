import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import { slides, navs } from "../../utility/contents/home";

const Main = () => {
  return (
    <section className="w-full h-full z-10 relative">
      
      <Carousel
        showThumbs={false}
        className="max-h-full"
        autoPlay
        infiniteLoop
      >
        {slides.map((slide, id) => (
          <div key={`homeslide-${id}`}>
            <div
              className="w-full h-full grid grid-cols-4 mobile:hidden relative"
            >
              <div className="h-full bg-white z-10 flex items-center">
                <div className="w-80 ibm-font text-black ml-12 z-20">
                  <p className="2xl:text-6xl lg:text-5xl sm:text-4xl">
                    {slide.text.title}
                  </p>
                  <p className="mt-12 2xl:text-3xl lg:text-2xl sm:text-base">
                    {slide.text.text}
                  </p>
                </div>
              </div>
              <img
                src={slide.image}
                className="z-10 col-span-3 h-[100vh] object-cover mask-image"
                alt=""
              />
            </div>
            <div
              className="w-full h-full hidden mobile:block relative"
            >
              <img
                src={slide.image}
                className="z-10 col-span-3 h-[100vh] object-cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </Carousel>

      <nav className="absolute bottom-20 mobile:bottom-52 h-32 mobile:h-24 w-full py-4 px-8 mobile:p-0 bg-white bg-opacity-30 border border-normalGray">
        <div className="w-full h-full grid lg:grid-cols-6 grid-cols-3 border-2 border-normalGray">
          {navs.map((nav, id) => (
            <Link to={nav.url} key={`nav-${id}`}>
              <div className="text-black lg:text-3xl md:text-2xl sm:text-xl cursor-pointer h-full w-full flex items-center bg-white border-x mobile:border border-normalGray">
                <span className="w-full text-center text-normalGray">
                  {nav.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
      
    </section>
  );
};

export default Main;
