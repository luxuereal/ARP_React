const TabPanel = ({ id, setId }) => {
  return (
    <>
      <div className="w-full grid grid-cols-5 h-16 bg-[#E6E6E6] rounded-t-2xl border border-normalGray mobile:hidden">
        <button
          className={
            id === 1
              ? "text-white bg-[#F31223] text-xl border-normalGray rounded-tl-2xl"
              : "text-[#505050] bg-[#E6E6E6] text-xl border-normalGray rounded-tl-2xl"
          }
          onClick={() => setId(1)}
        >
          {"Kit Details"}
        </button>
        <button
          className={
            id === 2
              ? "text-white bg-[#F31223] text-xl border-l border-normalGray"
              : "text-[#505050] bg-[#E6E6E6] text-xl border-l border-normalGray"
          }
          onClick={() => setId(2)}
        >
          {"Part Details"}
        </button>
        <button
          className={
            id === 3
              ? "text-white bg-[#F31223] text-xl border-l border-normalGray"
              : "text-[#505050] bg-[#E6E6E6] text-xl border-l border-normalGray"
          }
          onClick={() => setId(3)}
        >
          {"Installation"}
        </button>
        <button
          className={
            id === 4
              ? "text-white bg-[#F31223] text-xl border-l border-normalGray"
              : "text-[#505050] bg-[#E6E6E6] text-xl border-l border-normalGray"
          }
          onClick={() => setId(4)}
        >
          {"Related Kits"}
        </button>
        <button
          className={
            id === 5
              ? "text-white bg-[#F31223] text-xl border-l border-normalGray rounded-tr-2xl"
              : "text-[#505050] bg-[#E6E6E6] text-xl border-l border-normalGray rounded-tr-2xl"
          }
          onClick={() => setId(5)}
        >
          {"Replacement Parts"}
        </button>
      </div>

      <div className="w-full grid grid-cols-3 bg-[#E6E6E6] border border-normalGray xsm:hidden">
        <button
          className={
            id === 1
              ? "text-white bg-[#F31223] text-base border border-normalGray h-12"
              : "text-[#505050] bg-[#E6E6E6] text-base border border-normalGray h-12"
          }
          onClick={() => setId(1)}
        >
          {"Kit Image"}
        </button>
        <button
          className={
            id === 2
              ? "text-white bg-[#F31223] text-base border border-normalGray h-12"
              : "text-[#505050] bg-[#E6E6E6] text-base border border-normalGray h-12"
          }
          onClick={() => setId(2)}
        >
          {"Kit Details"}
        </button>
        <button
          className={
            id === 3
              ? "text-white bg-[#F31223] text-base border border-normalGray h-12"
              : "text-[#505050] bg-[#E6E6E6] text-base border border-normalGray h-12"
          }
          onClick={() => setId(3)}
        >
          {"Part Details"}
        </button>
        <button
          className={
            id === 4
              ? "text-white bg-[#F31223] text-base border border-normalGray h-12"
              : "text-[#505050] bg-[#E6E6E6] text-base border border-normalGray h-12"
          }
          onClick={() => setId(4)}
        >
          {"Installation"}
        </button>
        <button
          className={
            id === 5
              ? "text-white bg-[#F31223] text-base border border-normalGray h-12"
              : "text-[#505050] bg-[#E6E6E6] text-base border border-normalGray h-12"
          }
          onClick={() => setId(5)}
        >
          {"Related Kits"}
        </button>
        <button
          className={
            id === 6
              ? "text-white bg-[#F31223] text-base border border-normalGray h-12"
              : "text-[#505050] bg-[#E6E6E6] text-base border border-normalGray h-12 leading-5"
          }
          onClick={() => setId(6)}
        >
          {"Replacement Parts"}
        </button>
      </div>
    </>
  );
};

export default TabPanel;
