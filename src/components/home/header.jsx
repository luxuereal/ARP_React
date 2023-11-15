import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="absolute top-0">
      <div className="w-full bg-cover relative z-20 !min-h-[60px]">
        <img
          src="/assets/header.png"
          className="z-20 drop-shadow-md object-cover !min-h-[60px]"
          alt=""
        />

        <a href="/">
          <div className="absolute top-0 w-full h-full flex justify-center">
            <img
              src="/assets/logo.png"
              className="absolute z-30 !h-full pt-4 pb-1 self-end"
              alt=""
            />
          </div>
        </a>

        <div className="absolute top-0 w-full h-full flex justify-end items-center">
          <div className="2xl:mr-56 xl:mr-40 lg:mr-32 md:mr-24 sm:mr-16 xsm:hidden">
            <div className="w-full h-full relative">
              <input className="bg-[#D3D3D3] max-w-[80] 2xl:w-80 2xl:h-10 lg:w-60 lg:h-8 md:w-48 md:h-6 sm:w-32 sm:h-6 border !border-[#D3D3D3] outline-none rounded-md" />
              <button className="absolute bg-white 2xl:w-10 2xl:h-10 2xl:-ml-5 lg:w-8 lg:h-8 lg:-ml-4 md:w-6 md:h-6 md:-ml-3 sm:w-6 sm:h-6 sm:-ml-3 text-normalGray border border-normalGray rounded-full">
                <h6 className="text-xl sm:text-sm flex justify-center">
                  <span>
                    <FaSearch />
                  </span>
                </h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
