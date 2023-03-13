import { Route, Routes } from "react-router-dom";
import "./App.css";
import Missions from "./components/Missions";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Missions />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profiles" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
