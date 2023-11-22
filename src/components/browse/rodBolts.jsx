import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

import Header from "../home/header";
import Sidebar from "./sidebar";
import Main from "./main";
import Footer from "../footer";
import { bolts } from "../../utility/contents/browse";
import { getValue } from "../../utility/functions/getValue";


const RodBolts = () => {

  const [page, setPage] = useState(true);

  return (
    <>
      <div className="w-full h-full relative hidden mobile:block"> 
        <Header />

        <div className="w-full h-32 bg-[#EBEBEB] border-b border-normalGray hidden mobile:flex mobile:flex-col justify-end">
          <h4 className="text-lg text-center text-normalGray">{'Primary Engine Fasteners'}</h4>
          <h4 className="text-xl text-center text-normalGray mb-1">{'OEM Connecting Rods'}</h4>
        </div>

        <h4 className="text-xl font-bold p-4 text-center mt-4">{bolts.series}</h4>

        <div className="p-4 grid grid-cols-2 grid-rows-2 gap-4 w-full">
          {bolts.list.map((bolt, id) => (
            <a
              href={`./rod_bolts/${bolt.id}`}
              className="md:p-8 mobile:p-2 p-2 flex flex-col border border-normalGray justify-center"
              key={`bolt-${id}`}
            >
              <span className="font-bold lg:text-3xl text-center text-xl mobile:text-xl">{bolt.id}</span>
              <span className="font-bold lg:text-3xl text-center text-base mobile:text-base">
                {getValue(bolt.part, "Model")}
              </span>
              <br />
              <span className="lg:text-xl text-center text-base mobile:text-base">
                {getValue(bolt.part, "Tensile Strength")}
              </span>
              <span className="lg:text-xl text-center text-base mobile:text-base">
                {getValue(bolt.part, "Material")}
              </span>
              <span className="lg:text-xl text-center text-base mobile:text-base">
                {getValue(bolt.part, "Shank Type")}
              </span>
            </a>
          ))}
        </div>

      </div>

      <div className="flex w-full h-full mobile:hidden">
        {
          page ?
            <>
              <Sidebar pathCase={0} setPage={setPage} />
              <Main />
            </>
          :
            <>
              <Sidebar pathCase={1} setPage={setPage} />
              <div className="p-8 w-[calc(100%-360px)] h-[calc(100%-80px)] overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mobile:text-xl ">{bolts.series}</h3>
                  <button onClick={() => setPage(true)} className="text-xl mr-2 lg:mr-4 xl:mr-16 xl:flex xl:items-center hidden">
                    <GoArrowLeft />
                    &nbsp;{"Back to list"}
                  </button>
                  <button onClick={() => setPage(true)} className="xl:hidden mobile:text-base mr-2 flex items-center">
                    <GoArrowLeft />
                    &nbsp;{"Back"}
                  </button>
                </div>

                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mobile:grid-cols-2 grid-rows-2 gap-8 mobile:gap-2 w-full">
                  {bolts.list.map((bolt, id) => (
                    <a
                      href={`./rod_bolts/${bolt.id}`}
                      className="md:p-8 mobile:p-2 p-2 flex flex-col border border-normalGray justify-center"
                      key={`bolt-${id}`}
                    >
                      <span className="font-bold lg:text-3xl text-center text-xl mobile:text-xl">{bolt.id}</span>
                      <span className="font-bold lg:text-3xl text-center text-base mobile:text-base">
                        {getValue(bolt.part, "Model")}
                      </span>
                      <br />
                      <span className="lg:text-xl text-center text-base mobile:text-base">
                        {getValue(bolt.part, "Tensile Strength")}
                      </span>
                      <span className="lg:text-xl text-center text-base mobile:text-base">
                        {getValue(bolt.part, "Material")}
                      </span>
                      <span className="lg:text-xl text-center text-base mobile:text-base">
                        {getValue(bolt.part, "Shank Type")}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </>
        }
      </div>

      <div className="mobile:hidden">
        <Footer />
      </div>
    </>
  )
}

export default RodBolts;