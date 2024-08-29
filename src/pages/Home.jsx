import { ProjectCard } from '../components/ProjectCard'

export const Home = () => {

    //test
    const projects = [
        { id: '1', title: 'Projet 1' },
        { id: '2', title: 'Projet 2' },
        { id: '3', title: 'Projet 3' },
      ];

    return (
        <main className='flex flex-col items-center w-full'>
            <h1 className='text-black text-5xl font-medium my-10'>Projets proposés par les citoyens</h1>
            {projects.map(project => (
            <ProjectCard key={project.id} projectTitle={project.title} projectId={project.id} />
      ))}
        </main>
    )
}