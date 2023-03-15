import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { fetchMissions } from './app/missions/missionsSlice';
import { fetchRockets } from './app/rockets/rocketsSlice';
import Layouts from './components/Layouts';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(fetchRockets());
  }, [dispatch]);
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
