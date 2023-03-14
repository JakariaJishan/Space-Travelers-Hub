import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layouts from './components/Layouts';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profiles" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
