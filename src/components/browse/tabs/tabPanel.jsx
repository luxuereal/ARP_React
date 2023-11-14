const TabPanel = ({ id, setId }) => {
  return (
    <div className="w-full grid grid-cols-5 h-16 bg-[#E6E6E6] rounded-t-2xl border border-normalGray">
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
  )
}

export default TabPanel