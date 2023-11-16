const Info = ({ image, id, series, bolt }) => {
  return (
    <div className="grid grid-cols-3 mr-8 mobile:flex mobile:flex-col mobile:mr-0">
      <img src={image} alt="" className="w-full h-[calc(100%-36px)] p-4 mobile:h-72 object-contain" />
      <div className="col-span-2 p-4 mobile:p-0 mobile:my-2">
        <h3 className="text-2xl mobile:text-lg mobile:font-bold">{`Kit #: ${id}`}</h3>
        <h3 className="text-2xl mobile:text-lg mobile:font-bold">{series}</h3>
        <div className="w-full flex justify-end mobile:mb-4">
          <a
            href={`${id}/detail`}
            className="rounded-md bg-[#818181] text-[#D3D3D3] py-2 px-8 text-lg mr-4 mobile:py-1 mobile:px-6"
          >
            {"Kit Instructions"}
          </a>
        </div>
        <div className="w-full mt-4 flex flex-col gap-2">
          {bolt
            .filter(
              (opt) =>
                opt.name !== "ID" &&
                opt.name !== "Model" &&
                opt.name !== "Image"
            )
            .map((opt, id) => (
              <div
                className="grid grid-cols-2 gap-x-24"
                key={`bolt-info-${id}`}
              >
                <span className="text-right font-bold">{opt.name}</span>
                {opt.name === "Head Style" ? (
                  <img src={opt.value} className="w-10 h-10" alt="" />
                ) : (
                  <span className="text-left">{opt.value}</span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
