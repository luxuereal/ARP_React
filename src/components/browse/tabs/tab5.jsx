import { BsCartPlus } from "react-icons/bs";

const Tab5 = ({ data }) => {
  return (
    <>
      <table className="w-full p-8 text-xl mt-4 mobile:hidden">
        <thead className="border-b border-normalGray">
          <tr>
            <th className="w-80 text-center font-bold py-4">{"Image"}</th>
            <th className="text-center font-bold py-4">{"Part Description"}</th>
            <th className="text-center font-bold py-4">{"Part #(?)"}</th>
            <th className="text-center font-bold py-4">{"Unit Price"}</th>
            <th className="text-center font-bold py-4 w-24">{"Qty"}</th>
            <th className="text-center w-24 font-bold py-4">{""}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, id) => (
            <tr className="h-36" key={`replacement-${id}`}>
              <td>
                <img
                  src={dt.image}
                  alt=""
                  className="w-full h-36 p-4 object-contain"
                />
              </td>
              <td className="text-center">{dt.description}</td>
              <td className="text-center">{dt.id}</td>
              <td className="text-center">{dt.price}</td>
              <td className="px-4">
                <input
                  type="number"
                  min={0}
                  className="!w-16 outline-none border-b border-normalGray"
                />
              </td>
              <td className="w-24 h-36 flex justify-center items-center">
                <button className="bg-[#E6E6E6] text-[#505050] border border-[#505050] rounded-full text-2xl p-2">
                  <BsCartPlus />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="hidden mobile:flex mobile:flex-col mobile:gap-8">
        {
          data.map((dt, id) =>
            <div className="w-full flex flex-col items-center mt-4" key={`replacement-parts-id-${id}`}>
              <img src={dt.image} alt="" className="w-64 h-20 object-cover drop-shadow-lg" />
              <h3 className="text-lg my-2 font-bold text-center">{`${dt.id} - ${dt.description}`}</h3>
              <div className="flex justify-between text-lg items-center">
                <span>{`${dt.price} x `}</span>
                <input
                  type="number"
                  min={0}
                  className="!w-16 outline-none border-b border-normalGray mx-4"
                />
                <button className="bg-[#E6E6E6] text-[#505050] border border-[#505050] rounded-full text-lg p-1">
                  <BsCartPlus />
                </button>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Tab5;
