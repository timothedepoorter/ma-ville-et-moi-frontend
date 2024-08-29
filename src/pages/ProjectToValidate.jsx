import { ProjectCardAdminDetail } from "../components/ProjectCardAdminDetail"


export const ProjectToValidate = () => {
    return (
        <main className='flex flex-col items-center w-full'>
            <h1 className='text-black text-5xl font-medium my-10'>Projets proposés par les citoyens à valider</h1>
            <ProjectCardAdminDetail projectTitle='Projet à Valider 1' />
        </main>
    )
}