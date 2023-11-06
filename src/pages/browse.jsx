import { useState } from "react";

import Sidebar from "../components/browse/sidebar";
import Main from "../components/browse/main";
import Footer from "../components/footer";

const Browse = () => {

  const [viewList, setViewList] = useState(false); 

  return (
    <>
      <div className="flex w-full h-full">
        <Sidebar
          view={viewList}
          setView={setViewList}
        />
        {
          viewList ? 
            <></>
          : <Main />
        }
      </div>
      <Footer />
    </>
  )
}

export default Browse;