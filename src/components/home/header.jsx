import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="absolute top-0">
      <div className="w-full bg-cover relative z-20 !min-h-[60px]">
        <img src="/assets/header.png" className="z-20 drop-shadow-md object-cover !min-h-[60px]" alt="" />
        <div className="absolute top-0 w-full h-full flex justify-center">
          <img src="/assets/logo.png" className="absolute z-30 !h-full pt-4 pb-1 self-end" alt="" />
        </div>
        <div className="absolute top-0 w-full h-full flex justify-end items-center">
          <div className="!w-[463px] h-[46px] mr-20">
            <div className="w-full h-full relative">
              <input className="bg-[#D3D3D3] max-w-[80] w-80 h-10 border !border-[#D3D3D3] outline-none rounded-md" />
              <button className="absolute bg-white !w-10 h-10 -ml-5 text-normalGray border border-normalGray rounded-full">
                <h6 className="text-xl flex justify-center"><span><FaSearch /></span></h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;