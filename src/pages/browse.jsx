import { useLocation } from "react-router";

import Sidebar from "../components/browse/sidebar";
import Main from "../components/browse/main";
import Results from "../components/browse/results";
import Footer from "../components/footer";

const Browse = () => {
  const path = useLocation().pathname.includes("/results");

  return (
    <>
      <div className="flex w-full h-full">
        <Sidebar path={path} />
        {path ? <Results /> : <Main />}
      </div>
      <Footer />
    </>
  );
};

export default Browse;
