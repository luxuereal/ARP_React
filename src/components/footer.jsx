const Footer = () => {
  return (
    <footer className="bg-black w-full h-20 xsm:absolute xsm:bottom-0 mobile:h-28 z-10 xl:p-4 p-2">
      <div className="w-full h-full relative">
        <div className="absolute mobile:w-full h-full mobile:bottom-32 my-auto lg:left-8 md:left-6 flex xl:gap-4 lg:gap-3 md:gap-2 mobile:gap-4 gap-1 items-center mobile:justify-center z-20">
          {["F", "T", "I", "Y", "U"].map((num, id) => (
            <button
              className="lg:h-10 lg:w-10 md:h-8 md:w-8 h-6 w-6 mobile:w-12 mobile:h-12 rounded-full bg-white border border-normalGray"
              key={`tool-${id}`}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="w-full h-full flex justify-center items-center pt-2 z-30">
          <div className="lg:flex xl:gap-4 md:gap-2 grid grid-cols-3 gap-1 mobile:w-full mobile:grid mobile:grid-cols-2 mobile:gap-2 text-white xl:text-base md:text-xs text-8">
            <span className="text-center">{"About ARP"}</span>
            <span className="text-center">{"Site Map"}</span>
            <span className="text-center">{"Privacy & Legal"}</span>
            <span className="text-center">{"Terms & Warranty"}</span>
            <span className="text-center">{"Contact Us"}</span>
            <span className="text-center">{"Certifications"}</span>
          </div>
        </div>

        <span className="absolute text-white xl:text-sm sm:text-[10px] text-[12px] bottom-24 xsm:bottom-0 xl:right-3 right-1 mobile:bottom-28 mobile:text-normalGray mobile:w-full mobile:text-center z-20">
          {"© 2023 Automotive Racing Products, Inc."}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
