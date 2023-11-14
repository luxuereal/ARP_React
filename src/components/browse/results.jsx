import { useLocation } from "react-router";
import { GoArrowLeft } from "react-icons/go";

import Info from "./info";
import { bolts } from "../../utility/contents/browse";
import { getValue } from "../../utility/functions/getValue";

const Results = () => {
  const kitId = useLocation().pathname.substr(16);

  const bolt = bolts.list.filter((bolt) => bolt.id === kitId)[0]

  return (
    <div className="p-8 w-[calc(100%-360px)] h-[calc(100%-80px)]">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-black">{bolts.series}</h3>
        {kitId !== "" && <a href="/browse/results" className="text-xl mr-16 flex items-center"><GoArrowLeft />&nbsp;{'Back to list'}</a>}
      </div>
      {kitId !== "" ? (
        <Info
          image={getValue(bolt.part, "Image")}
          id={bolt.id}
          series={bolts.series}
          bolt={bolt.part}
        />
      ) : (
        <div className="grid grid-cols-3 grid-rows-2 gap-8 w-full">
          {bolts.list.map((bolt, id) => (
            <a
              href={`/browse/results/${bolt.id}`}
              className="p-8 flex flex-col border border-normalGray justify-center"
              key={`bolt-${id}`}
            >
              <span className="font-bold text-3xl text-center">
                {bolt.id}
              </span>
              <span className="font-bold text-3xl text-center">
                {getValue(bolt.part, "Model")}
              </span>
              <br />
              <span className="text-xl text-center">
                {getValue(bolt.part, "Tensile Strength")}
              </span>
              <span className="text-xl text-center">
                {getValue(bolt.part, "Material")}
              </span>
              <span className="text-xl text-center">
                {getValue(bolt.part, "Shank Type")}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
