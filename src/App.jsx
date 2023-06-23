import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainHomepage from "./component/homepage/MainHomepage";
import Footbar from "./component/footbar/Footbar";
import MainNavbar from "./component/navigationBar/MainNavbar";
import MainHeroes from "./component/heroes/MainHeroes";
import MainLogin from "./component/login/MainLogin";
import MainAdmin from "./component/admin/MainAdmin";
import Test from "./component/test";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<MainHomepage />} />
          <Route path="/heroes" element={<MainHeroes />} />
          <Route path="/login" element={<MainLogin />} />
          <Route path="/admin" element={<MainAdmin />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footbar />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
