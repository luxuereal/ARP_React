const Info = ({ image, id, series, bolt }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 xl:mr-8 mr-2 mobile:flex mobile:flex-col mobile:mr-0">
      <img src={image} alt="" className="w-full lg:h-[calc(100%-36px)] p-4 h-72 object-contain" />
      <div className="col-span-2 xl:p-4 p-1 mobile:p-0 mobile:my-2">
        <h3 className="xl:text-2xl text-xl mobile:text-lg mobile:font-bold">{`Kit #: ${id}`}</h3>
        <h3 className="xl:text-2xl text-xl mobile:text-lg mobile:font-bold">{series}</h3>
        <div className="w-full flex justify-end mobile:mb-4">
          <a
            href={`${id}/detail`}
            className="rounded-md bg-[#818181] text-[#D3D3D3] xl:py-2 xl:px-8 xl:text-lg xl:mr-4 py-1 px-4 mr-2 mobile:py-1 mobile:px-6"
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
