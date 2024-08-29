import PropTypes from 'prop-types';
import { Button } from './Button';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectCardAdmin = ({ projectTitle, projectId }) => {
    return (
        <div className='bg-primaryColor relative max-w-screen-md rounded-[30px] px-3 py-10 flex justify-center w-full mb-4'>
            <h1 className="text-4xl font-bold">{projectTitle}</h1>
            <Link to={`/projectAdmin/${projectId}`}>
             <Button icon={<Eye />} variant="primary" className={"absolute right-4 bottom-3"} />
            </Link>
            </div>
    )
}

ProjectCardAdmin.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    projectId: PropTypes.string.isRequired,
}