import axios from 'axios'
import { ProjectCard } from '../components/ProjectCard'
import { useState } from 'react';

export const Home = () => {

  const [projects, setProjects] = useState([]);

  async function useEffect(){
    const response = await axios.get("http://localhost:8080/projects/valid")
    // console.log(response)
      setProjects(response.data)
    };
  useEffect();

    //test
    // const projects = [
    //     { id: '1', title: 'Projet 1' },
    //     { id: '2', title: 'Projet 2' },
    //     { id: '3', title: 'Projet 3' },
    //   ];

    return (
        <main className='flex flex-col items-center w-full'>
            <h1 className='text-black text-5xl font-medium my-10'>Projets proposés par les citoyens</h1>
            {projects.map(project => (
            <ProjectCard key={project.id} projectTitle={project.title} projectId={project.id} />
      ))}
        </main>
    )
}