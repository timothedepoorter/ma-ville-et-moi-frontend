import PropTypes from 'prop-types';
import { Button } from './Button';
import { Eye } from 'lucide-react';

export const ProjectCard = ({ projectTitle }) => {
    return (
        <div className='bg-primaryColor relative max-w-screen-md rounded-[30px] px-3 py-10 flex justify-center'>
            <h2 className='text-3xl text-black'>{projectTitle}</h2>
            <Button icon={<Eye />} variant="primary" className={"absolute right-4 bottom-3"} />
        </div>
    )
}

ProjectCard.propTypes = {
    projectTitle: PropTypes.string.isRequired
}