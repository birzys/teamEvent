import "./App.css";
import { Routes, Route } from "react-router-dom";
import { EventParticipantsList } from "./components/EventParticipantsList";
import { NewParticipant } from "./components/NewParticipant";

function App() {
  return (
    <Routes>
      <Route element={<EventParticipantsList />} path="/" />
      <Route element={<NewParticipant />} path="/add" />
    </Routes>
  );
}

export default App;
