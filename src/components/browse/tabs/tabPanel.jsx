const TabPanel = ({ id, setId }) => {

  const desktopTabs = ["Kit Details", "Part Details", "Installation", "Related Kits", "Replacement Parts"];

  const mobileTabs = ["Kit Image", "Kit Details", "Part Details", "Installation", "Related Kits", "Replacement Parts"];

  return (
    <>
      <div className="w-full lg:grid lg:grid-cols-5 h-12 bg-[#E6E6E6] mt-4 rounded-xl border border-normalGray hidden">
        {
          desktopTabs.map((tab, idx) => 
            idx === 0 ?
              <button
                className={
                  id === idx + 1
                    ? "flexible text-white bg-[#F31223] text-xl border-r border-normalGray rounded-l-xl"
                    : "flexible text-[#505050] bg-[#E6E6E6] text-xl border-r border-normalGray rounded-l-xl hover:bg-[#707070] hover:text-white"
                }
                onClick={() => setId(idx + 1)}
                key={`desktoptab-${idx}`}
              >
                {tab}
              </button>
            : idx === 4 ?
              <button
                className={
                  id === idx + 1
                    ? "flexible text-white bg-[#F31223] text-xl border-normalGray rounded-r-xl"
                    : "flexible text-[#505050] bg-[#E6E6E6] text-xl border-normalGray rounded-r-xl hover:bg-[#707070] hover:text-white"
                }
                onClick={() => setId(idx + 1)}
                key={`desktoptab-${idx}`}
              >
                {tab}
              </button>
            :
              <button
                className={
                  id === idx + 1
                    ? "flexible text-white bg-[#F31223] text-xl border-r border-normalGray"
                    : "flexible text-[#505050] bg-[#E6E6E6] text-xl border-r border-normalGray hover:bg-[#707070] hover:text-white"
                }
                onClick={() => setId(idx + 1)}
                key={`desktoptab-${idx}`}
              >
                {tab}
              </button>
          )
        }
      </div>

      <div className="w-full grid grid-cols-3 bg-[#E6E6E6] border border-normalGray lg:hidden">
        {
          mobileTabs.map((tab, idx) =>
            <button
              className={
                id === idx + 1
                  ? "flexible text-white bg-[#F31223] text-base border border-normalGray h-12"
                  : "flexible text-[#505050] bg-[#E6E6E6] text-base border border-normalGray h-12 hover:bg-[#707070] hover:text-white"
              }
              onClick={() => setId(idx + 1)}
              key={`mobiletab-${idx}`}
            >
              {tab}
            </button>
          )
        }
      </div>
    </>
  );
};

export default TabPanel;
