import { Routes, Route } from 'react-router-dom';
import { GymversePage } from './pages/Gymverse';
import { TimelinePage } from './pages/Timeline';
import { StartPlanPage } from './pages/StartPlan';

function App() {
  return (
    <Routes>
      <Route element={<StartPlanPage />} path="/" />
      <Route element={<TimelinePage />} path="/timeline" />
      <Route element={<GymversePage />} path="/gymverse" />
    </Routes>
  );
}

export default App;
