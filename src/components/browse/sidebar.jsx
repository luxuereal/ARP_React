import { FiMenu, FiSearch } from "react-icons/fi";

const Sidebar = ({ pathCase }) => {
  return (
    <nav className="w-[360px] h-full bg-[#4B4A4A] mobile:h-[110px] mobile:w-full">
      <div className="w-full h-20 p-2 bg-[#3E3E3E] flex justify-between items-center justify-items-stretch border-b border-normalGray">
        <button className="w-10 h-10 rounded-full bg-white justify-self-start">
          <span className="flex justify-center text-xl">
            <FiMenu />
          </span>
        </button>
        <a href="/" className="justify-self-center h-full">
          <img
            src="/assets/logo.png"
            alt=""
            className="h-full object-contain"
          />
        </a>
        <a href="/browse/results" className="w-10 h-10 rounded-full bg-white justify-self-end flex items-center justify-center">
          <span className="text-xl">
            <FiSearch />
          </span>
        </a>
      </div>

      <div className="w-full border-b border-normalGray py-0.5 text-center">
        <span className="text-[#A0A0A0]">
          {"Browse"}&nbsp;{">"}&nbsp;{"Rod Bolts"}
        </span>
      </div>

      <div className="w-full px-8 py-4 flex flex-col justify-items-stretch gap-3 mobile:hidden">
        <h3 className="w-full text-[#D3D3D3] text-2xl text-center">
          {"Rod Bolts"}
        </h3>
        <h6 className="w-full text-[#A0A0A0] text-base text-center">
          {"OEM Replacement Rod Bolts"}
        </h6>
        <button className="text-lg font-bold py-1 mx-6 rounded-md text-[#505050] bg-white text-center">
          {"1. Make"}
        </button>
        <button className="text-lg font-bold py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#B2B1B1] text-center">
          {"2. Engine"}
        </button>
        <a
          href={`/browse/results`}
          className="ml-[35%] justify-self-end text-lg font-bold py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#ED1C24] text-center"
        >
          {"Find"}
        </a>
        <hr className="border-2 border-[#707070]" />
        <h6 className="mt-2 w-full text-[#A0A0A0] text-base text-center">
          {"Pro Series Rod Bolts by Dimensions"}
        </h6>
        <button className="text-lg font-bold py-1 mx-6 rounded-md text-[#505050] bg-white text-center">
          {"1. Diameter"}
        </button>
        <button className="text-lg font-bold py-1 mx-6 rounded-md text-[#505050] bg-white text-center">
          {"2. Underhead L."}
        </button>
        <button className="mb-2 ml-[35%] justify-self-end text-lg font-bold py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#ED1C24] text-center">
          {"Find"}
        </button>
        <hr className="border-2 border-[#707070]" />
        {pathCase === 0 ? (
          <>
            <button className="text-lg py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
              {"Rod Bolt Instructions"}
            </button>
            <button className="text-lg py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
              {"Tech Videos"}
            </button>
          </>
        ) : (
          pathCase === 2 && (
            <div className="mx-6 grid grid-cols-2 gap-2">
              <button className="text-lg py-1 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
                {"Instructions"}
              </button>
              <button className="text-lg py-1 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
                {"Rod Bolt Tech"}
              </button>
              <button className="text-lg py-1 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
                {"Tech Videos"}
              </button>
              <button className="text-lg py-1 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
                {"Rod Bolt FAQ"}
              </button>
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
