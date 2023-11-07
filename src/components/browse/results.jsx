import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import Info from "./info";
import { bolts } from "../../contents/browse";

const Results = () => {
  const kitId = useLocation().pathname.substr(16);

  const [bolt, setBolt] = useState(null);

  const getValue = (bolt, name) =>
    bolt.filter((opt) => opt.name === name)[0]["value"];

  useEffect(() => {
    kitId !== "" &&
      setBolt(bolts.list.filter((bolt) => getValue(bolt, "ID") === kitId)[0]);
  }, [kitId]);

  return (
    <div className="p-8 w-[calc(100%-360px)] h-[calc(100%-80px)]">
      <h3 className="text-3xl font-bold text-black mb-8">{bolts.series}</h3>
      {kitId !== "" && bolt ? (
        <Info
          image={getValue(bolt, "Image")}
          id={getValue(bolt, "ID")}
          series={bolts.series}
          bolt={bolt}
        />
      ) : (
        <div className="grid grid-cols-3 grid-rows-2 gap-8 w-full">
          {bolts.list.map((bolt, id) => (
            <a
              href={`/browse/results/${getValue(bolt, "ID")}`}
              className="p-8 flex flex-col border border-normalGray justify-center"
              key={`bolt-${id}`}
            >
              <span className="font-bold text-3xl text-center">
                {getValue(bolt, "ID")}
              </span>
              <span className="font-bold text-3xl text-center">
                {getValue(bolt, "Model")}
              </span>
              <br />
              <span className="text-xl text-center">
                {getValue(bolt, "Tensile Strength")}
              </span>
              <span className="text-xl text-center">
                {getValue(bolt, "Material")}
              </span>
              <span className="text-xl text-center">
                {getValue(bolt, "Shank Type")}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
