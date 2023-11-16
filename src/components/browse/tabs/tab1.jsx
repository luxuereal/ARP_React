const Tab1 = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-8 w-full p-4 text-xl mt-8">
      <div className="flex gap-8">
        <span className="w-[30%] text-end font-bold">{"Sockets"}</span>
        <span className="text-start">{data.sockets}</span>
      </div>
      <div className="flex gap-8">
        <span className="w-[30%] text-end font-bold">{"Shipping Weight"}</span>
        <span>{data.shipping_weight}</span>
      </div>
      <div className="flex gap-8">
        <span className="w-[30%] text-end font-bold">{"Contents"}</span>
        <span dangerouslySetInnerHTML={{ __html: data.contents }}></span>
      </div>
      <div className="flex flex-col w-full gap-6">
        <div className="flex gap-8">
          <span className="w-[30%] text-end font-bold">{"Shipping"}</span>
          <span>{data.shipping}</span>
        </div>
        <div className="flex gap-8">
          <span className="w-[30%] text-end font-bold">{"Dimension"}</span>
          <span>{data.dimension}</span>
        </div>
        <div className="flex gap-8">
          <span className="w-[30%] text-end font-bold">{"UPC Code"}</span>
          <span>{data.upc_code}</span>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
