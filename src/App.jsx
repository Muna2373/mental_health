
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Game from "./pages/Game";
import Audio from "./pages/Audio";
import Profile from "./pages/Profile";

import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/game" element={<Game />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <BottomNavigation />
      </BrowserRouter>
  );
}

export default App;
