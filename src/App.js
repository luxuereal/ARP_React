import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Browse from "./pages/browse";
import Search from "./pages/search";
import Instructions from "./pages/instructions";
import News from "./pages/news";
import Support from "./pages/support";
import Buy from "./pages/buy";
import NoMatch from "./pages/noMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoMatch />,
  },
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "/browse/results",
        element: <Browse />,
        children: [
          {
            path: "/browse/results/:kitId",
            element: <Browse />,
          },
        ],
      },
    ],
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <NoMatch />,
  },
  {
    path: "/instructions",
    element: <Instructions />,
    errorElement: <NoMatch />,
  },
  {
    path: "/news",
    element: <News />,
    errorElement: <NoMatch />,
  },
  {
    path: "/support",
    element: <Support />,
    errorElement: <NoMatch />,
  },
  {
    path: "/buy",
    element: <Buy />,
    errorElement: <NoMatch />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
