import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { slides, navigations } from "../../utility/contents/home";

const Main = () => {
  return (
    <section className="w-full h-full z-0 relative">
      
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
                <div className="w-80 ibm-font text-black ml-12 z-20 slide-text">
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
                className="z-10 col-span-3 h-[100vh] max-h-[840px] object-cover mask-image"
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

      <nav className="absolute bottom-28 mobile:bottom-28 h-32 mobile:h-24 w-full py-4 px-8 mobile:p-0 bg-white bg-opacity-30 border border-normalGray">
        <div className="w-full h-full grid lg:grid-cols-6 grid-cols-3 border border-normalGray">
          {navigations.map((nav, id) => (
            <div key={`nav-${id}`} className="dropdown dropdown-top mobile-menu">
              <button className="flexible lg:text-3xl md:text-2xl sm:text-xl cursor-pointer h-full w-full flex items-center bg-white border-x mobile:border border-normalGray text-normalGray hover:bg-[#707070] hover:text-white focus:bg-[#ED1C24] focus:text-white" tabIndex={id} >
                <span className="flexible w-full text-center">
                  {nav.title}
                </span>
              </button>
              <ul tabIndex={id} className="flexible dropdown-content z-[1] menu p-2 rounded-md shadow bg-[#EBEBEB] border border-[#707070] border-b-4 border-b-[#ED1C24]">
                {
                  nav.sub.map((each, idx) =>
                    <li key={`menu-${id}-${idx}`} className="flexible py-1">
                      {
                        each.input ?
                          <input type="text" className="placeholder:text-center border border-[#707070] xl:text-base text-xs" placeholder={each.name} />
                        :
                          <a href={each.value} className="flexible w-full text-center text-[#707070] xl:text-lg text-base">{each.name}</a>
                      }
                    </li>
                  )
                }
              </ul>
            </div>
          ))}
        </div>
      </nav>
      
    </section>
  );
};

export default Main;
