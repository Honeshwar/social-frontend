import { toast } from "react-toastify";
import { DarkModeContextProvider } from "./context/darkModeContext";
import Layout from "./Layout";

function App() {
  return (
    <DarkModeContextProvider>
      <Layout />
    </DarkModeContextProvider>
  );
}

export default App;
