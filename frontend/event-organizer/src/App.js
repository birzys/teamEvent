import "./App.css";
import { Routes, Route } from "react-router-dom";
import { EventParticipantsList } from "./components/EventParticipantsList";
import { NewParticipant } from "./components/NewParticipant";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<EventParticipantsList />} path="/participants" />
        <Route element={<NewParticipant />} path="/add" />
      </Routes>
    </div>
  );
}

export default App;
