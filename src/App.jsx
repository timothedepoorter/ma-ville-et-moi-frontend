import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from './components/Header';
import './index.css'; 
import InscriptionForm from "./pages/InscriptionForm";
import ConnexionForm from "./pages/ConnexionForm";

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
  {
    path: "/inscription",
    element: (
      <>
        <Header />
        <InscriptionForm />
      </>
    ),
  },
  {
    path: "/connexion",
    element: (
      <>
        <Header />
        <ConnexionForm />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
