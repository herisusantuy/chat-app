import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppShell, AppShellNavbar } from '@mantine/core'
 

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppShell>
      {/* Your application here */}
    </AppShell>
  );
}

export default App;
