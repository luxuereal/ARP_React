import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";

import PrimaryEngine from "./pages/browse/primaryEngine";
import RodBoltsPage from "./pages/browse/rodBolts";
import DetailBoltPage from "./pages/browse/detailBoltPage";
import Engine from "./pages/browse/engine";
import DriveLine from "./pages/browse/driveLine";
import ByDimension from "./pages/browse/byDimension";
import Tools from "./pages/browse/tools";
import FullFastener from "./pages/browse/fullFastener";

import Search from "./pages/search/search";
import ComplexKit from "./pages/search/complexKit";
import Diesel from "./pages/search/diesel";
import LsLt from "./pages/search/lsLt";
import Coyote from "./pages/search/coyote";
import Hemi from "./pages/search/hemi";
import FullMake from "./pages/search/fullMake";

import Instructions from "./pages/instructions/instructions";
import DetailedInst from "./pages/instructions/detailedInst";
import InstVideo from "./pages/instructions/instVideo";
import TorqueStech from "./pages/instructions/torqueStech";
import TorqueChart from "./pages/instructions/torqueChart";
import SubmitTeque from "./pages/instructions/submitTeque";

import USDealers from "./pages/buy/usDealers";
import InterDealers from "./pages/buy/interDealers";
import Distributor from "./pages/buy/distributor";
import UpdateDealer from "./pages/buy/updateDealer";

import RegisterKit from "./pages/support/registerKit";
import SubmitQue from "./pages/support/submitQue";
import FastenerTech from "./pages/support/fastenerTech";
import TechVideos from "./pages/support/techVideos";
import Manufacture from "./pages/support/manufacture";
import QualityCert from "./pages/support/qualityCert";
import USA from "./pages/support/usa";

import News from "./pages/news/news";
import LatestKit from "./pages/news/latestKit";
import RacingNews from "./pages/news/racingNews";
import Events from "./pages/news/events";
import LatestNews from "./pages/news/latestNews";

import FAQ from "./pages/faq";
import NoMatch from "./pages/noMatch";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoMatch />,
  },
  {
    path: "/primary_engine",
    element: <PrimaryEngine />,
    errorElement: <NoMatch />,
  },
  {
    path: "/primary_engine/rod_bolts",
    element: <RodBoltsPage />,
    errorElement: <NoMatch />
  },
  {
    path: "/primary_engine/rod_bolts/:kitId",
    element: <DetailBoltPage />,
    errorElement: <NoMatch />
  },
  {
    path: "/engine",
    element: <Engine />,
    errorElement: <NoMatch />,
  },
  {
    path: "/driveline",
    element: <DriveLine />,
    errorElement: <NoMatch />,
  },
  {
    path: "/by_dimension",
    element: <ByDimension />,
    errorElement: <NoMatch />,
  },
  {
    path: "/tools",
    element: <Tools />,
    errorElement: <NoMatch />,
  },
  {
    path: "/full_fastener",
    element: <FullFastener />,
    errorElement: <NoMatch />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <NoMatch />,
  },
  {
    path: "/complex_kit",
    element: <ComplexKit />,
    errorElement: <NoMatch />,
  },
  {
    path: "/diesel",
    element: <Diesel />,
    errorElement: <NoMatch />,
  },
  {
    path: "/ls_lt",
    element: <LsLt />,
    errorElement: <NoMatch />,
  },
  {
    path: "/coyote",
    element: <Coyote />,
    errorElement: <NoMatch />,
  },
  {
    path: "/hemi",
    element: <Hemi />,
    errorElement: <NoMatch />,
  },
  {
    path: "/full_make",
    element: <FullMake />,
    errorElement: <NoMatch />,
  },
  {
    path: "/instruations",
    element: <Instructions />,
    errorElement: <NoMatch />,
  },
  {
    path: "/detailed_inst",
    element: <DetailedInst />,
    errorElement: <NoMatch />,
  },
  {
    path: "/inst_video",
    element: <InstVideo />,
    errorElement: <NoMatch />,
  },
  {
    path: "/torque_stech",
    element: <TorqueStech />,
    errorElement: <NoMatch />,
  },
  {
    path: "/torque_chart",
    element: <TorqueChart />,
    errorElement: <NoMatch />,
  },
  {
    path: "/faq",
    element: <FAQ />,
    errorElement: <NoMatch />,
  },
  {
    path: "/submit_teque",
    element: <SubmitTeque />,
    errorElement: <NoMatch />,
  },
  {
    path: "/us_dealers",
    element: <USDealers />,
    errorElement: <NoMatch />,
  },
  {
    path: "/inter_dealers",
    element: <InterDealers />,
    errorElement: <NoMatch />,
  },
  {
    path: "/distributor",
    element: <Distributor />,
    errorElement: <NoMatch />,
  },
  {
    path: "/update_dealer",
    element: <UpdateDealer />,
    errorElement: <NoMatch />,
  },
  {
    path: "/register_kit",
    element: <RegisterKit />,
    errorElement: <NoMatch />,
  },
  {
    path: "/submit_que",
    element: <SubmitQue />,
    errorElement: <NoMatch />,
  },
  {
    path: "/fastener_tech",
    element: <FastenerTech />,
    errorElement: <NoMatch />,
  },
  {
    path: "/tech_videos",
    element: <TechVideos />,
    errorElement: <NoMatch />,
  },
  {
    path: "/manufacture",
    element: <Manufacture />,
    errorElement: <NoMatch />,
  },
  {
    path: "/quality_cert",
    element: <QualityCert />,
    errorElement: <NoMatch />,
  },
  {
    path: "/usa",
    element: <USA />,
    errorElement: <NoMatch />,
  },
  {
    path: "/news",
    element: <News />,
    errorElement: <NoMatch />,
  },
  {
    path: "/latest_kit",
    element: <LatestKit />,
    errorElement: <NoMatch />,
  },
  {
    path: "/racing_news",
    element: <RacingNews />,
    errorElement: <NoMatch />,
  },
  {
    path: "/events",
    element: <Events />,
    errorElement: <NoMatch />,
  },
  {
    path: "/latest_news",
    element: <LatestNews />,
    errorElement: <NoMatch />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
