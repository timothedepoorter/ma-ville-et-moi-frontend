import React from 'react';
import { Button } from '../components/Button'; 

const ModificationForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-background-form p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-black text-xl font-bold mb-4">Modification de compte</h2>
        <form>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="lastName">
              last-name
            </label>
            <input
              type="text-black"
              id="Last Name" 
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="firstName">
              first-name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
            />
          </div>

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

          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="resident">
              Résident ?
            </label>
            <input
              type="checkbox"
              id="resident"
              className="w-4 h-4"
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

export default ModificationForm;
