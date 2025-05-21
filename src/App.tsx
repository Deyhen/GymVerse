import { Routes, Route } from 'react-router-dom';
import {
  GymverseLightPage,
  GymversePage,
  StartPlanPage,
  TimelinePage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route element={<GymverseLightPage />} path="/" />
      <Route element={<TimelinePage />} path="/timeline" />
      <Route element={<StartPlanPage />} path="/start-plan" />
      <Route element={<GymversePage />} path="/gymverse" />
    </Routes>
  );
}

export default App;
