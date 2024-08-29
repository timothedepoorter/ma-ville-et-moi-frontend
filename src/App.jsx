import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from './components/Header';
import './index.css'; 
import InscriptionForm from "./pages/InscriptionForm";
import ConnexionForm from "./pages/ConnexionForm";
import ProjectDetail from "./components/ProjectDetail";
import Forum from "./pages/forum";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
