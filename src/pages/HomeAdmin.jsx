import { ProjectCard } from "../components/ProjectCard"


export const HomeAdmin = () => {
    return (
        <main className='flex flex-col items-center w-full'>
            <h1 className='text-black text-5xl font-medium my-10'>Projets proposés par les citoyens à valider</h1>
            <ProjectCard projectTitle='Projet à Valider 1' />
            <ProjectCard projectTitle='Projet à Valider 2' />
            <ProjectCard projectTitle='Projet à Valider 3' />
            <ProjectCard projectTitle='Projet à Valider 4' />
            <ProjectCard projectTitle='Projet à Valider 5' />
        </main>
    )
}