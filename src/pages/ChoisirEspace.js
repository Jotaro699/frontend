import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UsersIcon,
  BookOpenIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

const HomePage = () => {
  const navigate = useNavigate();


  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{
        background: "linear-gradient(to right, #ffffff, #f2f6fc)",
      }}
    >
      {/* Titre principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-2">
        Bienvenue sur la Plateforme Éducative
      </h1>
      <p className="text-gray-600 text-center text-lg mb-10">
        Choisissez votre espace pour commencer
      </p>

      {/* Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Famille */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <UsersIcon className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Espace Famille
          </h2>
          <p className="text-gray-500 text-sm mb-4 max-w-xs">
            Inscrivez votre enfant ou connectez-vous pour suivre sa progression.
          </p>
          <button
            onClick={() => navigate("/choisir-role-famille")}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2"
          >
            <ArrowRightCircleIcon className="w-5 h-5" />
            Accéder
          </button>
        </div>

        {/* Enseignant */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="bg-green-100 text-green-600 rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <BookOpenIcon className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            Espace Enseignant
          </h2>
          <p className="text-gray-500 text-sm mb-4 max-w-xs">
            Connectez-vous pour gérer vos classes et suivre vos élèves.
          </p>
          <button
            onClick={() => navigate("/login?role=enseignant")}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition flex items-center gap-2"
          >
            <ArrowRightCircleIcon className="w-5 h-5" />
            Accéder
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
