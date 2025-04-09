import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/:userId/places" element={<UserPlaces />} />

          {/* Redirect any unknown routes to / */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

// Test commit by PC
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025
// Review date 09.04.2025

export default App;
