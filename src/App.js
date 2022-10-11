import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
