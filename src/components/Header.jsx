import { UserRound } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-color-background-blue-header text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Conteneur pour le logo avec son rectangle blanc */}
        <div className="flex items-center ml-8">
          {/* Rectangle blanc derrière le logo */}
          <div className="relative flex items-center ">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-color-background-white-logo rounded-lg p-3 z-10 w-16">
              <img 
                src="/src/assets/images/Logo_Lille_mais_bleu.svg" 
                alt="Logo Lille" 
                className="h-10 w-100" 
              />
            </div>
          </div>
        </div>

        {/* Conteneur pour l'icône utilisateur */}
        <div className="flex items-center space-x-4">
          {/* Icône utilisateur avec bordure visible */}
          <a href="#" className="p-2 border-2 border-color-background-white-logo rounded-full hover:bg-gray-700 transition-colors">
            <UserRound size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
