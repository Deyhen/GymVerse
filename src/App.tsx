import { Routes, Route } from 'react-router-dom';
import { GymversePage } from './pages/Gymverse';
import { TimelinePage } from './pages/Timeline';
import { StartPlanPage } from './pages/StartPlan';

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
