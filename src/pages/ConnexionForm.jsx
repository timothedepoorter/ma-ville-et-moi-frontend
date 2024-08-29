import React from 'react';
import { Button } from '../components/Button'; 

const ConnexionForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-background-form p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-black text-xl font-bold mb-4">Connexion</h2>
        <form>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="email">
              mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="password">
              password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
            />
          </div>

          <div className="text-center">
            <Button
              label="valider"
              variant="primary"
              className="text-base"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnexionForm;
