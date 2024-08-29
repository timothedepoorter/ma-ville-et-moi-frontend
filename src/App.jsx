import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from './components/Header';
import './index.css'; 
import InscriptionForm from "./pages/InscriptionForm";
import ConnexionForm from "./pages/ConnexionForm";
import { HomeAdmin } from "./pages/HomeAdmin";
import { ProjectToValidate } from "./pages/ProjectToValidate";

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
  {
    path: "/admin",
    element: (
      <>
        <Header />
        <HomeAdmin />
      </>
    ),
  },
  {
    path: "/admin/validation",
    element: (
      <>
        <Header />
        <ProjectToValidate />
      </>
    ),
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
