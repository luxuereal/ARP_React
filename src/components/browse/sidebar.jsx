import { FiMenu, FiSearch } from "react-icons/fi";

const Sidebar = ({ pathCase, setPage }) => {
  return (
    <nav className="w-[360px] h-full bg-[#4B4A4A]">
      <div className="w-full h-20 p-2 bg-[#3E3E3E] flex justify-between items-center justify-items-stretch border-b border-normalGray">
        <div className="dropdown">
          <button tabIndex={201} className="w-10 h-10 rounded-full bg-white justify-self-start">
            <span className="flex justify-center text-xl">
              <FiMenu />
            </span>
          </button>
          <ul tabIndex={201} className="dropdown-content w-[360px] mt-5 -ml-2 z-0 menu p-2 py-4 shadow rounded-none text-lg bg-[#EBEBEB] border border-[#707070]">
            <li className="p-1"><a href="/">{'ARP in Action or # ARPstrong'}</a></li>
            <li className="p-1"><a href="/">{'How We Make Our Fasteners'}</a></li>
            <li className="p-1"><a href="/">{'Made in USA'}</a></li>
            <li className="p-1"><a href="/">{'New Kit Examples > Full List'}</a></li>
            <li className="p-1"><a href="/">{'Diesel Kits'}</a></li>
            <li className="p-1"><a href="/">{'LS & LT Kits'}</a></li>
            <li className="p-1"><a href="/">{'Coyote Kits'}</a></li>
            <li className="p-1"><a href="/">{'Contact Us'}</a></li>
          </ul>
        </div>

        <a href="/" className="justify-self-center h-full">
          <img
            src="/assets/logo.png"
            alt=""
            className="h-full object-contain"
          />
        </a>

        <div className="dropdown dropdown-end">
          <button tabIndex={202} className="w-10 h-10 rounded-full bg-white justify-self-end flex items-center justify-center">
            <span className="flex justify-center text-xl">
              <FiSearch />
            </span>
          </button>
          <ul tabIndex={202} className="dropdown-content w-[360px] mt-5 -mr-2 z-0 menu p-2 shadow bg-[#EBEBEB] border border-[#707070] rounded-none text-lg">
            <li><input type="text" placeholder="Search all" /></li>
          </ul>
        </div>
      </div>

      <div className="w-full border-b border-normalGray py-0.5 text-center">
        <span className="text-[#A0A0A0]">
          {"Browse"}&nbsp;{">"}&nbsp;{"Rod Bolts"}
        </span>
      </div>

      <div className="w-full px-8 py-4 flex flex-col justify-items-stretch gap-3">
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
        <button
          onClick={() => setPage(false)}
          className="ml-[35%] justify-self-end text-lg font-bold py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#ED1C24] text-center"
        >
          {"Find"}
        </button>
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
        {pathCase === 0 ? 
          <>
            <button className="text-lg py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
              {"Rod Bolt Instructions"}
            </button>
            <button className="text-lg py-1 mx-6 rounded-md text-[#D3D3D3] bg-[#818181] text-center">
              {"Tech Videos"}
            </button>
          </>
        : 
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
        }
      </div>
    </nav>
  );
};

export default Sidebar;
