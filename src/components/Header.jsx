import { UserRound } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   // État pour gérer l'ouverture/fermeture du dropdown
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   // Fonction pour toggler le dropdown
   const toggleDropdown = () => {
     setIsDropdownOpen(prevState => !prevState);
   };
   const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };
 

  return (
    <header className="bg-color-background-blue-header text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Conteneur pour le logo avec son rectangle blanc */}
        <div className="flex items-center ml-8">
          {/* Rectangle blanc derrière le logo */}
          <div className="relative flex items-center ">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-color-background-white-logo rounded-lg p-3 z-10 w-16">
              <Link to="/">
              <img 
                src="/src/assets/images/Logo_Lille_mais_bleu.svg" 
                alt="Logo Lille" 
                className="h-10 w-100" 
              />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 relative">
          <button
            id="dropdownDelayButton"
            onClick={toggleDropdown}
            className="p-2 border-2 border-color-background-white-logo rounded-full hover:bg-gray-700 transition-colors"
          >
            <UserRound size={24} />
          </button>

          {isDropdownOpen && (
            <div id="dropdownDelay" className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
              <Link to="/inscription" 
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={handleLinkClick}>
                Inscription
              </Link>
              <Link to="/connexion"
               className="block px-4 py-2 hover:bg-gray-200"
               onClick={handleLinkClick}>
                Connexion
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
