import { Flowbite, useThemeMode } from "flowbite-react";
import ConnectionModal from "./components/ConnectionModal";
import { BrowserRouter as Router } from "react-router-dom";
import flowbiteTheme from "./themes/flowbiteTheme";
import LogInfoWindow from "./components/LogInfoWindow";
import LogSelectWindow from "./components/LogSelectWindow";
import Header from "./components/Header";
import CategoryWindow from "./components/CategoryWindow";
import { useEffect, useState } from "react";
import { ApiResponse } from "./types/types";

function App() {
  const [entries, setEntries] = useState<ApiResponse>({ logs: [] });
  const [openModal, setOpenModal] = useState(false);
  const { mode, toggleMode } = useThemeMode();

  useEffect(() => {
    if (mode !== "dark") {
      localStorage.removeItem("flowbite-theme-mode");
      toggleMode();
    }
  }, [mode]);

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
