const Footer = () => {
  return (
    <footer className="bg-black w-full h-20 fixed bottom-0 z-10 xl:p-4 sm:p-2">
      <div className="w-full h-full relative">

        <div className="absolute h-full my-auto lg:left-8 md:left-6 flex xl:gap-4 lg:gap-3 md:gap-2 sm:gap-1 items-center">
          {["F", "T", "I", "Y", "U"].map((num, id) => (
            <button
              className="lg:h-10 lg:w-10 md:h-8 md:w-8 sm:h-6 sm:w-6 rounded-full bg-white border border-normalGray"
              key={`tool-${id}`}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="w-full h-full flex justify-center items-center pt-2">
          <div className="lg:flex xl:gap-4 md:gap-2 sm:grid sm:grid-cols-3 sm:gap-1 text-white xl:text-base md:text-xs sm:text-[10px]">
            <span className="text-center">{"About ARP"}</span>
            <span className="text-center">{"Site Map"}</span>
            <span className="text-center">{"Privacy & Legal"}</span>
            <span className="text-center">{"Terms & Warranty"}</span>
            <span className="text-center">{"Contact Us"}</span>
            <span className="text-center">{"Certifications"}</span>
          </div>
        </div>

        <span className="absolute text-white xl:text-sm sm:text-[10px] xsm:text-[8px] bottom-0 xl:right-3 sm:right-1">
          {"© 2018 Automotive Racing Products, Inc."}
        </span>
        
      </div>
    </footer>
  );
};

export default Footer;
