import React, { useState, useEffect } from 'react';

const Forum = () => {
  const [messages, setMessages] = useState([
    "Ceci est un avis d'utilisateur.",
    "Un autre commentaire sur le projet.",
    "B@onne journée !!!!!! ^^"
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    // Simule l'ajout d'un nouveau message après quelques secondes
    const interval = setInterval(() => {
      setMessages(prevMessages => [...prevMessages, "Nouveau message d'un autre utilisateur"]);
    }, 10000); // Ajoute un message toutes les 10 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-primaryColor p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-black text-xl font-bold mb-4">Title project</h2>
        
        <div className="space-y-4 mb-4">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM6 18v-2c0-2.828 4.031-4 6-4s6 1.172 6 4v2"></path>
                </svg>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-sm w-full">
                {message}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={handleSendMessage} 
            className="px-4 py-2 bg-accentColor text-white rounded"
          >
            Valider
          </button>
          <input 
            type="text" 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)}
            className="text-black flex-1 p-2 border rounded"
            placeholder="Votre avis..."
          />
        </div>
      </div>
    </div>
  );
};

export default Forum;
