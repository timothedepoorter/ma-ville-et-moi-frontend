import { ProjectCard } from '../components/ProjectCard'

export const Home = () => {
    return (
        <main className='flex flex-col items-center w-full'>
            <h1 className='text-black text-5xl font-medium my-10'>Projets proposés par les citoyens</h1>
            <ProjectCard projectTitle='Test' />
            <ProjectCard projectTitle='Test' />
            <ProjectCard projectTitle='Test' />
        </main>
    )
}