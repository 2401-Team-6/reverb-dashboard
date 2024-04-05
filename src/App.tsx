import { Flowbite } from "flowbite-react";
import ConnectionModal from "./components/ConnectionModal";
import { BrowserRouter as Router } from "react-router-dom";
import flowbiteTheme from "./themes/flowbiteTheme";
import LogInfoWindow from "./components/LogInfoWindow";
import LogSelectWindow from "./components/LogSelectWindow";
import Header from "./components/Header";
import CategoryWindow from "./components/CategoryWindow";
import { useEffect, useState } from "react";
import { ApiResponse } from "./types/types";

// Add event / cron type to function status for icons?
// Create endpoint to get functions and events, for a "My Functions" and "My Events" tab? (Security issue?)
//  If so, add link to funcName and eventName in LogViewer

function App() {
  const [entries, setEntries] = useState<ApiResponse>({ logs: [] });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("flowbite-theme-mode", "dark");
  }, []);

  return (
    <Router>
      <Flowbite theme={{ theme: flowbiteTheme }}>
        <ConnectionModal openModal={openModal} setOpenModal={setOpenModal} />
        <Header setOpenModal={setOpenModal} />
        <main className="flex h-[calc(100vh-6rem)] items-center justify-center gap-2">
          <CategoryWindow />
          <LogSelectWindow entries={entries} setEntries={setEntries} />
          <LogInfoWindow entries={entries} />
        </main>
      </Flowbite>
    </Router>
  );
}

export default App;
