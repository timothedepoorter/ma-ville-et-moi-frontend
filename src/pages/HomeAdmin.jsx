import { useState } from "react";
import { ProjectCardAdmin } from "../components/ProjectCardAdmin"
import axios from "axios";


export const HomeAdmin = () => {
    const [projects, setProjects] = useState([]);

    async function useEffect(){
        const response = await axios.get("http://localhost:8080/projects/admin")
        console.log(response)
          setProjects(response.data)
        };
    useEffect();
        

    return (
        <main className='flex flex-col items-center w-full'>
            <h1 className='text-black text-5xl font-medium my-10'>Projets proposés par les citoyens à valider</h1>
            {projects.map(project => (
                <ProjectCardAdmin key={project.id} project={project} />
            ))}
        </main>
    )
}