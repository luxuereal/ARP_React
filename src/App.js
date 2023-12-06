import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Sentry from "@sentry/react";

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
    element: <PrimaryEngine />
  },
  {
    path: "/primary_engine/rod_bolts",
    element: <RodBoltsPage />
  },
  {
    path: "/primary_engine/rod_bolts/:kitId",
    element: <DetailBoltPage />
  },
  {
    path: "/engine",
    element: <Engine />,
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
  },
  {
    path: "/full_fastener",
    element: <FullFastener />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/complex_kit",
    element: <ComplexKit />,
  },
  {
    path: "/diesel",
    element: <Diesel />,
  },
  {
    path: "/ls_lt",
    element: <LsLt />,
  },
  {
    path: "/coyote",
    element: <Coyote />,
  },
  {
    path: "/hemi",
    element: <Hemi />,
  },
  {
    path: "/full_make",
    element: <FullMake />,
  },
  {
    path: "/instruations",
    element: <Instructions />,
  },
  {
    path: "/detailed_inst",
    element: <DetailedInst />,
  },
  {
    path: "/inst_video",
    element: <InstVideo />,
  },
  {
    path: "/torque_stech",
    element: <TorqueStech />,
  },
  {
    path: "/torque_chart",
    element: <TorqueChart />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/submit_teque",
    element: <SubmitTeque />,
  },
  {
    path: "/us_dealers",
    element: <USDealers />,
  },
  {
    path: "/inter_dealers",
    element: <InterDealers />,
  },
  {
    path: "/distributor",
    element: <Distributor />,
  },
  {
    path: "/update_dealer",
    element: <UpdateDealer />,
  },
  {
    path: "/register_kit",
    element: <RegisterKit />,
  },
  {
    path: "/submit_que",
    element: <SubmitQue />,
  },
  {
    path: "/fastener_tech",
    element: <FastenerTech />,
  },
  {
    path: "/tech_videos",
    element: <TechVideos />,
  },
  {
    path: "/manufacture",
    element: <Manufacture />,
  },
  {
    path: "/quality_cert",
    element: <QualityCert />,
  },
  {
    path: "/usa",
    element: <USA />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/latest_kit",
    element: <LatestKit />,
  },
  {
    path: "/racing_news",
    element: <RacingNews />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/latest_news",
    element: <LatestNews />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default Sentry.withProfiler(App);
