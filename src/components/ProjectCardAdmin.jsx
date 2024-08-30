import PropTypes from 'prop-types';
import { Button } from './Button';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectCardAdmin = ({ project }) => {

    

    return (
        <div className='bg-primaryColor relative max-w-screen-md rounded-[30px] px-3 py-10 flex justify-center w-full mb-4'>
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <Link to={`/projectAdmin/${project.id}`}>
             <Button icon={<Eye />} variant="primary" className={"absolute right-4 bottom-3"} />
            </Link>
            </div>
    )
}

ProjectCardAdmin.propTypes = {
    project: PropTypes.string.isRequired,
}