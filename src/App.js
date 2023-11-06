import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Browse from "./pages/browse";
import Search from "./pages/search";
import Instructions from "./pages/instructions";
import News from "./pages/news";
import Support from "./pages/support";
import Buy from "./pages/buy";
import NoMatch from "./pages/noMatch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
