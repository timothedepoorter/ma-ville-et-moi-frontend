import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from './components/Header';
import './index.css'; 
import InscriptionForm from "./pages/InscriptionForm";
import ConnexionForm from "./pages/ConnexionForm";
import ProjectDetail from "./components/ProjectDetail";
import Forum from "./pages/forum";
import { ProjectToValidate } from "./pages/ProjectToValidate";
import { HomeAdmin } from "./pages/HomeAdmin";
import { ProjectAdminDetail } from "./components/ProjectAdminDetail";

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
    path:"/project/:id",
    element:(
      <>
      <Header />
      <ProjectDetail />
      </>
    )
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
    path: "/forum",
    element: (
      <>
        <Header />
        <Forum />
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
  },
  {
    path:"/projectAdmin/:id",
    element:(
      <>
      <Header />
      <ProjectAdminDetail />
      </>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
