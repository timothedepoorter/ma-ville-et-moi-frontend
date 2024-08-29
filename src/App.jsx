import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from './components/Header';
import './index.css'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
