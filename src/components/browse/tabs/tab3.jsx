const Tab3 = ({ data }) => {
  return (
    <div className="w-full p-4">
      <div className="flex justify-end gap-4 mobile:gap-2">
        <button className="border border-normalGray rounded-lg py-1 w-40">
          {"Watch Video"}
        </button>
        <button className="border border-normalGray rounded-lg py-1 w-40">
          {"Installation FAQ"}
        </button>
        <button className="border border-normalGray rounded-lg py-1 w-40">
          {"Contact Support"}
        </button>
      </div>
      <div
        className="w-full mt-4 p-4"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </div>
  );
};

export default Tab3;
