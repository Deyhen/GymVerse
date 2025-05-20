import { Routes, Route } from 'react-router-dom';
import { GymversePage, StartPlanPage, TimelinePage } from './pages';

function App() {
  return (
    <Routes>
      <Route element={<GymversePage />} path="/" />
      <Route element={<TimelinePage />} path="/timeline" />
      <Route element={<StartPlanPage />} path="/start-plan" />
    </Routes>
  );
}

export default App;
