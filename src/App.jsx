import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainHomepage from "./component/homepage/MainHomepage";
import Footbar from "./component/footbar/Footbar";
import MainNavbar from "./component/navigationBar/MainNavbar";
import MainHeroes from "./component/heroes/MainHeroes";
import MainLogin from "./component/login/MainLogin";
import Test from "./component/test";
import ErrorURL from "./component/ErrorURL";
import TheMainAdmin from "./component/admin/TheMainAdmin";
import MainItemsBattle from "./component/ItemsBattle/MainItemsBattle";
import MainGameMode from "./component/gameMode/MainGameMode";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<MainHomepage />} />
          <Route path="/heroes" element={<MainHeroes />} />
          <Route path="/items" element={<MainItemsBattle />} />
          <Route path="/login" element={<MainLogin />} />
          <Route path="/admin" element={<TheMainAdmin />} />
          <Route path="/test" element={<Test />} />
          <Route path="/mode" element={<MainGameMode />} />
          <Route path="*" element={<ErrorURL />} />
        </Routes>
        <Footbar />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
