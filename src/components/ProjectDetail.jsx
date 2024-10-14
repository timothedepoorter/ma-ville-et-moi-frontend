import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThumbsUp, MessageSquare, Undo2 } from 'lucide-react';
import axios from 'axios';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProjects] = useState([]);
    const navigate = useNavigate();
    console.log(id);

    async function useEffect(){
      const response = await axios.get("http://localhost:8080/projects/" + id)
        setProjects(response.data)
        console.log(response.data);
      };
      useEffect();
  
  // Remplace par des données réelles
  // const projectData = {
  //   [id]: {
  //     title: 'Title project',
  //     description: `Je propose qu'on mette deux lampadaires devant ma maison pour
  //     que je puisse faire des économies sur ma facture d'électricité.`,
  //   },
  // };

 // const project = projectData[id] || {};

  // État pour le nombre de likes
  const [likes, setLikes] = useState(0);

  // Fonction pour gérer les likes
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen primaryColor">
      <div className="bg-primaryColor p-8 rounded-lg shadow-lg max-w-md w-full">
        <button onClick={() => navigate('/')} className="mb-4 px-2 py-2 text-black rounded">
          <Undo2 size={24} />
        </button>
        <h2 className="text-center text-black text-xl font-bold mb-4">{project.title}</h2>
        <p className="mt-2 text-center text-black">{project.content}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button 
            onClick={handleLike} 
            className="flex items-center space-x-1 px-4 py-2 bg-accentColor text-white rounded-full"
          >
            <ThumbsUp size={20} />
            <span>{likes}</span>
          </button>
          <button 
            onClick={() => navigate('/forum')} 
            className="px-4 py-2 bg-accentColor text-white rounded-full"
          >
            <MessageSquare size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
