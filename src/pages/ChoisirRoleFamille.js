import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const ChoisirRoleFamille = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-r from-white to-blue-50">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Choisissez votre type de connexion
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Parent */}
        <div
          className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition cursor-pointer"
          onClick={() => navigate("/login?role=parent")}
        >
          <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
            <UserIcon className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Connexion Parent
          </h2>
          <p className="text-gray-500 text-sm">
            Accédez au suivi scolaire de votre enfant.
          </p>
        </div>

        {/* Étudiant */}
        <div
          className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition cursor-pointer"
          onClick={() => navigate("/login?role=etudiant")}
        >
          <div className="bg-green-100 text-green-600 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
            <AcademicCapIcon className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            Connexion Étudiant
          </h2>
          <p className="text-gray-500 text-sm">
            Consultez vos cours et votre progression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChoisirRoleFamille;
