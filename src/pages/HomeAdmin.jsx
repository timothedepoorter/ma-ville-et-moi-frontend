import { ProjectCardAdmin } from "../components/ProjectCardAdmin"


export const HomeAdmin = () => {
    return (
        <main className='flex flex-col items-center w-full'>
            <h1 className='text-black text-5xl font-medium my-10'>Projets proposés par les citoyens à valider</h1>
            <ProjectCardAdmin projectTitle='Projet à Valider 1' />
            <ProjectCardAdmin projectTitle='Projet à Valider 2' />
            <ProjectCardAdmin projectTitle='Projet à Valider 3' />
            <ProjectCardAdmin projectTitle='Projet à Valider 4' />
            <ProjectCardAdmin projectTitle='Projet à Valider 5' />
        </main>
    )
}