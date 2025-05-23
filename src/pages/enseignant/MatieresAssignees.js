import React, { useEffect, useState } from "react";
import axios from "axios";
import { BookOpen, Loader2 } from "lucide-react";

const MatieresAssignees = () => {
  const [matieres, setMatieres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enseignantId, setEnseignantId] = useState(null);

  useEffect(() => {
    // Récupérer l'utilisateur connecté
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const userId = res.data.id;
        // Récupérer les infos de l'enseignant à partir de son user_id
        axios
          .get(`http://localhost:8000/api/enseignants/by-user/${userId}`)
          .then((res) => {
            const ensId = res.data.id;
            setEnseignantId(ensId);
            // Charger les matières assignées
            axios
              .get(`http://localhost:8000/api/enseignant/matieres/${ensId}`)
              .then((res) => {
                setMatieres(res.data);
                setLoading(false);
              })
              .catch((err) => {
                console.error("Erreur chargement matières:", err);
                setLoading(false);
              });
          });
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="text-blue-600" /> Matières Assignées
      </h2>
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="animate-spin h-6 w-6 text-gray-500" />
        </div>
      ) : matieres.length === 0 ? (
        <p className="text-gray-500">Aucune matière assignée pour le moment.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {matieres.map((matiere) => (
            <li key={matiere.id} className="py-3">
              <div className="flex flex-col">
                <span className="font-medium text-gray-800">{matiere.nom}</span>
                <span className="text-sm text-gray-500">
                  Classe : {matiere.classe}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MatieresAssignees;
