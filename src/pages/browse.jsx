import { useLocation } from "react-router";

import Sidebar from "../components/browse/sidebar";
import Main from "../components/browse/main";
import Results from "../components/browse/results";
import Detail from "../components/browse/detail";
import Footer from "../components/footer";

const Browse = () => {
  const path = useLocation().pathname;

  const pathCase = path === "/browse" ? 0 : path.includes("/detail") ? 1 : 2

  return (
    <>
      <div className="flex w-full h-full">
        {
          pathCase === 1 ?
            <Detail />
          : 
            <>
              <Sidebar pathCase={pathCase} />
              {
                pathCase === 0 ?
                  <Main />
                :
                  <Results />
              }
            </>

        }
      </div>
      <Footer />
    </>
  );
};

export default Browse;
