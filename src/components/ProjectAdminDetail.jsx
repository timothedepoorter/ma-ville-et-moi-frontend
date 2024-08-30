import { Check, Undo2, X } from "lucide-react/dist/cjs/lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from "axios";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ProjectAdminDetail = ({id}) => {
  const [project, setProjects] = useState([]);
    const navigate = useNavigate();
    console.log(id);

    async function useEffect(){
      const response = await axios.get("http://localhost:8080/projects/" + id)
      //console.log(response)
        setProjects(response.data)
      };
    useEffect();

    // Remplace par des données réelles
  // const projectAdminData = {
  //   [project]: {
  //     title: project.title,
  //     description: project.content,
  //   },
  // };


    return (
        <div className="flex justify-center items-center min-h-screen primaryColor">
            <div className='bg-primaryColor relative max-w-screen-md rounded-[30px] px-3 py-10 w-full mb-4'>
            <button onClick={() => navigate('/admin')} className="mb-4 px-2 py-2 text-black rounded">
                <Undo2 size={24} />
            </button>
                    <h2 className='text-center text-3xl text-black mb-6'>{project.id}</h2>
                    <p className='text-center text-3m text-black mb-12 ml-10 mr-10'>
                        {project.content}
                    </p>
                <Button icon={<Check />} variant="primary" className={"absolute left-4 bottom-3"} />
                <Button icon={<X />} variant="secondary" className={"absolute left-16 bottom-3"} />
            </div>
        </div>
    );
}

ProjectAdminDetail.propTypes = {
  project: PropTypes.string.isRequired,
}